"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginUserPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      // メールアドレスとパスワードをバックエンドに送信
      const response = await fetch('https://tech0-gen-7-step4-studentwebapp-pos-18-e0gvedfkdag3chab.eastus-01.azurewebsites.net/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // ログイン成功
        alert('ログイン成功');
        router.push('https://tech0-7th-shiryousan-hwcka0dgcja4dafw.japaneast-01.azurewebsites.net/home'); // ホームに遷移
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
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-96 relative">
        
        {/* ロゴ画像 */}
        <div className="mb-6 text-center">
          <Image
            src="/image/logo.png"
            alt="Login Image"
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>

        {/* メールアドレス入力欄 */}
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />

        {/* パスワード入力欄 */}
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />

        {/* ログインボタン */}
        <button 
          onClick={handleLogin}
          className="w-full mb-4 bg-sky-300 text-black font-bold py-2 px-4 rounded shadow-lg hover:bg-sky-400 transition duration-200"
        >
          ログイン
        </button>

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
      </div>
    </div>
  );
}
