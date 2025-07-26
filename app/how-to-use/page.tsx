export const metadata = {
  title: 'How to Use | SABACAN',
  description: 'Learn how to use SABACAN to improve your English with video-based quizzes, vocabulary, and listening practice.',
};

import fs from 'fs';
import path from 'path';
import Link from 'next/link';

type QuizMeta = {
  slug: string;
  title: string;
  channel: string;
  publishedAt: string;
  thumbnail: string;
};

function getLatestQuizzes(count: number): QuizMeta[] {
  const dir = path.join(process.cwd(), 'public/data/category');
  const files = fs.readdirSync(dir);

  const items: QuizMeta[] = files
    .filter((f) => f.endsWith('.json'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
      const data = JSON.parse(raw);
      return {
        slug: data.slug,
        title: data.movie_title,
        channel: data.channel_name,
        publishedAt: data.published_at,
        thumbnail: `/img/img-${data.slug}.webp`,
      };
    })
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);

  return items;
}

export default function HowToUsePage() {
  const latest = getLatestQuizzes(3);

  return (
    <main className="max-w-5xl mx-auto py-8 px-4 text-black dark:text-white">
      <h1 className="text-2xl font-bold mb-4">How to Use SABACAN</h1>

      <p className="mb-4">
        Welcome to <strong>SABACAN</strong>! SABACAN is a listening practice site where you can learn English effectively and enjoyably using real YouTube videos and AI-generated quizzes.
      </p>

      <p className="mb-4">
        It's designed for everyone—students, working professionals, and those restarting their studies. This page will walk you through how to use SABACAN step by step.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">👭 Step-by-Step Guide</h2>

      <h3 className="font-semibold mt-4">1. Choose a Video</h3>
      <p className="mb-2">
        From the homepage, search for videos that match your interests and English level (beginner to advanced). Each article contains an embedded YouTube video.
      </p>
      <p className="italic text-sm mb-4">🎥 Tip: You can preview the duration, category, and level beforehand.</p>

      <h3 className="font-semibold mt-4">2. Try the Listening Quiz</h3>
      <p className="mb-2">
        Each video comes with 5 listening quiz questions based on its content.
      </p>
      <ul className="list-disc list-inside mb-2">
        <li>3-choice multiple-choice questions</li>
        <li>See the correct answer and explanation immediately</li>
        <li>Score displayed after completing all questions</li>
      </ul>
      <p className="italic text-sm mb-4">💡 Don't worry if you get it wrong—learning from mistakes is key!</p>

      {/* ✅ Quiz Display Section */}
      <h2 className="text-xl font-semibold mt-8 mb-2">🎯 Let’s try it now!</h2>
      <p className="mb-4">Pick a quiz and see how it works in action:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {latest.map((item, index) => (
          <Link
              key={item.slug}
              href={`/article/${item.slug}`}
              className="block border rounded shadow hover:shadow-lg overflow-hidden"
            >
              <div className="relative w-full aspect-video">
                <img
                  src={`/img/img-${item.slug}.webp`}
                  alt={item.title}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-t"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">Channel: {item.channel}</p>
              </div>
            </Link>
        ))}
      </div>

      <div className="text-center mb-8">
        <Link href="/articles">
          <button className="btn-primary">Browse All Quizzes ➜</button>
        </Link>
      </div>

      {/* 続き */}
      <h3 className="font-semibold mt-4">3. Review Vocabulary</h3>
      <p className="mb-2">
        Below the quiz, you'll find a vocabulary section with key words from the video.
      </p>
      <ul className="list-disc list-inside mb-2">
        <li>Important words and phrases highlighted</li>
        <li>Simple English definitions provided</li>
        <li>Memorable example sentences included</li>
      </ul>
      <p className="italic text-sm mb-4">📘 You can add words to your favorites and review them later.</p>

      <h3 className="font-semibold mt-4">4. Sign In to Track Your Progress</h3>
      <p className="mb-2">
        Create a free account to unlock the following features:
      </p>
      <ul className="list-disc list-inside mb-2">
        <li>Save your quiz history</li>
        <li>View past scores in one place</li>
        <li>Manage your favorite words</li>
        <li>Access upcoming features early (coming soon)</li>
      </ul>
      <p className="italic text-sm mb-4">🔐 You can sign up easily with an email or social login.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">🔁 Learn Anytime, Anywhere</h2>
      <p className="mb-4">
        SABACAN works great on smartphones too, with new content added regularly. Make it part of your daily routine and improve your English in your spare time!
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">🌐 Want to switch to Japanese?</h2>
      <p className="mb-4">
        You can switch languages using the toggle button at the top of the page.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">💬 Need Help?</h2>
      <p>
        Check our <a href="#/faq" className="text-blue-500 underline">FAQ</a> or <a href="/contact" className="text-blue-500 underline">Contact Us</a> page.
      </p>

      <p className="mt-6 text-center">Start learning English with SABACAN today!</p>
    </main>
  );
}
