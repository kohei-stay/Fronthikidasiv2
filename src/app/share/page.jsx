"use client";

import React from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import Link from 'next/link'; // Linkをインポート

const YourComponent = () => {

  return (
    <div className="flex flex-col p-4">
      {/* 最上部の共有ボタン */}
      <div className="flex justify-start mb-4">
        <button className="bg-pink-500 text-white p-2 rounded shadow hover:shadow-lg hover:bg-pink-600">
          共有した資料を見る
        </button>
      </div>

      {/* コンテナ */}
      <div className="border p-4 mb-4">
        <p className="text-lg">📣2件の通知があります。</p>
        <div className="flex items-center mb-2">
          <button className="bg-sky-300 text-black px-2 py-1 rounded shadow hover:bg-sky-400">
            内容確認
          </button>
          <p className="ml-2">[承認完了] 第一営業部　田中さんの承認が完了しました。</p>
        </div>
        <div className="flex items-center mb-2">
          <button className="bg-sky-300 text-black px-2 py-1 rounded shadow hover:bg-sky-400">
            内容確認
          </button>
          <p className="ml-2">[質疑] 第一営業部　伊藤さんより質疑のコメントが届いています。</p>
        </div>
        <div className="border-t border-gray-300 my-4"></div>

        {/* 中心の資料共有ボタン */}
        <div className="flex justify-center mb-4">
        <Link href="/share_gold" className="w-full max-w-[50%]">
          <button className="bg-pink-500 text-black p-4 rounded shadow hover:shadow-lg hover:bg-pink-600 text-3xl font-bold w-full">
            資料を共有する
          </button>
        </Link>

        </div>

        {/* 下書きと共有中のボタン */}
        <div className="flex justify-center mb-4 space-x-4">
          <button className="bg-white text-black p-4 rounded shadow hover:shadow-lg text-3xl w-1/4">下書き</button>
          <button className="bg-white text-black p-4 rounded shadow hover:shadow-lg text-3xl w-1/4">共有中</button>
        </div>

        <div className="border-t border-gray-300 my-4"></div>

        {/* 円グラフとゴールドステージのテキスト */}
        <div className="flex items-center justify-center space-x-6">
          <div className="w-64 h-64">
            <DoughnutChart />
          </div>
          <div className="text-center">
            <p>
              ゴールドステージまで<br />
              あと<span className="text-5xl font-bold">200</span>ポイント
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
