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
};

export default function FilterSidebar({
  category,
  setCategory,
  channel,
  setChannel,
  level,
  setLevel,
  completion,
  setCompletion,
  allCategories,
  allChannels,
}: Props) {
  const resetFilters = () => {
    setCategory('all');
    setChannel('all');
    setLevel('all');
    setCompletion('all');
  };

  const applyFilters = () => {
    // 必要に応じてフィルター適用時のロジックをここに追加
    // 今のところ set～ がすでに反映しているので、ボタンはあくまで「意図を明確にする」ための見た目用
  };

  return (
    <div className="space-y-4 p-4 text-sm text-black dark:text-white">
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

      {/* ✅ 追加：検索ボタン */}
      <button
        onClick={applyFilters}
        className="w-full px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        Apply Filters
      </button>

      {/* ✅ 移動：リセットボタン */}
      <button
        onClick={resetFilters}
        className="w-full px-4 py-2 rounded bg-gray-300 text-gray-900 dark:bg-gray-600 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-500"
      >
        Reset Filters
      </button>
    </div>
  );
}
