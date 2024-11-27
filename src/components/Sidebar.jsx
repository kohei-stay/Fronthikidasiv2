// components/Sidebar.jsx
"use client"; // クライアントコンポーネントであることを指定

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen w-60 bg-yellow-400 text-black fixed flex flex-col p-4">
      <nav className="flex flex-col gap-4">
        <Link
          href="/home_main"
          className={`p-2 rounded ${pathname === '/home_main' ? 'bg-gray-900 text-white' : 'hover:bg-gray-900 hover:text-white'}`}
        >
          ホーム
        </Link>
        <Link
          href="/mypage_manager_top"
          className={`p-2 rounded ${pathname === '/mypage_manager_top' || pathname === '/mypage_manager_ap' || pathname === '/mypage_manager_con' || pathname === '/mypage_manager_done' ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-900 hover:text-white'}`}
        >
          マイページ
        </Link>

        <Link
          href="/share"
          className={`p-2 rounded ${pathname === '/share' || pathname === '/share_gold' ? 'bg-gray-900 text-white' : 'hover:bg-gray-900 hover:text-white'}`}
        >
          資料を共有する
        </Link>

        <Link
          href="/ranking"
          className={`p-2 rounded ${pathname === '/ranking' ? 'bg-gray-900 text-white' : 'hover:bg-gray-900 hover:text-white'}`}
        >
          ランキング
        </Link>
        <Link
          href="/wiki"
          className={`p-2 rounded ${pathname === '/wiki' ? 'bg-gray-900 text-white' : 'hover:bg-gray-900 hover:text-white'}`}
        >
          wiki
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
