// src/app/page.jsx

"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md text-center w-96"> {/* 幅を指定 */}
        {/* 画像 */}
        <div className="mb-6">
          <Image
            src="/image/logo.png" // 画像のパスを設定
            alt="Login Image"
            width={150} // 画像の幅を調整
            height={150} // 画像の高さを調整
            className="mx-auto"
          />
        </div>

        {/* ログインボタン */}
        <Link href="/login_user">
          <button className="w-full mb-4 bg-sky-300 text-black font-bold py-2 px-4 rounded shadow-lg hover:bg-sky-400 transition duration-200">
            ユーザーログイン
          </button>
        </Link>

        {/* 管理者用ボタン */}
        <Link href="/login_manager">
          <button className="w-full bg-black text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-gray-800 transition duration-200">
            管理者はこちら
          </button>
        </Link>
      </div>
    </div>
  );
}