"use client";

import React from "react";
import { 
  CalendarCheck, ShieldCheck, Video, 
  ClipboardList, Clock, Search, Notifications 
} from "lucide-react";
import { cn } from "@/packages/lib/utils";

export default function StudentDashboard() {
  return (
    <div className="p-10">
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tighter uppercase">Commander Overview</h1>
          <p className="text-slate-400 font-medium mt-1">Welcome back, Cadet. Your progress is ahead of schedule.</p>
        </div>
        <div className="flex gap-4">
          <button className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all cursor-pointer">
            <Search className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-all cursor-pointer relative">
            <Notifications className="w-5 h-5" />
            <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full animate-ping" />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard icon={<CalendarCheck className="text-cyan-400" />} label="Attendance" value="85%" />
            <StatCard icon={<ShieldCheck className="text-purple-400" />} label="Fees Status" value="Paid" />
            <StatCard icon={<Video className="text-amber-400" />} label="Today's Lectures" value="3" />
            <StatCard icon={<ClipboardList className="text-red-400" />} label="Assignments" value="2" />
          </div>

          {/* Timetable */}
          <div className="glass-panel rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/5">
              <h3 className="text-xl font-black text-white flex items-center gap-3 uppercase tracking-tight">
                <Clock className="text-cyan-400 w-6 h-6" />
                Today's Timetable
              </h3>
              <button className="text-cyan-400 font-black text-[10px] uppercase tracking-widest hover:underline cursor-pointer">Full Schedule</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-white/5">
                    <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Time Slot</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Subject</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Faculty</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-500 uppercase tracking-widest">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <TableRow time="09:00 - 10:30 AM" subject="Advanced 3D Modeling" faculty="Dr. Aris Thorne" status="Live Now" active />
                  <TableRow time="11:00 - 12:30 PM" subject="Cinematic Lighting" faculty="Prof. Elena Vane" status="Scheduled" />
                  <TableRow time="02:00 - 03:30 PM" subject="Physics Rendering" faculty="Dr. Aris Thorne" status="Scheduled" />
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="glass-panel p-10 rounded-[3rem] text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 blur-3xl -mr-16 -mt-16" />
            <div className="relative mb-8 flex justify-center">
              <div className="w-32 h-32 rounded-full border-4 border-cyan-400/20 p-1 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-3xl font-black text-cyan-400">AS</div>
              </div>
            </div>
            <h2 className="text-2xl font-black text-white mb-1 uppercase tracking-tight">Aiden Sterling</h2>
            <p className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] mb-8">Batch: 3D-EX-2024</p>
            <div className="grid grid-cols-2 gap-4 py-8 border-t border-white/5">
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Rank</p>
                <p className="text-xl font-bold text-white">#14 / 240</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">XP Points</p>
                <p className="text-xl font-bold text-white">12,450</p>
              </div>
            </div>
            <button className="w-full py-5 bg-cyan-400 text-slate-900 font-black rounded-2xl shadow-[0_0_20px_rgba(0,210,255,0.3)] hover:scale-[1.02] active:scale-95 transition-all uppercase text-[10px] tracking-[0.2em] cursor-pointer">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: any) {
  return (
    <div className="glass-panel p-6 rounded-2xl flex flex-col gap-4 group hover:border-cyan-400/40 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">{label}</p>
        <p className="text-2xl font-black text-white">{value}</p>
      </div>
    </div>
  );
}

function TableRow({ time, subject, faculty, status, active = false }: any) {
  return (
    <tr className="hover:bg-white/5 transition-colors group">
      <td className="px-8 py-6 text-sm font-bold text-white">{time}</td>
      <td className="px-8 py-6">
        <div className="flex items-center gap-3">
          <div className={cn("w-2 h-2 rounded-full", active ? "bg-cyan-400 shadow-[0_0_10px_rgba(0,210,255,0.8)] animate-pulse" : "bg-slate-600")} />
          <span className="text-sm font-bold text-white">{subject}</span>
        </div>
      </td>
      <td className="px-8 py-6 text-sm text-slate-400 font-medium">{faculty}</td>
      <td className="px-8 py-6">
        <span className={cn(
          "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest",
          active ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20" : "bg-white/5 text-slate-500 border border-white/5"
        )}>
          {status}
        </span>
      </td>
    </tr>
  );
}
