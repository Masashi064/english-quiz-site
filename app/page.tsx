import articles from './data/all-articles.json';
import Link from 'next/link';
import heroImage from './assets/top-img1.webp';

export default function HomePage() {
  const latest = articles
    .sort((a, b) => new Date(b.published_date).getTime() - new Date(a.published_date).getTime())
    .slice(0, 24);

  return (
    <main className="text-black dark:text-white">
      {/* Hero セクション */}
      <section className="relative w-full h-[60vh] bg-black text-white flex items-center justify-center">
        <img
          src="/assets/top-img1.webp"
          alt="Hero image"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="z-10 text-center">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">Welcome to SABACAN</h1>
          <p className="text-lg drop-shadow-md">Boost your English skills with fun video quizzes!</p>
        </div>
      </section>


      {/* 最新クイズ */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">🆕 Latest Quizzes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((item, index) => (
            <Link
              key={item.slug}
              href={`/article/${item.slug}`}
              className="block border rounded shadow hover:shadow-lg overflow-hidden"
            >
              <div className="relative w-full aspect-video">
                <img
                  src={`/img/img-${item.slug}.webp`}
                  alt={item.movie_title}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-t"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{item.movie_title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Channel: {item.channel_name}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/top">
            <button className="btn-primary">Browse All Quizzes ➜</button>
          </Link>
        </div>
      </section>
    </main>
  );
}
