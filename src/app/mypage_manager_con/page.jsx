"use client";

import Link from 'next/link';
import React from 'react';

const Mypage_manager_con = () => {
  return (
    <div className="flex flex-col" style={{ paddingTop: '60px' }}>
      {/* 大きなコンテナ */}
      <div className="flex border overflow-hidden">
        
        {/* 左側の内容 */}
        <div className="w-1/2 p-4">
        <img src="/image/chirashi.png" alt="Description" className="mb-4 rounded-lg" />
        <div className="flex justify-center space-x-4">
            <button className="bg-pink-500 text-white px-4 py-2 rounded drop-shadow hover:bg-pink-600">内容を確認</button>
            <button className="bg-pink-500 text-white px-4 py-2 rounded drop-shadow hover:bg-pink-600">差し戻し</button>
            <Link href="/mypage_manager_done">
            <button className="bg-pink-500 text-white px-4 py-2 rounded drop-shadow hover:bg-pink-600">承認</button>
            </Link>
            </div>
        </div>


        {/* 右側の内容 */}
        <div className="w-1/2 p-4 bg-white">
          <div className="flex justify-end mb-4">
            <span>2024/11/05</span>
          </div>
          <h2 className="text-xl font-bold mb-2">法人営業　見直し提案</h2>
          <p className="mb-4">第二営業部　伊藤一郎</p>
          <div className="flex space-x-4 mb-4">
            <button className="bg-white text-gray-500 border border-gray-300 px-4 py-2 rounded ">♥21いいね！</button>
            <button className="bg-white text-gray-500 border border-gray-300 px-4 py-2 rounded ">💬2コメント</button>
            <button className="bg-white text-gray-500 border border-gray-300 px-4 py-2 rounded ">😊10ありがとう</button>
          </div>
          <p className="text-gray-500 mb-2">商材 <span className="bg-gray-200 p-1 rounded">保険</span> <span className="bg-gray-200 p-1 rounded">法人営業</span></p>
          <p className="text-gray-500 mb-2">プロジェクト <span className="bg-gray-200 p-1 rounded">保険</span> <span className="bg-gray-200 p-1 rounded">法人営業</span> <span className="bg-gray-200 p-1 rounded">〇〇</span></p>
          <hr className="border-gray-300 my-4" />


          <h3 className="font-bold mb-2">概要</h3>
          <p className="mb-4">・法人保険の見直し提案に使用するチラシ</p>
          <div className="mb-4">#法人保険 #提案 #営業</div>
          <hr className="border-gray-300 my-4" />

          <h3 className="font-bold mb-2">実績状況</h3>
          <p className="mb-4">・提案後、契約決まり個人売上120%達成</p>
          <hr className="border-gray-300 my-4" />

          <h3 className="font-bold mb-2">作成背景</h3>
          <p className="mb-4">・法人向けの保険営業に積極的にいけていない</p>
          <hr className="border-gray-300 my-4" />

          <h3 className="font-bold mb-2">顧客の反応</h3>
          <p className="mb-4">・好感触、わかりやすい</p>
          <hr className="border-gray-300 my-4" />

          <h3 className="font-bold mb-2">トーク等参考</h3>
          <a href="/path/to/your/script.txt" className="text-blue-500 underline">トーク.txt</a>

        </div>
      </div>
    </div>
  );
};

export default Mypage_manager_con;
