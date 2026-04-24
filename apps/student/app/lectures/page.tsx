"use client";

import React, { useState } from "react";
import { 
  PlayCircle, Clock, FileText, ChevronRight, 
  Search, Filter, Lock, CheckCircle 
} from "lucide-react";
import { cn } from "@/packages/lib/utils";

export default function LecturesPage() {
  const [selectedLecture, setSelectedLecture] = useState(null);

  return (
    <div className="bg-slate-50 min-h-screen p-12">
      <header className="mb-12 flex justify-between items-end">
        <div>
          <span className="text-amber-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-2 block">Learning Material</span>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Lectures & Courses</h1>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search topics..." 
              className="pl-12 pr-6 py-4 rounded-2xl bg-white border border-slate-200 text-sm focus:ring-2 focus:ring-amber-500/20 transition-all outline-none"
            />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Video Player & Content */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-slate-900 aspect-video rounded-[3rem] overflow-hidden shadow-2xl relative group flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent pointer-events-none" />
            <PlayCircle className="w-24 h-24 text-white/20 group-hover:text-amber-500/80 transition-all duration-500 group-hover:scale-110 cursor-pointer" />
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-2xl font-bold">Introduction to Quantum Mechanics</h3>
              <p className="text-slate-400 text-sm font-medium">Chapter 4 • Lecture 1 • 45:12</p>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-xl shadow-slate-200/50">
            <h3 className="text-xl font-bold mb-6">Lecture Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResourceCard icon={<FileText className="text-blue-500" />} title="Lecture Notes (PDF)" sub="1.2 MB" />
              <ResourceCard icon={<FileText className="text-orange-500" />} title="Practice Sheet" sub="800 KB" />
            </div>
          </div>
        </div>

        {/* Right: Timetable & Playlist */}
        <div className="lg:col-span-4 space-y-8">
          <section className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl shadow-slate-200/50">
            <h4 className="text-lg font-bold mb-6 flex justify-between items-center">
              Today's Schedule
              <span className="text-[10px] font-black text-amber-600">LIVE NOW</span>
            </h4>
            <div className="space-y-4">
              <ScheduleItem time="09:00 AM" label="Physics" active />
              <ScheduleItem time="11:30 AM" label="Chemistry" completed />
              <ScheduleItem time="02:00 PM" label="Mathematics" />
            </div>
          </section>

          <section className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl shadow-slate-200/50">
            <h4 className="text-lg font-bold mb-6">Course Playlist</h4>
            <div className="space-y-2">
              <PlaylistItem title="Wave-Particle Duality" duration="15:00" completed />
              <PlaylistItem title="Schrodinger's Equation" duration="28:45" active />
              <PlaylistItem title="Heisenberg Uncertainty" duration="22:10" />
              <PlaylistItem title="Atomic Structure" duration="45:00" locked />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function ResourceCard({ icon, title, sub }: any) {
  return (
    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4 hover:border-amber-500/20 transition-all cursor-pointer group">
      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold text-slate-900">{title}</p>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{sub}</p>
      </div>
    </div>
  );
}

function ScheduleItem({ time, label, active = false, completed = false }: any) {
  return (
    <div className={cn(
      "p-4 rounded-2xl border flex items-center justify-between transition-all",
      active ? "bg-amber-600 text-white border-amber-600 shadow-lg shadow-amber-600/30" : (completed ? "bg-slate-50 border-transparent opacity-60" : "bg-slate-50 border-slate-100")
    )}>
      <div className="flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-widest opacity-80">{time}</span>
        <span className="font-bold text-sm">{label}</span>
      </div>
      {completed ? <CheckCircle className="w-5 h-5 text-green-500" /> : <ChevronRight className="w-4 h-4 opacity-50" />}
    </div>
  );
}

function PlaylistItem({ title, duration, active = false, completed = false, locked = false }: any) {
  return (
    <div className={cn(
      "p-4 rounded-xl flex items-center justify-between transition-all cursor-pointer group",
      active ? "bg-amber-50 border-l-4 border-amber-500" : "hover:bg-slate-50"
    )}>
      <div className="flex items-center gap-4">
        {locked ? <Lock className="w-4 h-4 text-slate-300" /> : <PlayCircle className={cn("w-4 h-4", active ? "text-amber-500" : "text-slate-400")} />}
        <span className={cn("text-sm font-medium", active ? "text-amber-700 font-bold" : (locked ? "text-slate-300" : "text-slate-700"))}>{title}</span>
      </div>
      <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{duration}</span>
    </div>
  );
}
