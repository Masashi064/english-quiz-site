'use client';

type Props = {
  category: string;
  setCategory: (v: string) => void;
  channel: string;
  setChannel: (v: string) => void;
  level: string;
  setLevel: (v: string) => void;
  completion: string;
  setCompletion: (v: string) => void;
  allCategories: string[];
  allChannels: string[];
  sortKey: 'published_at' | 'duration' | 'published_date'
  setSortKey: (v: 'published_at' | 'duration' | 'published_date') => void
  sortOrder: 'asc' | 'desc'
  setSortOrder: (v: 'asc' | 'desc') => void
};

export default function FilterSidebar(props: Props) {
  const {
    category, setCategory,
    channel, setChannel,
    level, setLevel,
    completion, setCompletion,
    allCategories, allChannels,
    sortKey, setSortKey,
    sortOrder, setSortOrder
  } = props;
  const resetFilters = () => {
    setCategory('all');
    setChannel('all');
    setLevel('all');
    setCompletion('all');
    setSortKey('published_at')
    setSortOrder('desc')
  };

  return (
    <div className="space-y-4 p-4 text-sm text-black dark:text-white">
      {/* 並び替え */}
      <div>
        <label className="block font-semibold mb-1">Sort</label>
        <div className="grid grid-cols-2 gap-2">
          <select
            className="w-full bg-white dark:bg-gray-800 border dark:border-gray-600"
            value={sortKey}
            onChange={(e) =>
              setSortKey(e.target.value as 'published_at' | 'duration' | 'published_date')
            }
          >
            <option value="published_at">Published date</option>
            <option value="duration">Duration</option>
            <option value="published_date">Article date</option>
          </select>
          <select
            className="w-full bg-white dark:bg-gray-800 border dark:border-gray-600"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
          >
            <option value="desc">Desc (new → old / long → short)</option>
            <option value="asc">Asc (old → new / short → long)</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block font-semibold mb-1">Channel</label>
        <select
          className="w-full bg-white dark:bg-gray-800 border dark:border-gray-600 text-black dark:text-white"
          value={channel}
          onChange={(e) => setChannel(e.target.value)}
        >
          <option value="all">All Channels</option>
          {allChannels.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-1">Category</label>
        <select
          className="w-full bg-white dark:bg-gray-800 border dark:border-gray-600 text-black dark:text-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {allCategories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-1">Level</label>
        <select
          className="w-full bg-white dark:bg-gray-800 border dark:border-gray-600 text-black dark:text-white"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="all">All Levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-1">Completion</label>
        <select
          className="w-full bg-white dark:bg-gray-800 border dark:border-gray-600 text-black dark:text-white"
          value={completion}
          onChange={(e) => setCompletion(e.target.value)}
        >
          <option value="all">All Quizzes</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Yet to try</option>
        </select>
      </div>

      <button
        onClick={resetFilters}
        className="mt-4 w-full px-4 py-2 rounded bg-gray-300 text-gray-900 dark:bg-gray-600 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-500"
      >
        Reset Filters
      </button>
    </div>
  );
}
