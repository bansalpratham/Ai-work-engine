"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  History, 
  LayoutTemplate, 
  Zap, 
  PlusCircle, 
  Settings,
  HelpCircle
} from "lucide-react";

const menuItems = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "My History", href: "/dashboard/history", icon: History },
  { name: "Templates", href: "/dashboard/templates", icon: LayoutTemplate },
  { name: "Viva Mode", href: "/dashboard/viva", icon: Zap },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 bottom-6 left-6 w-72 glass-floating rounded-3xl flex flex-col p-6 shadow-ambient z-30 border border-white/10">
      <div className="mb-10 mt-4 px-2">
        <h1 className="headline-md gradient-text w-max cursor-default">Cognitive</h1>
      </div>
      
      <div className="flex flex-col space-y-2 flex-1">
        <div className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-4 ml-4 opacity-50">
          Main Menu
        </div>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.href}
              href={item.href} 
              className={`
                group flex items-center space-x-3 py-3 px-4 rounded-xl transition-all duration-300
                ${isActive 
                  ? "bg-primary/10 text-primary shadow-glow border border-primary/20" 
                  : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
                }
              `}
            >
              <Icon size={20} className={`transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-primary" : "text-on-surface-variant"}`} />
              <span className="title-md text-sm">{item.name}</span>
            </Link>
          );
        })}
      </div>

      <div className="mt-auto pt-6 border-t border-white/5 space-y-2">
        <Link href="/settings" className="flex items-center space-x-3 py-3 px-4 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all text-sm">
          <Settings size={18} />
          <span>Settings</span>
        </Link>
        <Link href="/help" className="flex items-center space-x-3 py-3 px-4 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all text-sm mb-6">
          <HelpCircle size={18} />
          <span>Help Center</span>
        </Link>
        
        <Link href="/create" className="block w-full">
          <div className="gradient-primary text-white shadow-glow hover:brightness-110 hover:shadow-[0_0_15px_rgba(129,140,248,0.4)] rounded-xl py-3.5 flex items-center justify-center space-x-2 font-semibold transition-all group">
            <PlusCircle size={18} className="group-hover:rotate-90 transition-transform duration-500" />
            <span>New Creation</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

