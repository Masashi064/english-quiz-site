'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FilterSidebar from '../components/FilterSidebar'
import { FaFilter } from 'react-icons/fa'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { app } from '../../lib/firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

type Article = {
  slug: string
  movie_title: string
  channel_name: string
  movie_url: string
  thumbnail_url: string
  duration: string
  published_at: string
  published_date?: string
  assigned_category?: string
  assigned_level?: string
  completed?: boolean
}

const parseDuration = (iso: string): number => {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  if (!match) return 0
  const [, h, m, s] = match.map(Number)
  return (h || 0) * 3600 + (m || 0) * 60 + (s || 0)
}

const formatDuration = (iso: string): string => {
  const seconds = parseDuration(iso)
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')} min`
}

const formatDate = (iso: string): string => {
  return new Date(iso).toLocaleDateString()
}

export default function TopArticleList({ articles }: { articles: Article[] }) {
  const [category, setCategory] = useState('all')
  const [channel, setChannel] = useState('all')
  const [level, setLevel] = useState('all')
  const [completion, setCompletion] = useState('all')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([])
  const [loadedCompletion, setLoadedCompletion] = useState(false)

  const handleDrawerToggle = () => setDrawerOpen((prev) => !prev)

  // ✅ completion フィルターが変更されたら、初回のみ Firebase データを取得
  useEffect(() => {
    if (!loadedCompletion && completion !== 'all') {
      const fetchCompleted = async () => {
        const auth = getAuth(app)
        const user = auth.currentUser
        if (!user) return

        const db = getFirestore(app)
        const ref = collection(db, 'users', user.uid, 'quizResults')
        const snapshot = await getDocs(ref)

        const slugs = snapshot.docs
          .filter(doc => doc.data().score > 0)
          .map(doc => doc.id)

        setCompletedSlugs(slugs)
        setLoadedCompletion(true)
      }

      fetchCompleted()
    }
  }, [completion, loadedCompletion])
  

  const allCategories = Array.from(new Set(articles.map((a) => a.assigned_category).filter(Boolean))) as string[]
  const allChannels = Array.from(new Set(articles.map((a) => a.channel_name)))

  const filtered = articles
    .map((a) => ({
      ...a,
      completed: completedSlugs.includes(a.slug),
    }))
    .filter((a) => {
      const matchCategory = category === 'all' || a.assigned_category === category
      const matchLevel = level === 'all' || a.assigned_level === level
      const matchChannel = channel === 'all' || a.channel_name === channel
      const matchCompletion =
        completion === 'all' ||
        (completion === 'completed' && a.completed) ||
        (completion === 'uncompleted' && !a.completed)

      return matchCategory && matchLevel && matchChannel && matchCompletion
    })

  const sorted = [...filtered].sort((a, b) => {
    const aDate = new Date(a.published_date || a.published_at).getTime()
    const bDate = new Date(b.published_date || b.published_at).getTime()
    return bDate - aDate
  })

  return (
    <main className="flex max-w-7xl mx-auto">
      {/* PC sidebar */}
      <aside className="hidden md:block w-64 border-r bg-gray-50 dark:bg-black">
        <FilterSidebar
          category={category}
          setCategory={setCategory}
          channel={channel}
          setChannel={setChannel}
          level={level}
          setLevel={setLevel}
          completion={completion}
          setCompletion={setCompletion}
          allCategories={allCategories}
          allChannels={allChannels}
        />
      </aside>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setDrawerOpen(false)} />
          <div
            className="absolute top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <FilterSidebar
              category={category}
              setCategory={setCategory}
              channel={channel}
              setChannel={setChannel}
              level={level}
              setLevel={setLevel}
              completion={completion}
              setCompletion={setCompletion}
              allCategories={allCategories}
              allChannels={allChannels}
            />
          </div>
        </div>
      )}

      {/* Mobile Filter Button */}
      <button
        onClick={handleDrawerToggle}
        className="fixed bottom-6 right-6 z-40 bg-blue-600 text-white p-4 rounded-full shadow-lg md:hidden"
        aria-label="Open filter drawer"
      >
        <FaFilter size={24} />
      </button>

      <section className="flex-1 px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">📅 Newest Articles First</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {sorted.map((a, index) => (
            <Link
              key={a.slug}
              href={`/article/${a.slug}`}
              className="block border rounded shadow hover:shadow-lg overflow-hidden bg-white dark:bg-gray-900"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={`/img/img-${a.slug}.webp`}
                  alt={a.movie_title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{a.movie_title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">Channel: {a.channel_name}</p>
                <p className="text-sm mt-1">
                  🕒 {formatDuration(a.duration)} / 📅 {formatDate(a.published_date || a.published_at)}
                </p>
                <span className="inline-block mt-3 text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                  ▶ Read article
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
