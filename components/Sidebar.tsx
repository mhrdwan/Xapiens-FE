'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Users,
  Calendar,
  MessageSquare,
  User,
  LogOut,
  Home
} from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
    { icon: User, label: 'List User', href: '/dashboard/user' },
   
  ];

  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white fixed left-0 top-0">
      <div className="flex items-center p-4 border-b border-gray-700">
        <div className="text-xl font-bold">Xapiens</div>
      </div>

      <nav className="flex-1 py-4">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors ${
                isActive ? 'bg-gray-800 text-white' : ''
              }`}
            >
              <item.icon size={20} />
              <span className="ml-4">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-700">
        <button className="flex items-center w-full px-4 py-2 text-red-400 hover:bg-gray-800 rounded-lg transition-colors">
          <LogOut size={20} />
          <Link href={"/login"} onClick={()=>localStorage.removeItem('token')} className="ml-4">Keluar</Link>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;