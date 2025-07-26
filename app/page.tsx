'use client'

import TopArticleList from './components/TopArticleList'
import articles from './data/all-articles.json'

export default function HomePage() {
  return <TopArticleList articles={articles} />
}
