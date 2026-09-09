// src/components/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Bot, 
  FolderOpen, 
  FileText, 
  StickyNote, 
  Target, 
  Settings, 
  LogOut 
} from "lucide-react";
import { cn } from "@/lib/utils"; // shadcn utility for conditional classes

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "AI Study Hub", href: "/ai", icon: Bot },
  { name: "My Files", href: "/files", icon: FolderOpen },
  { name: "Notes", href: "/notes", icon: FileText },
  { name: "Sticky Notes", href: "/sticky", icon: StickyNote },
  { name: "Habit Tracker", href: "/habits", icon: Target },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col w-64 h-screen px-4 py-6 bg-white border-r dark:bg-gray-900 dark:border-gray-800 fixed md:relative">
      {/* Logo / Brand */}
      <div className="mb-8 px-2">
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          StudyHub
        </h1>
        <p className="text-xs text-gray-500 mt-1">Your digital workspace</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              )}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="pt-4 border-t dark:border-gray-800 space-y-1">
        <Link href="/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
          <Settings size={20} />
          Settings
        </Link>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}
