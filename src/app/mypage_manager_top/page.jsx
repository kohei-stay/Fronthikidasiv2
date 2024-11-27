"use client";

import React from 'react';
import Link from 'next/link';

export default function MyPage() {
  return (
    <div className="flex flex-col p-4 space-y-4">

      {/* 最上部のボタン */}
      <div className="flex space-x-4 mb-4">
        <button className="bg-pink-500 text-white p-2 rounded shadow hover:shadow-lg hover:bg-pink-600">
          管理者設定
        </button>
        <Link href="/mypage_manager_ap">
        <button className="bg-pink-500 text-white p-2 rounded shadow hover:shadow-lg hover:bg-pink-600">
          承認画面
        </button>
        </Link>
      </div>

      {/* コンテンツ全体を囲むコンテナボックス */}
      <div className="border border-gray-300 p-6 bg-white">

        {/* カードコンテナ */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { icon: '❤️', text: 'いいね！した資料一覧' },
            { icon: '⏰', text: '閲覧履歴' },
            { icon: '🔄', text: 'フォローリスト' },
            { icon: '👜', text: 'ダウンロードした資料' },
            { icon: '📄', text: '共有した資料' },
            { icon: '📢', text: 'お知らせ' }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center border border-gray-300 rounded p-4 h-32">
              <span className="text-3xl mb-2">{item.icon}</span>
              <span className="text-center">{item.text}</span>
            </div>
          ))}
        </div>

        {/* 横線 */}
        <div className="border-t border-gray-300 mb-6"></div>

        {/* 現在のポイント */}
        <div className="flex items-center justify-start mb-4">
          <span className="text-gray-600">現在のポイント</span>
          <span className="text-pink-500 text-7xl font-bold mx-2">500</span>
          <span className="text-gray-600">pt</span>
        </div>

        {/* 横線 */}
        <div className="border-t border-gray-300 mb-6"></div>

        {/* 現在のステージ */}
        <div className="flex items-center justify-start">
          <span className="text-gray-600">現在のステージ</span>
          <span className="text-yellow-500 text-9xl mx-2">✡</span>
          <span className="text-gray-600">あなたは</span>
          <span className="text-pink-500 font-bold text-3xl mx-2">プラチナステージ</span>
          <span className="text-gray-600">です。</span>
        </div>
      </div>
    </div>
  );
}
