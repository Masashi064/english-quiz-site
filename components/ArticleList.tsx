'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/lib/useAuth'
import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'

type CategoryItem = {
  slug: string
  movie_title: string
  assigned_category: string
  assigned_level: string
  channel_name: string
  movie_url: string
  thumbnail_url: string
  duration: string
  published_at: string
  published_date?: string
}

const allCategories = [
  'science', 'conversation', 'news', 'technology',
  'psychology', 'culture', 'history', 'lifestyle','comedy',
]
const allLevels = ['beginner', 'intermediate', 'advanced']

export default function ArticleList({ slugs }: { slugs: string[] }) {
  const { user } = useAuth()
  const [articles, setArticles] = useState<CategoryItem[]>([])
  const [category, setCategory] = useState('all')
  const [level, setLevel] = useState('all')
  const [search, setSearch] = useState('')
  const [sortKey, setSortKey] = useState<'duration' | 'published_at' | 'published_date'>('published_date')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [completionFilter, setCompletionFilter] = useState<'all' | 'completed' | 'uncompleted'>('all')
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([])
  const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>({})
  const [levelCounts, setLevelCounts] = useState<Record<string, number>>({})
  const [completedCount, setCompletedCount] = useState(0)
  const [uncompletedCount, setUncompletedCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10


  // 🔁 クイズ履歴の取得
  useEffect(() => {
    Promise.all(
      slugs.map((slug) =>
        fetch(`/data/category/category-${slug}.json`)
          .then((res) => res.json())
          .catch(() => null)
      )
    ).then((results) => {
      const loaded = results.filter((a): a is CategoryItem => !!a)
      setArticles(loaded)

      // 🔢 カテゴリ・レベルごとの件数をカウント
      const catCounts: Record<string, number> = {}
      const lvlCounts: Record<string, number> = {}

      loaded.forEach((a) => {
        catCounts[a.assigned_category] = (catCounts[a.assigned_category] || 0) + 1
        lvlCounts[a.assigned_level] = (lvlCounts[a.assigned_level] || 0) + 1
      })

      setCategoryCounts(catCounts)
      setLevelCounts(lvlCounts)

      // ✅ ここが今回追加する completed/uncompleted カウント処理
      const completed = loaded.filter((a) => completedSlugs.includes(a.slug)).length
      const uncompleted = loaded.length - completed
      setCompletedCount(completed)
      setUncompletedCount(uncompleted)
    })
  }, [slugs, completedSlugs])


useEffect(() => {
  const fetchData = async () => {
    const results = await Promise.all(
      slugs.map((slug) =>
        fetch(`/data/category/category-${slug}.json`).then((res) => res.json()).catch(() => null)
      )
    )

    const loaded = results.filter((a): a is CategoryItem => !!a)
    setArticles(loaded)

    // ✅ 件数カウント
    const catCounts: Record<string, number> = {}
    const lvlCounts: Record<string, number> = {}

    loaded.forEach((a) => {
      catCounts[a.assigned_category] = (catCounts[a.assigned_category] || 0) + 1
      lvlCounts[a.assigned_level] = (lvlCounts[a.assigned_level] || 0) + 1
    })

    setCategoryCounts(catCounts)
    setLevelCounts(lvlCounts)

    // ✅ 完了クイズ数（もし user がいれば）
    if (user) {
      const quizRef = collection(db, 'users', user.uid, 'quizResults')
      const quizSnap = await getDocs(quizRef)
      const completed: string[] = []
      quizSnap.forEach((doc) => {
        const data = doc.data()
        if (data.slug) completed.push(data.slug)
      })
      setCompletedSlugs(completed)

      const completedCount = loaded.filter((a) => completed.includes(a.slug)).length
      setCompletedCount(completedCount)
      setUncompletedCount(loaded.length - completedCount)
    }
  }

  fetchData()
}, [slugs, user])

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

  const filtered = articles
    .filter((a) => {
      const matchCategory = category === 'all' || a.assigned_category === category
      const matchLevel = level === 'all' || a.assigned_level === level
      const matchSearch =
        a.movie_title.toLowerCase().includes(search.toLowerCase()) ||
        a.channel_name.toLowerCase().includes(search.toLowerCase())

      const isCompleted = completedSlugs.includes(a.slug)
      const matchCompletion =
        completionFilter === 'all' ||
        (completionFilter === 'completed' && isCompleted) ||
        (completionFilter === 'uncompleted' && !isCompleted)

      return matchCategory && matchLevel && matchSearch && matchCompletion
    })
    .sort((a, b) => {
      let aVal: number, bVal: number

      if (sortKey === 'duration') {
        aVal = parseDuration(a.duration)
        bVal = parseDuration(b.duration)
      } else if (sortKey === 'published_date') {
        // ✅ 記事の更新日
        aVal = new Date(a.published_date || a.published_at).getTime()
        bVal = new Date(b.published_date || b.published_at).getTime()
      } else if (sortKey === 'published_at') {
        // ✅ 動画の公開日
        aVal = new Date(a.published_at).getTime()
        bVal = new Date(b.published_at).getTime()
      } else {
        aVal = 0
        bVal = 0
      }

      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal
    })

  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const renderPagination = () => {
    const pageNumbers: (number | string)[] = []

    if (totalPages <= 7) {
      // 全部表示（ページが少ない場合）
      for (let i = 1; i <= totalPages; i++) pageNumbers.push(i)
    } else {
      pageNumbers.push(1)

      if (currentPage > 3) pageNumbers.push('...')

      const startPage = Math.max(2, currentPage - 1)
      const endPage = Math.min(totalPages - 1, currentPage + 1)

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i)
      }

      if (currentPage < totalPages - 2) pageNumbers.push('...')

      pageNumbers.push(totalPages)
    }

    return pageNumbers.map((page, index) => {
      if (page === '...') {
        return (
          <span key={`ellipsis-${index}`} className="px-2 py-1 text-gray-500 dark:text-gray-400">
            ...
          </span>
        )
      }

      return (
        <button
          key={`page-${page}`}
          onClick={() => setCurrentPage(Number(page))}
          className={`px-3 py-1 border rounded ${
            currentPage === page
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white'
          }`}
        >
          {page}
        </button>
      )
    })

  }


  return (
    <main className="px-2 sm:px-4 md:px-6 py-6 max-w-5xl mx-auto text-black dark:text-white bg-white dark:bg-black min-h-screen">
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value)
            setCurrentPage(1) 
          }}
          className="h-10 px-3 border rounded text-sm bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 appearance-none"
        >
          <option value="all">All Categories ({articles.length})</option>
          {allCategories.map((c) => (
            <option key={c} value={c}>
              {c} ({categoryCounts[c] || 0})
            </option>
          ))}
        </select>

        <select
          value={level}
          onChange={(e) => {
            setLevel(e.target.value)
            setCurrentPage(1) 
          }}
          className="h-10 px-3 border rounded text-sm bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 appearance-none"
        >
          <option value="all">All Levels ({articles.length})</option>
          {allLevels.map((l) => (
            <option key={l} value={l}>
              {l} ({levelCounts[l] || 0})
            </option>
          ))}
        </select>

        <select
          value={completionFilter}
          onChange={(e) => {
            setCompletionFilter(e.target.value as any)
            setCurrentPage(1) 
          }}
          className="h-10 px-3 border rounded text-sm bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 appearance-none"
        >
          <option value="all">All Quizzes ({articles.length})</option>
          <option value="uncompleted">Yet to try ({uncompletedCount})</option>
          <option value="completed">Completed ({completedCount})</option>
        </select>

        
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setCurrentPage(1) 
          }}
          placeholder="Search by title or channel"
          className="p-2 border rounded flex-grow bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />

        <select
          value={sortKey}
          onChange={(e) => {
            setSortKey(e.target.value as any)
            setCurrentPage(1) 
          }}
          className="p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600 appearance-none"
        >
          <option value="published_date">Sort by: Article Updated Date</option>
          <option value="published_at">Sort by: Video Published Date</option>
          <option value="duration">Sort by: Video Duration</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => {
            setSortOrder(e.target.value as any)
            setCurrentPage(1) 
          }}
          className="p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600 appearance-none"
        >
          <option value="desc">↓ Desc</option>
          <option value="asc">↑ Asc</option>
        </select>

        <button
          onClick={() => {
            setCategory('all')
            setLevel('all')
            setCompletionFilter('all')
            setSearch('')
            setSortKey('published_date')
            setSortOrder('desc')
          }}
          className="h-10 px-4 rounded text-sm bg-gray-300 text-gray-900 dark:bg-gray-600 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-500"
        >
          Reset Filters
        </button>



      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {paginated.map((a, index) => {
          const isCompleted = completedSlugs.includes(a.slug)

          const cardStyle = isCompleted
            ? 'p-4 border rounded relative shadow hover:shadow-lg bg-green-100 border-green-500 dark:bg-green-500/30 dark:border-green-400 text-black dark:text-white'
            : 'p-4 border rounded relative shadow hover:shadow-lg bg-white dark:bg-gray-800 text-black dark:text-white'

          return (
            <Link
              key={a.slug}
              href={`/article/${a.slug}`}
              className="block border rounded shadow hover:shadow-lg overflow-hidden bg-white dark:bg-gray-900"
            >
              <div className="relative w-full aspect-video">
                <img
                  src={`/img/img-${a.slug}.webp`}
                  alt={a.movie_title}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className="object-cover w-full h-full absolute top-0 left-0"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{a.movie_title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">Channel: {a.channel_name}</p>
                <p className="text-sm mt-1">
                  📂 {a.assigned_category} / 🎯 {a.assigned_level} / 🕒 {formatDuration(a.duration)} / 📅 {formatDate(a.published_at)}
                </p>
                <span className="inline-block mt-3 text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                  ▶ Read article
                </span>
              </div>
            </Link>
          )
        })}
      </div>
      <div className="flex flex-wrap justify-center mt-10 mb-20 gap-2">
        {renderPagination()}
      </div>

    </main>
  )
}
