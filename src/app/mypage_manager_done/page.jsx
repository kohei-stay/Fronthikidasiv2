"use client";

import React from 'react';
import Link from 'next/link';

const Mypage_manager_ap = () => {
  return (
    <div className="flex flex-col p-4">
      {/* 最上部のボタン */}
      <div className="flex space-x-4 mb-4">
        <button className="bg-pink-500 text-white p-2 rounded shadow hover:shadow-lg hover:bg-pink-600">
          管理者設定
        </button>
        <Link href="/mypage_manager_top">
        <button className="bg-pink-500 text-white p-2 rounded shadow hover:shadow-lg hover:bg-pink-600">
          マイページトップ
        </button>
        </Link>
      </div>

      {/* コンテナ */}
      <div className="border p-4 mb-4">
        <p className="text-lg">📣5件の通知があります。</p>
        <div className="flex items-center mb-2">
        <button className="bg-black text-white px-4 py-1 rounded shadow">
            承認済
        </button>
          <p className="ml-2">[承認] 第二営業部　伊藤さんの資料を承認しました。</p>
        </div>
        <div className="flex items-center mb-2">
          <button className="bg-sky-300 text-black px-2 py-1 rounded shadow hover:bg-sky-400">
            内容確認
          </button>
          <p className="ml-2">[承認] 第二営業部　鈴木さんからwikiの追加申請がありました。</p>
        </div>
        <div className="flex items-center mb-2">
          <button className="bg-sky-300 text-black px-2 py-1 rounded shadow hover:bg-sky-400">
            内容確認
          </button>
          <p className="ml-2">[質問] 第二営業部　佐藤さんからの質問があります。</p>
        </div>
        <div className="flex items-center mb-2">
          <button className="bg-sky-300 text-black px-2 py-1 rounded shadow hover:bg-sky-400">
            内容確認
          </button>
          <p className="ml-2">[承認] 第二営業部　上田さんより資料がアップされました。</p>
        </div>        
        <div className="flex items-center mb-2">
          <button className="bg-sky-300 text-black px-2 py-1 rounded shadow hover:bg-sky-400">
            内容確認
          </button>
          <p className="ml-2">[質問] 第二営業部　佐藤さんからの質問があります。</p>
        </div>
      </div>
    </div>
  );
};

export default Mypage_manager_ap;
