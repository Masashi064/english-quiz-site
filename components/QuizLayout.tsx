'use client'

import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useAuth } from '@/context/AuthContext'

import { useEffect, useState } from 'react'
import VocabularyCard from './VocabularyCard'
import { useMemo } from 'react'
import { handleQuizAnswer, handleQuizReadComplete } from '@/lib/gtag'


type QuizItem = {
  question: string
  choices: string[]
  answer: string
  explanation: string
}

type VocabItem = {
  word: string
  definition: string
  example: string
}

type Props = {
  slug: string
  movieTitle: string
  leadIntro: string
  quiz: QuizItem[]
  vocabulary: VocabItem[]
  videoId: string
  channelName: string
  category: string
  level: string
  duration?: string
  publishedAt?: string
}

export default function QuizLayout({
  slug,  // ✅ これを追加
  movieTitle,
  leadIntro,
  quiz,
  vocabulary,
  videoId,
  channelName,
  category,
  level,
  duration,
  publishedAt,
}: Props) {
  const { user } = useAuth()
  const [answers, setAnswers] = useState<(string | null)[]>(Array(quiz.length).fill(null))
  const [saved, setSaved] = useState(false)

  const handleAnswer = async (questionIndex: number, choice: string) => {
    if (answers[questionIndex] !== null) return
    const newAnswers = [...answers]
    newAnswers[questionIndex] = choice
    setAnswers(newAnswers)

    // 🔽 ここでGAイベント送信
    const isCorrect = choice === quiz[questionIndex].answer
    handleQuizAnswer(movieTitle, questionIndex, isCorrect)

    const allAnswered = newAnswers.every((a) => a !== null)
    if (allAnswered && user && !saved) {
      setSaved(true)
      await addDoc(collection(db, `users/${user.uid}/quizResults`), {
        userId: user.uid,
        slug,
        videoId,
        movieTitle,
        score: newAnswers.filter((a, i) => a === quiz[i].answer).length,
        total: quiz.length,
        category,
        level,
        channelName,
        timestamp: serverTimestamp(),
        referrer: document.referrer || 'direct',
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screenWidth: window.innerWidth,
        version: 'quiz-v1.2.0',
      })
    }
  }

  const score = answers.filter((a, i) => a === quiz[i].answer).length
  const allAnswered = answers.every((a) => a !== null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [feedbackText, setFeedbackText] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // ページ最下部までスクロールされたら送信（5px以内）
      if (scrollY + viewportHeight >= fullHeight - 5) {
        handleQuizReadComplete(movieTitle);
        window.removeEventListener('scroll', handleScroll); // 1回で解除
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [movieTitle]);

  const submitFeedback = async () => {
    if (!feedbackText.trim()) return

    const feedbackRef = collection(db, user
      ? `users/${user.uid}/feedbacks`
      : `feedbacks/public`
    )

    await addDoc(feedbackRef, {
      userId: user?.uid || 'anonymous',
      slug,
      videoId,
      movieTitle,
      feedback: feedbackText.trim(),
      timestamp: serverTimestamp(),
      userAgent: navigator.userAgent,
      platform: navigator.platform,
    })

    setFeedbackText('')
    setShowFeedback(false)
    alert('Thanks for your feedback!')
  }


  return (
    <main className="+ px-4 py-10 max-w-3xl mx-auto space-y-10 text-black dark:text-white bg-white dark:bg-black">
      <h1 className="text-3xl font-bold">{movieTitle}</h1>
      <p className="text-gray-600 dark:text-gray-300">{leadIntro}</p>

      <section>
        <h2 className="text-xl font-semibold mt-10 mb-2">📺 Watch the Video</h2>
        <div className="aspect-video mb-4">
          <iframe
            className="w-full h-[315px] rounded"
            src={`https://www.youtube.com/embed/${videoId}?cc_load_policy=1&rel=0&modestbranding=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Channel: {channelName} / 📂 {category} / 🎯 {level} / ⏱ Duration: {duration} / 📅 Published: {publishedAt ? new Date(publishedAt).toLocaleDateString() : 'N/A'}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-10 mb-2">🧠 Quiz</h2>
        {quiz.map((q, i) => {
          const selected = answers[i]
          const isCorrect = selected === q.answer
          const shuffledChoices = useMemo(() => {
            const copy = [...q.choices];
            for (let i = copy.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [copy[i], copy[j]] = [copy[j], copy[i]];
            }
            return copy;
          }, [q.question]); // 問題が変わったときだけシャッフルされる
          const boxStyle = selected
            ? isCorrect
              ? 'bg-green-100 border-green-500 dark:bg-green-500/30 dark:border-green-400'
              : 'bg-red-100 border-red-500 dark:bg-red-500/30 dark:border-red-400'
            : 'bg-white dark:bg-gray-800 border dark:border-gray-700'

          return (
            <div key={i} className={`mb-6 p-4 rounded shadow ${boxStyle}`}>
              <p className="font-bold mb-2">{i + 1}. {q.question}</p>
              <ul className="space-y-2">
               {shuffledChoices.map((c, j) => (
                  <li
                    key={j}
                    className="p-2 border rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => handleAnswer(i, c)}
                  >
                    {c}
                  </li>
                ))}
              </ul>
              {selected && (
                <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                  <p className="font-semibold text-green-700 dark:text-green-300">Answer: {q.answer}</p>
                  <p>{q.explanation}</p>
                </div>
              )}
            </div>
          )
        })}
        {allAnswered && (
          <>
            <p className="text-lg font-bold text-center text-blue-700 dark:text-blue-300 mt-4">
              ✅ Your Score: {score} / {quiz.length}
            </p>
            <div className="text-center mt-4">
              <a
                href="/top"
                className="text-blue-600 dark:text-blue-400 underline font-semibold"
              >
                👉 Try the next quiz!
              </a>
            </div>
          </>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-10 mb-2">📘 Vocabulary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {vocabulary
            .filter((v) => v && v.word && v.definition && v.example)
            .map((v, i) => (
              <VocabularyCard key={i} item={v} />
            ))}
        </div>
                <div className="text-center mt-6">
          <a
            href="/top"
            className="text-blue-600 dark:text-blue-400 underline font-semibold"
          >
            👉 Ready for another quiz?
          </a>
        </div>
      </section>
      <section>
      <h2 className="text-xl font-semibold mt-10 mb-2">🙋 Feedback</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        Found a mistake in the quiz or vocabulary?{' '}
        <span className="font-semibold text-yellow-600">Let us know!</span>
      </p>
      <button
        onClick={() => setShowFeedback(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        ✉ Report a Problem
      </button>

      {showFeedback && (
        <div className="mt-4">
          <textarea
            className="w-full h-24 p-2 border rounded text-black dark:text-white dark:bg-gray-800"
            placeholder="e.g. Question 3 has a typo in the choices..."
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          />
          <div className="flex justify-end mt-2">
            <button
              onClick={submitFeedback}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Submit
            </button>
            <button
              onClick={() => setShowFeedback(false)}
              className="ml-2 px-4 py-2 border rounded text-gray-700 dark:text-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
    </main>
  )
}
