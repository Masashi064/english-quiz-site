(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_ad7f62._.js", {

"[project]/lib/useAuth.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useAuth": (()=>useAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8bd0c73f$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__ = __turbopack_import__("[project]/node_modules/@firebase/auth/dist/esm2017/index-8bd0c73f.js [app-client] (ecmascript) <export z as onAuthStateChanged>");
var _s = __turbopack_refresh__.signature();
;
;
;
function useAuth() {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAuth.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$8bd0c73f$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "useAuth.useEffect.unsubscribe": (user)=>{
                    setUser(user);
                    setLoading(false);
                }
            }["useAuth.useEffect.unsubscribe"]);
            return ({
                "useAuth.useEffect": ()=>unsubscribe()
            })["useAuth.useEffect"];
        }
    }["useAuth.useEffect"], []);
    return {
        user,
        loading
    };
}
_s(useAuth, "NiO5z6JIqzX62LS5UWDgIqbZYyY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ArticleList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ArticleList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
const allCategories = [
    'science',
    'conversation',
    'news',
    'technology',
    'psychology',
    'culture',
    'history',
    'lifestyle',
    'comedy'
];
const allLevels = [
    'beginner',
    'intermediate',
    'advanced'
];
function ArticleList({ slugs }) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [articles, setArticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sortKey, setSortKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('published_date');
    const [sortOrder, setSortOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('desc');
    const [completionFilter, setCompletionFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [completedSlugs, setCompletedSlugs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [categoryCounts, setCategoryCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [levelCounts, setLevelCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [completedCount, setCompletedCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [uncompletedCount, setUncompletedCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const itemsPerPage = 10;
    // 🔁 クイズ履歴の取得
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleList.useEffect": ()=>{
            Promise.all(slugs.map({
                "ArticleList.useEffect": (slug)=>fetch(`/data/category/category-${slug}.json`).then({
                        "ArticleList.useEffect": (res)=>res.json()
                    }["ArticleList.useEffect"]).catch({
                        "ArticleList.useEffect": ()=>null
                    }["ArticleList.useEffect"])
            }["ArticleList.useEffect"])).then({
                "ArticleList.useEffect": (results)=>{
                    const loaded = results.filter({
                        "ArticleList.useEffect.loaded": (a)=>!!a
                    }["ArticleList.useEffect.loaded"]);
                    setArticles(loaded);
                    // 🔢 カテゴリ・レベルごとの件数をカウント
                    const catCounts = {};
                    const lvlCounts = {};
                    loaded.forEach({
                        "ArticleList.useEffect": (a)=>{
                            catCounts[a.assigned_category] = (catCounts[a.assigned_category] || 0) + 1;
                            lvlCounts[a.assigned_level] = (lvlCounts[a.assigned_level] || 0) + 1;
                        }
                    }["ArticleList.useEffect"]);
                    setCategoryCounts(catCounts);
                    setLevelCounts(lvlCounts);
                    // ✅ ここが今回追加する completed/uncompleted カウント処理
                    const completed = loaded.filter({
                        "ArticleList.useEffect": (a)=>completedSlugs.includes(a.slug)
                    }["ArticleList.useEffect"]).length;
                    const uncompleted = loaded.length - completed;
                    setCompletedCount(completed);
                    setUncompletedCount(uncompleted);
                }
            }["ArticleList.useEffect"]);
        }
    }["ArticleList.useEffect"], [
        slugs,
        completedSlugs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleList.useEffect": ()=>{
            const fetchData = {
                "ArticleList.useEffect.fetchData": async ()=>{
                    const results = await Promise.all(slugs.map({
                        "ArticleList.useEffect.fetchData": (slug)=>fetch(`/data/category/category-${slug}.json`).then({
                                "ArticleList.useEffect.fetchData": (res)=>res.json()
                            }["ArticleList.useEffect.fetchData"]).catch({
                                "ArticleList.useEffect.fetchData": ()=>null
                            }["ArticleList.useEffect.fetchData"])
                    }["ArticleList.useEffect.fetchData"]));
                    const loaded = results.filter({
                        "ArticleList.useEffect.fetchData.loaded": (a)=>!!a
                    }["ArticleList.useEffect.fetchData.loaded"]);
                    setArticles(loaded);
                    // ✅ 件数カウント
                    const catCounts = {};
                    const lvlCounts = {};
                    loaded.forEach({
                        "ArticleList.useEffect.fetchData": (a)=>{
                            catCounts[a.assigned_category] = (catCounts[a.assigned_category] || 0) + 1;
                            lvlCounts[a.assigned_level] = (lvlCounts[a.assigned_level] || 0) + 1;
                        }
                    }["ArticleList.useEffect.fetchData"]);
                    setCategoryCounts(catCounts);
                    setLevelCounts(lvlCounts);
                    // ✅ 完了クイズ数（もし user がいれば）
                    if (user) {
                        const quizRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'users', user.uid, 'quizResults');
                        const quizSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(quizRef);
                        const completed = [];
                        quizSnap.forEach({
                            "ArticleList.useEffect.fetchData": (doc)=>{
                                const data = doc.data();
                                if (data.slug) completed.push(data.slug);
                            }
                        }["ArticleList.useEffect.fetchData"]);
                        setCompletedSlugs(completed);
                        const completedCount = loaded.filter({
                            "ArticleList.useEffect.fetchData": (a)=>completed.includes(a.slug)
                        }["ArticleList.useEffect.fetchData"]).length;
                        setCompletedCount(completedCount);
                        setUncompletedCount(loaded.length - completedCount);
                    }
                }
            }["ArticleList.useEffect.fetchData"];
            fetchData();
        }
    }["ArticleList.useEffect"], [
        slugs,
        user
    ]);
    const parseDuration = (iso)=>{
        const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
        if (!match) return 0;
        const [, h, m, s] = match.map(Number);
        return (h || 0) * 3600 + (m || 0) * 60 + (s || 0);
    };
    const formatDuration = (iso)=>{
        const seconds = parseDuration(iso);
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')} min`;
    };
    const formatDate = (iso)=>{
        return new Date(iso).toLocaleDateString();
    };
    const filtered = articles.filter((a)=>{
        const matchCategory = category === 'all' || a.assigned_category === category;
        const matchLevel = level === 'all' || a.assigned_level === level;
        const matchSearch = a.movie_title.toLowerCase().includes(search.toLowerCase()) || a.channel_name.toLowerCase().includes(search.toLowerCase());
        const isCompleted = completedSlugs.includes(a.slug);
        const matchCompletion = completionFilter === 'all' || completionFilter === 'completed' && isCompleted || completionFilter === 'uncompleted' && !isCompleted;
        return matchCategory && matchLevel && matchSearch && matchCompletion;
    }).sort((a, b)=>{
        let aVal, bVal;
        if (sortKey === 'duration') {
            aVal = parseDuration(a.duration);
            bVal = parseDuration(b.duration);
        } else if (sortKey === 'published_date') {
            // ✅ 記事の更新日
            aVal = new Date(a.published_date || a.published_at).getTime();
            bVal = new Date(b.published_date || b.published_at).getTime();
        } else if (sortKey === 'published_at') {
            // ✅ 動画の公開日
            aVal = new Date(a.published_at).getTime();
            bVal = new Date(b.published_at).getTime();
        } else {
            aVal = 0;
            bVal = 0;
        }
        return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
    });
    const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const renderPagination = ()=>{
        const pageNumbers = [];
        if (totalPages <= 7) {
            // 全部表示（ページが少ない場合）
            for(let i = 1; i <= totalPages; i++)pageNumbers.push(i);
        } else {
            pageNumbers.push(1);
            if (currentPage > 3) pageNumbers.push('...');
            const startPage = Math.max(2, currentPage - 1);
            const endPage = Math.min(totalPages - 1, currentPage + 1);
            for(let i = startPage; i <= endPage; i++){
                pageNumbers.push(i);
            }
            if (currentPage < totalPages - 2) pageNumbers.push('...');
            pageNumbers.push(totalPages);
        }
        return pageNumbers.map((page, index)=>{
            if (page === '...') {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "px-2 py-1 text-gray-500 dark:text-gray-400",
                    children: "..."
                }, `ellipsis-${index}`, false, {
                    fileName: "[project]/components/ArticleList.tsx",
                    lineNumber: 207,
                    columnNumber: 11
                }, this);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setCurrentPage(Number(page)),
                className: `px-3 py-1 border rounded ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white'}`,
                children: page
            }, `page-${page}`, false, {
                fileName: "[project]/components/ArticleList.tsx",
                lineNumber: 214,
                columnNumber: 9
            }, this);
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "px-2 sm:px-4 md:px-6 py-6 max-w-5xl mx-auto text-black dark:text-white bg-white dark:bg-black min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: category,
                        onChange: (e)=>{
                            setCategory(e.target.value);
                            setCurrentPage(1);
                        },
                        className: "h-10 px-3 border rounded text-sm bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 appearance-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "all",
                                children: [
                                    "All Categories (",
                                    articles.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ArticleList.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this),
                            allCategories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: c,
                                    children: [
                                        c,
                                        " (",
                                        categoryCounts[c] || 0,
                                        ")"
                                    ]
                                }, c, true, {
                                    fileName: "[project]/components/ArticleList.tsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ArticleList.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: level,
                        onChange: (e)=>{
                            setLevel(e.target.value);
                            setCurrentPage(1);
                        },
                        className: "h-10 px-3 border rounded text-sm bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 appearance-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "all",
                                children: [
                                    "All Levels (",
                                    articles.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ArticleList.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this),
                            allLevels.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: l,
                                    children: [
                                        l,
                                        " (",
                                        levelCounts[l] || 0,
                                        ")"
                                    ]
                                }, l, true, {
                                    fileName: "[project]/components/ArticleList.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ArticleList.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: completionFilter,
                        onChange: (e)=>{
                            setCompletionFilter(e.target.value);
                            setCurrentPage(1);
                        },
                        className: "h-10 px-3 border rounded text-sm bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300 appearance-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "all",
                                children: [
                                    "All Quizzes (",
                                    articles.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ArticleList.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "uncompleted",
                                children: [
                                    "Yet to try (",
                                    uncompletedCount,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ArticleList.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "completed",
                                children: [
                                    "Completed (",
                                    completedCount,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ArticleList.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ArticleList.tsx",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: search,
                        onChange: (e)=>{
                            setSearch(e.target.value);
                            setCurrentPage(1);
                        },
                        placeholder: "Search by title or channel",
                        className: "p-2 border rounded flex-grow bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/components/ArticleList.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: sortKey,
                        onChange: (e)=>{
                            setSortKey(e.target.value);
                            setCurrentPage(1);
                        },
                        className: "p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600 appearance-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "published_date",
                                children: "Sort by: Article Updated Date"
                            }, void 0, false, {
                                fileName: "[project]/components/ArticleList.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "published_at",
                                children: "Sort by: Video Published Date"
                            }, void 0, false, {
                                fileName: "[project]/components/ArticleList.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "duration",
                                children: "Sort by: Video Duration"
                            }, void 0, false, {
                                fileName: "[project]/components/ArticleList.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ArticleList.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: sortOrder,
                        onChange: (e)=>{
                            setSortOrder(e.target.value);
                            setCurrentPage(1);
                        },
                        className: "p-2 border rounded bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600 appearance-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "desc",
                                children: "↓ Desc"
                            }, void 0, false, {
                                fileName: "[project]/components/ArticleList.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "asc",
                                children: "↑ Asc"
                            }, void 0, false, {
                                fileName: "[project]/components/ArticleList.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ArticleList.tsx",
                        lineNumber: 304,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setCategory('all');
                            setLevel('all');
                            setCompletionFilter('all');
                            setSearch('');
                            setSortKey('published_date');
                            setSortOrder('desc');
                        },
                        className: "h-10 px-4 rounded text-sm bg-gray-300 text-gray-900 dark:bg-gray-600 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-500",
                        children: "Reset Filters"
                    }, void 0, false, {
                        fileName: "[project]/components/ArticleList.tsx",
                        lineNumber: 316,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ArticleList.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: paginated.map((a, index)=>{
                    const isCompleted = completedSlugs.includes(a.slug);
                    const cardStyle = isCompleted ? 'p-4 border rounded relative shadow hover:shadow-lg bg-green-100 border-green-500 dark:bg-green-500/30 dark:border-green-400 text-black dark:text-white' : 'p-4 border rounded relative shadow hover:shadow-lg bg-white dark:bg-gray-800 text-black dark:text-white';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/article/${a.slug}`,
                        className: "block border rounded shadow hover:shadow-lg overflow-hidden bg-white dark:bg-gray-900",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full aspect-video",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: `/img/img-${a.slug}.webp`,
                                    alt: a.movie_title,
                                    fill: true,
                                    sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
                                    priority: index === 0,
                                    className: "object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/components/ArticleList.tsx",
                                    lineNumber: 349,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ArticleList.tsx",
                                lineNumber: 348,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-lg mb-1",
                                        children: a.movie_title
                                    }, void 0, false, {
                                        fileName: "[project]/components/ArticleList.tsx",
                                        lineNumber: 359,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 dark:text-gray-300",
                                        children: [
                                            "Channel: ",
                                            a.channel_name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ArticleList.tsx",
                                        lineNumber: 360,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm mt-1",
                                        children: [
                                            "📂 ",
                                            a.assigned_category,
                                            " / 🎯 ",
                                            a.assigned_level,
                                            " / 🕒 ",
                                            formatDuration(a.duration),
                                            " / 📅 ",
                                            formatDate(a.published_at)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ArticleList.tsx",
                                        lineNumber: 361,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block mt-3 text-blue-600 dark:text-blue-400 font-semibold hover:underline",
                                        children: "▶ Read article"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ArticleList.tsx",
                                        lineNumber: 364,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ArticleList.tsx",
                                lineNumber: 358,
                                columnNumber: 15
                            }, this)
                        ]
                    }, a.slug, true, {
                        fileName: "[project]/components/ArticleList.tsx",
                        lineNumber: 343,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/ArticleList.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center mt-10 mb-20 gap-2",
                children: renderPagination()
            }, void 0, false, {
                fileName: "[project]/components/ArticleList.tsx",
                lineNumber: 372,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ArticleList.tsx",
        lineNumber: 232,
        columnNumber: 5
    }, this);
}
_s(ArticleList, "VJ3OPFYxc6ihMXRurI37QZVw1V8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = ArticleList;
var _c;
__turbopack_refresh__.register(_c, "ArticleList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/articles/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_ad7f62._.js.map