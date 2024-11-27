"use client";
// components/Logo.jsx
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="absolute top-6 right-4 flex items-center space-x-2">
      <div className="text-gray-700">
        ログインユーザー：営業部　田中太郎
      </div>      <Image
        src="/image/logo.png" // ここにロゴ画像のパスを指定
        alt="ロゴ"
        width={50} // ロゴの幅
        height={50} // ロゴの高さ
        className="rounded" // 必要に応じてスタイルを追加
      />
    </div>
  );
};

export default Logo;
