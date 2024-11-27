"use client"; // クライアントコンポーネントとして設定

// src/app/layout.jsx
import './globals.css'; // グローバルスタイルをインポート
import Sidebar from '../components/Sidebar'; // Sidebarをインポート
import Logo from '../components/Logo'; // Logoをインポート
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // サイドバーを非表示にするページのパスを配列で定義
  const noSidebarPaths = ['/login_user', '/login_manager', '/'];

  // 現在のパスがnoSidebarPathsのいずれかに一致するか判定
  const isNoSidebarPage = noSidebarPaths.includes(pathname);

  return (
    <html lang="ja">
      <body>
        <div className="flex">
          {!isNoSidebarPage && <Sidebar />} {/* 特定ページ以外でサイドバーを表示 */}
          <div className={isNoSidebarPage ? 'flex-grow p-4' : 'ml-60 flex-grow p-4'}>
            {!isNoSidebarPage && <Logo />} {/* 特定ページ以外でロゴを表示 */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
