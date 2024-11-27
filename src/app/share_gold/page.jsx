"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const YourUploadPage = () => {
  const [isRegisterPopupVisible, setIsRegisterPopupVisible] = useState(false);
  const [isApplicationPopupVisible, setIsApplicationPopupVisible] = useState(false);

  // 登録ボタンを押したときの処理
  const handleRegisterClick = () => {
    setIsRegisterPopupVisible(true);
    setTimeout(() => setIsRegisterPopupVisible(false), 3000); // 3秒後にポップアップを自動で非表示に
  };

  // 申請ボタンを押したときの処理
  const handleApplicationClick = () => {
    setIsApplicationPopupVisible(true);
    setTimeout(() => setIsApplicationPopupVisible(false), 3000); // 3秒後にポップアップを自動で非表示に
  };

  return (
    <div className="flex flex-col p-4 relative">
      {/* 最上部の共有ボタン */}
      <div className="flex justify-start mb-4">
        <button className="bg-pink-500 text-white p-2 rounded shadow hover:shadow-lg hover:bg-pink-600">
          共有した資料を見る
        </button>
      </div>

      {/* コンテナ */}
      <div className="border p-4 mb-4">
        {/* 1段目 */}
        <p className="text-lg mb-4">ファイルを選択</p>
        
        {/* 2段目 - ドラッグ＆ドロップボックス */}
        <div className="border-dashed border-2 border-gray-400 h-32 flex items-center justify-center mb-4">
          <p className="text-center">ファイルをドラッグしてアップロード</p>
        </div>

        {/* 3段目 - 下向きの矢印をセンターに配置 */}
        <div className="flex justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20" // サイズを指定
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m0 0l-4-4m4 4l4-4"
            />
          </svg>
        </div>

        {/* 4～11段目 - フォーム */}
        <div className="grid grid-cols-2 gap-4">
          {/* 4段目 */}
          <div>
            <label className="block mb-1">タイトル</label>
            <input type="text" className="border p-2 h-12 w-full placeholder-gray-300" placeholder="タイトルを入力" />
          </div>
          <div>
            <label className="block mb-1">業種</label>
            <select className="border p-2 h-12 w-full placeholder-gray-300">
              <option value="">選択してください</option>
              <option value="業種1">業種1</option>
              <option value="業種2">業種2</option>
              {/* 他の業種も追加 */}
            </select>
          </div>

        {/* 5段目 */}
        <div>
            <label className="block mb-1">説明</label>
            <textarea className="border p-2 h-12 w-full placeholder-gray-300" placeholder="説明を入力"></textarea>
        </div>
        <div className="flex items-center">
            <div className="mr-2 w-full">
            <label className="block mb-1">使用期間</label>
            <div className="flex">
                <input type="date" className="border p-2 h-12 w-full placeholder-gray-300" />
                <span className="flex items-center mx-2">〜</span>
                <input type="date" className="border p-2 h-12 w-full placeholder-gray-300" />
            </div>
            </div>
        </div>

          {/* 6段目 */}
          <div>
            <label className="block mb-1">作成者</label>
            <div className="flex">
              <select className="border p-2 h-12 w-1/2 mr-2 placeholder-gray-300">
                <option value="">部署を選択</option>
                <option value="部署1">部署1</option>
                <option value="部署2">部署2</option>
              </select>
              <input type="text" className="border p-2 h-12 w-1/2 placeholder-gray-300" placeholder="名前" />
            </div>
          </div>
          <div>
            <label className="block mb-1">商材</label>
            <input type="text" className="border p-2 h-12 w-full placeholder-gray-300" />
          </div>

          {/* 7段目 */}
          <div>
            <label className="block mb-1">タグ</label>
            <input type="text" className="border p-2 h-12 w-full placeholder-gray-300" placeholder="#補助金 #中小企業" />
          </div>
          <div>
            <label className="block mb-1">価格帯</label>
            <select className="border p-2 h-12 w-full placeholder-gray-300">
              <option value="">選択してください</option>
              <option value="価格帯1">価格帯1</option>
              <option value="価格帯2">価格帯2</option>
            </select>
          </div>

          {/* 8段目 */}
          <div>
            <label className="block mb-1">効果</label>
            <input type="text" className="border p-2 h-12 w-full placeholder-gray-300" placeholder="契約に至り売上105%"/>
          </div>
          <div>
            <label className="block mb-1">営業トーク</label>
            <div className="border-dashed border-2 border-gray-400 h-12 flex items-center justify-center mb-4">
              <p className="text-center">ドラッグしてアップロード</p>
            </div>
          </div>

          {/* 10段目 */}
          <div>
            <label className="block mb-1">顧客の反応</label>
            <input type="text" className="border p-2 h-12 w-full placeholder-gray-300" />
          </div>
          <div>
            <label className="block mb-1">上位決裁者</label>
            <input type="text" className="border p-2 h-12 w-full placeholder-gray-300" placeholder="〇〇@〇〇.co.jp" />
          </div>

          {/* 11段目 */}
          <div>
            <label className="block mb-1">作成背景</label>
            <textarea className="border p-2 h-12 w-full placeholder-gray-300"></textarea>
          </div>
          <div>
            <label className="block mb-1">通知の宛先</label>
            <input type="text" className="border p-2 h-12 w-full placeholder-gray-300" placeholder="〇〇@〇〇.co.jp" />
          </div>
        </div>

        {/* 12段目 - ボタンを追加 */}
        <div className="flex justify-end mt-4">
          <button
            className="bg-gray-400 text-gray-300 p-2 font-bold rounded shadow mr-2 hover:shadow-lg hover:bg-gray-500"
            onClick={handleApplicationClick}
          >
            申請
          </button>
          <button
            className="bg-pink-500 text-white p-2 font-bold rounded shadow hover:shadow-lg hover:bg-pink-600"
            onClick={handleRegisterClick}
          >
            登録
          </button>
        </div>
      </div>

      {/* 登録完了ポップアップ */}
      {isRegisterPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-300 text-black p-4 rounded shadow-lg">
            登録が完了しました！
          </div>
        </div>
      )}

      {/* 申請完了ポップアップ */}
      {isApplicationPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-300 text-black p-4 rounded shadow-lg">
            申請が完了しました！
          </div>
        </div>
      )}

      </div>
  );
};

export default YourUploadPage;