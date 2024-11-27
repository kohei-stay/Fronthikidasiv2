"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // useRouterをインポート

export default function LoginManagerPage() {
  const [managerId, setManagerId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // useRouterを使用してルーティングを管理

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // バックエンドにリクエストを送信
      const response = await fetch('http://localhost:5000/api/login-manager', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ managerId, password }), // 管理者IDとパスワードを送信
      });

      const data = await response.json();

      if (response.ok) {
        // ログイン成功
        alert('ログイン成功');
        router.push('http://localhost:3000/home'); // ホームに遷移
      } else {
        // ログイン失敗
        alert(data.message || 'ログイン失敗');
      }
    } catch (error) {
      console.error('ログインエラー:', error);
      alert('サーバーエラーが発生しました。');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-sky-300 p-8 rounded-lg shadow-md text-center w-96 relative">
        <div className="mb-6">
          <Image
            src="/image/logo.png" 
            alt="Login Image"
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>
        
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="管理者ID"
            value={managerId}
            onChange={(e) => setManagerId(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            required
          />
          <button type="submit" className="w-full bg-black text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-gray-800 transition duration-200">
            ログイン
          </button>

          <div className="mt-4 text-gray-600 font-bold">
            管理者ログイン
          </div>

          {/* 戻るボタン */}
          <Link href="/" className="flex items-center mt-4 text-gray-500 hover:text-gray-800">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 mr-2 transition-colors duration-200 ease-in-out" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth="3"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M15 12H3m0 0l9-9m-9 9l9 9" 
              />
            </svg>
            <span>戻る</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
