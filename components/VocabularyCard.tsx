import { useState, useEffect } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp, query, where, getDocs, deleteDoc } from 'firebase/firestore'
import { useAuth } from '@/context/AuthContext'
import { handleVocabSaved } from '@/lib/gtag'



type VocabItem = {
  word: string
  definition: string
  example: string
}

type Props = {
  item?: VocabItem  // ← 安全のため optional に
}

export default function VocabularyCard({ item }: Props) {
  const [flipped, setFlipped] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const { user } = useAuth()

  // 安全チェック：itemが渡っていなければ表示しない
  if (!item || !item.word || !item.definition) {
    return null
  }

  const toggleFavorite = async () => {
    const key = `favorite-${item.word}`
    const newState = !isFavorite
    setIsFavorite(newState)
    localStorage.setItem(key, JSON.stringify(newState))

    if (!user) return

    const favRef = collection(db, `users/${user.uid}/favoriteWords`)
    const q = query(favRef, where('word', '==', item.word))
    const snap = await getDocs(q)

    if (newState) {
      if (snap.empty) {
        await addDoc(favRef, {
          userId: user.uid,
          word: item.word,
          definition: item.definition,
          example: item.example,
          timestamp: serverTimestamp(),
        })
      }

      // ✅ ここで GA にイベント送信
      handleVocabSaved(item.word);
    } else {
      // 🔴 Firestoreから削除
      for (const doc of snap.docs) {
        await deleteDoc(doc.ref)
      }
    }
  }

  const speakWord = (word: string) => {
    const utterance = new SpeechSynthesisUtterance(word)
    utterance.lang = 'en-US'
    speechSynthesis.speak(utterance)
  }

  useEffect(() => {
    const checkFavorite = async () => {
      if (!item?.word) return

      const saved = localStorage.getItem(`favorite-${item.word}`)
      if (saved !== null) {
        setIsFavorite(JSON.parse(saved))
        return
      }

      if (user?.uid) {
        const favRef = collection(db, `users/${user.uid}/favoriteWords`)
        const q = query(favRef, where('word', '==', item.word))
        const snap = await getDocs(q)
        if (!snap.empty) {
          setIsFavorite(true)
          localStorage.setItem(`favorite-${item.word}`, 'true')
        }
      }
    }

    checkFavorite()
  }, [item?.word, user?.uid])  




  return (
    <div
      className="flip-card w-full h-52 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`flip-inner relative w-full h-full rounded-2xl shadow-xl ${flipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front */}
        <div className="flip-front absolute inset-0 h-full w-full bg-gray-100 dark:bg-gray-700 border dark:border-gray-600 rounded-2xl flex flex-col justify-between items-center p-4 relative shadow-lg">
          <div
            onClick={(e) => {
              e.stopPropagation()
              //alert("❤️ ハートクリックされた！")
              toggleFavorite()
            }}
            className="absolute top-3 right-3 cursor-pointer"
          >
            <svg
              className={`w-6 h-6 transition-all
                ${isFavorite ? 'fill-red-500 dark:fill-white' : 'fill-none'}
                stroke-gray-400 dark:stroke-white
              `}
              viewBox="0 0 24 24"
            >
              <path d="M12 21s-8-6-8-11c0-2.7 2.1-5 5-5 1.7 0 3.2 1 4 2.5C14.8 6 16.3 5 18 5c2.9 0 5 2.3 5 5 0 5-8 11-8 11z"/>
            </svg>
          </div>

          <div className="flex flex-col items-center justify-center flex-grow gap-y-2">
            <div className="text-xl font-bold text-blue-800 dark:text-blue-300">{item.word}</div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                speakWord(item.word)
              }}
              className="text-3xl"
            >
              🔊
            </button>
          </div>
        </div>

        {/* Back */}
        <div className="flip-back absolute inset-0 h-full w-full bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-2xl flex flex-col items-center justify-center px-4 text-center shadow-lg">
          <div className="text-lg font-bold text-gray-800 dark:text-white">{item.definition}</div>
          <div className="text-sm mt-2 italic text-gray-600 dark:text-gray-400">"{item.example}"</div>
        </div>
      </div>

      <style jsx>{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-inner {
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .flip-front,
        .flip-back {
          backface-visibility: hidden;
        }
        .flip-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  )
}
