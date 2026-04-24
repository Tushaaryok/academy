"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, CalendarDays, Receipt, 
  Video, Settings, LogOut,
  School
} from "lucide-react";
import { cn } from "@/packages/lib/utils";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-full bg-[#0d1117] text-[#dfe2eb] overflow-hidden">
      {/* Cinematic Background Blurs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 -top-20 -left-20 rounded-full blur-[100px]" />
        <div className="absolute w-[400px] h-[400px] bg-purple-500/10 bottom-0 right-0 rounded-full blur-[100px]" />
      </div>

      <aside className="fixed left-0 top-0 h-full w-64 flex flex-col p-6 bg-slate-950/40 backdrop-blur-3xl border-r border-white/10 z-50">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-10 h-10 bg-cyan-400 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,210,255,0.3)]">
              <School className="text-slate-900 w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white tracking-tighter uppercase leading-none">Portal</h2>
              <p className="text-[10px] text-cyan-400 font-black tracking-widest uppercase opacity-70">Cadet Center</p>
            </div>
          </div>
        </div>

        <nav className="flex-grow space-y-2">
          <NavItem 
            href="/dashboard" 
            icon={<LayoutDashboard className="w-5 h-5" />} 
            label="Dashboard" 
            active={pathname === "/dashboard"} 
          />
          <NavItem 
            href="/attendance" 
            icon={<CalendarDays className="w-5 h-5" />} 
            label="Attendance" 
            active={pathname === "/attendance"} 
          />
          <NavItem 
            href="/fees" 
            icon={<Receipt className="w-5 h-5" />} 
            label="Fees" 
            active={pathname === "/fees"} 
          />
          <NavItem 
            href="/lectures" 
            icon={<Video className="w-5 h-5" />} 
            label="Lectures" 
            active={pathname === "/lectures"} 
          />
        </nav>

        <div className="mt-auto space-y-4 pt-6 border-t border-white/5">
          <NavItem 
            href="/settings" 
            icon={<Settings className="w-5 h-5" />} 
            label="Settings" 
            active={pathname === "/settings"} 
          />
          <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-slate-500 hover:text-red-400 hover:bg-red-400/5 transition-all uppercase text-[10px] font-black tracking-widest">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-grow ml-64 overflow-y-auto relative z-10">
        {children}
      </main>
    </div>
  );
}

function NavItem({ href, icon, label, active }: any) {
  return (
    <Link 
      href={href}
      className={cn(
        "flex items-center gap-4 px-4 py-3 rounded-xl transition-all uppercase text-[10px] font-black tracking-widest",
        active 
          ? "bg-gradient-to-r from-cyan-500/20 to-transparent border-l-4 border-cyan-400 text-white" 
          : "text-slate-500 hover:text-white hover:bg-white/5"
      )}
    >
      {icon}
      {label}
    </Link>
  );
}
