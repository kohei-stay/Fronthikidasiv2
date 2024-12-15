"use client";

import { useState } from "react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("メイン"); // 初期タブ
  const [query, setQuery] = useState(""); // 検索クエリ
  const [results, setResults] = useState([]); // 検索結果
  const [loading, setLoading] = useState(false); // ローディング状態
  const [error, setError] = useState(""); // エラー状態

  // 検索ボタンが押されたときの処理
  const handleSearch = async () => {
    if (!query) {
      setError("検索キーワードを入力してください");
      return;
    }
    setError("");
    setLoading(true);
    try {
      // API呼び出し（仮のエンドポイント）
      const response = await fetch(`/https://tech0-gen-7-step4-studentwebapp-pos-18-e0gvedfkdag3chab.eastus-01.azurewebsites.net/home_main?q=${query}`);
      if (!response.ok) throw new Error("検索に失敗しました");
      const data = await response.json();
      setResults(data.results); // 検索結果をセット
    } catch (err) {
      setError(err.message || "エラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col p-4">
      {/* 最上部の要素 */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="何をお探しですか？"
            className="border border-gray-300 rounded-l-md p-2 h-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)} // 検索クエリをセット
          />
          <button
            className="bg-gray-300 p-2 rounded-r-md h-10"
            onClick={handleSearch}
          >
            <span role="img" aria-label="search">
              🔍
            </span>
          </button>
        </div>
      </div>

      {/* タブ付きコンテナ */}
      <div className="flex flex-col mb-4">
        <div className="flex space-x-4 border-b border-gray-300 mb-0">
          {["メイン", "担当者", "商材", "プロジェクト"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 ${
                activeTab === tab
                  ? "border-b-4 border-pink-500 font-extrabold"
                  : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* タブコンテンツ */}
        <div className="border border-gray-300 p-4">
          {/* 検索ページのコンテンツ */}
          <div className="flex flex-col space-y-6">
            {/* 検索用テキストボックス */}
            <div>
              <input
                type="text"
                placeholder="キーワードを入力してください。　例）繊維　サンプル　デザイン　1000万円"
                className="w-full border border-gray-300 p-2 h-10"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            {/* 検索ボタン */}
            <div className="flex justify-end mt-4">
              <button
                className="bg-sky-300 text-black font-bold p-2 rounded shadow hover:bg-sky-400"
                onClick={handleSearch}
              >
                検索
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 検索結果表示 */}
      <div className="mt-6">
        {loading && <p>検索中...</p>} {/* ローディング中の表示 */}
        {error && <p className="text-red-500">{error}</p>} {/* エラー表示 */}
        {results.length > 0 && (             // 検索結果が存在する場合の表示 
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">    
            {results.map((item, index) => (
              <div
                key={index}
                className="border p-4 rounded shadow-sm hover:shadow-md"
              >
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p>{item.description}</p>
                <img src={item.image} alt={item.title} className="w-full" />
              </div>
            ))}
          </div>
        )}
        {results.length === 0 && !loading && !error && (
          <p>検索結果がありません。</p>
        )}
      </div>
    </div>


  );
}
