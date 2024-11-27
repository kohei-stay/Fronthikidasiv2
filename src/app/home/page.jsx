// pages/index.jsx
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* 画像 */}
      <Image 
        src="/image/logo.png" // publicフォルダ内の相対パス
        alt="Centered Image"
        width={200} // 画像の幅
        height={200} // 画像の高さ
      />
      {/* テキスト */}
      <h1 className="mt-4 text-2xl font-bold text-gray-800">ようこそ！</h1>
    </div>
  );
}
