"use client";

import React, { useState } from "react";
import { 
  LayoutDashboard, BookOpen, GraduationCap, Calendar, 
  Star, PlayCircle, ChevronRight, CheckCircle, User, 
  LogOut, CreditCard, Clock, Bell, Settings, Search
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="bg-[#f8fafc] min-h-screen flex font-sans text-slate-900">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col h-screen w-80 bg-white border-r border-slate-200 py-10 px-6 sticky top-0">
        <div className="px-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center shadow-lg shadow-amber-600/20">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 leading-none">KA Student</h1>
              <p className="text-[10px] text-amber-600 font-bold uppercase tracking-widest mt-1">Upleta Campus</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 space-y-2">
          <SidebarNavItem 
            icon={<LayoutDashboard className="w-5 h-5" />} 
            label="My Dashboard" 
            active={activeTab === "dashboard"} 
            onClick={() => setActiveTab("dashboard")}
          />
          <SidebarNavItem 
            icon={<BookOpen className="w-5 h-5" />} 
            label="My Courses" 
            active={activeTab === "courses"}
            onClick={() => setActiveTab("courses")}
          />
          <SidebarNavItem 
            icon={<Calendar className="w-5 h-5" />} 
            label="Class Schedule" 
            active={activeTab === "schedule"}
            onClick={() => setActiveTab("schedule")}
          />
          <SidebarNavItem 
            icon={<CreditCard className="w-5 h-5" />} 
            label="Fees & Payments" 
            active={activeTab === "fees"}
            onClick={() => setActiveTab("fees")}
          />
          <SidebarNavItem 
            icon={<Star className="w-5 h-5" />} 
            label="Performance" 
            active={activeTab === "performance"}
            onClick={() => setActiveTab("performance")}
          />
        </nav>

        <div className="mt-auto">
          <div className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full border-2 border-amber-500 bg-slate-200 shadow-sm" />
              <div>
                <p className="font-bold text-sm text-slate-900">Arjun Sharma</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Class 12 - Science</p>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 text-slate-500 hover:text-error text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer py-2">
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-slate-50/50">
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 px-12 py-6 flex justify-between items-center sticky top-0 z-30">
          <div className="relative w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search lectures, notes..." 
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-slate-100 border-none focus:ring-2 focus:ring-amber-500/20 text-sm transition-all"
            />
          </div>
          <div className="flex items-center gap-6">
            <button className="relative w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-all cursor-pointer">
              <Bell className="w-5 h-5" />
              <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-error rounded-full border-2 border-white" />
            </button>
            <button className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-all cursor-pointer">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </header>

        <div className="p-12 space-y-12">
          {activeTab === "dashboard" && (
            <>
              {/* Welcome Section */}
              <section className="relative rounded-[3rem] p-12 overflow-hidden group bg-white shadow-2xl shadow-slate-200/50 border border-slate-100">
                <div className="absolute right-[-5%] top-[-20%] opacity-5 group-hover:opacity-10 transition-opacity duration-1000 rotate-12">
                  <GraduationCap className="w-[400px] h-[400px] text-amber-600" />
                </div>
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
                  <div className="max-w-2xl">
                    <span className="text-amber-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">Academic Progress</span>
                    <h2 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">Good Morning, Arjun! <br />Your momentum is <span className="text-amber-600">peak.</span></h2>
                    <p className="text-slate-500 text-lg leading-relaxed mb-8">You've completed 85% of this week's goals. Your next lecture, <span className="font-bold text-slate-900">Quantum Mechanics</span>, starts in 45 minutes.</p>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-slate-900/20 cursor-pointer">
                        <PlayCircle className="w-5 h-5" /> Resume Last Lesson
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <QuickStat value="92%" label="ATTENDANCE" sub="Excellent" />
                    <QuickStat value="A+" label="CURRENT GPA" sub="Top 5%" color="bg-green-500" />
                  </div>
                </div>
              </section>

              {/* Course Grid & Widgets */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 space-y-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Active Learning Path</h3>
                    <button className="text-amber-600 font-bold text-xs uppercase tracking-widest hover:underline cursor-pointer">Expand All</button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <CourseCard 
                      title="Advanced Physics: Quantum Mechanics" 
                      progress={78} 
                      nextUp="Wave-Particle Duality" 
                      category="SCIENCE" 
                      color="bg-blue-500"
                    />
                    <CourseCard 
                      title="Calculus III: Vector Analysis" 
                      progress={42} 
                      nextUp="Stoke's Theorem" 
                      category="MATHEMATICS" 
                      color="bg-amber-500"
                    />
                  </div>

                  <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/40">
                    <h3 className="text-xl font-bold mb-8">Attendance Overview</h3>
                    <div className="flex flex-wrap gap-12 items-center justify-center">
                      <AttendanceCircle percentage={95} label="LECTURES" />
                      <AttendanceCircle percentage={88} label="LABS" />
                      <AttendanceCircle percentage={100} label="SEMINARS" />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 space-y-10">
                  {/* Fee Widget */}
                  <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-slate-900/30 overflow-hidden relative group">
                    <div className="absolute right-[-10%] bottom-[-10%] opacity-10 group-hover:opacity-20 transition-opacity">
                      <CreditCard className="w-32 h-32" />
                    </div>
                    <div className="relative z-10">
                      <p className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-6">Fee Status</p>
                      <h4 className="text-3xl font-bold mb-2">₹12,400</h4>
                      <p className="text-slate-400 text-xs font-medium mb-8">DUE DATE: OCT 15, 2024</p>
                      <button className="w-full bg-white text-slate-900 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all cursor-pointer">
                        Pay Fees via Razorpay
                      </button>
                    </div>
                  </div>

                  {/* Schedule Widget */}
                  <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/40">
                    <div className="flex justify-between items-center mb-8">
                      <h4 className="text-lg font-bold">Daily Schedule</h4>
                      <Calendar className="text-amber-600 w-5 h-5" />
                    </div>
                    <div className="space-y-6">
                      <ScheduleItem time="09:00 AM" label="Physics Lab" sub="Room 302" />
                      <ScheduleItem time="11:30 AM" label="Math Lecture" sub="Main Hall" active />
                      <ScheduleItem time="02:00 PM" label="English" sub="Library" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "fees" && (
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white rounded-[3rem] p-12 border border-slate-100 shadow-xl shadow-slate-200/40">
                <h3 className="text-3xl font-bold mb-8">Fee Structure & History</h3>
                <div className="space-y-4">
                  <FeeItem title="Term 2 Tuition" amount="₹45,000" status="Paid" date="Sep 12, 2023" />
                  <FeeItem title="Lab & Equipment Fee" amount="₹8,500" status="Paid" date="Sep 12, 2023" />
                  <FeeItem title="Library Fee" amount="₹1,200" status="Paid" date="Sep 12, 2023" />
                  <FeeItem title="Term 3 Advanced" amount="₹12,400" status="Pending" date="Due Oct 15" isPending />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function SidebarNavItem({ icon, label, active = false, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 group cursor-pointer",
        active 
          ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20 font-bold" 
          : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
      )}
    >
      <span className={cn(
        "transition-transform group-hover:scale-110",
        active ? "text-amber-500" : "text-slate-400 group-hover:text-amber-600"
      )}>
        {icon}
      </span>
      <span className="text-sm tracking-wide">{label}</span>
    </button>
  );
}

function QuickStat({ value, label, sub, color = "bg-amber-600" }: any) {
  return (
    <div className="bg-white border border-slate-100 p-6 rounded-[2.5rem] shadow-lg shadow-slate-200/50 flex flex-col items-center justify-center text-center w-32 min-w-fit px-8">
      <span className={cn("w-2 h-2 rounded-full mb-3 animate-pulse", color)} />
      <span className="text-3xl font-black text-slate-900 tracking-tighter">{value}</span>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{label}</p>
      <p className="text-[8px] font-bold text-slate-500 mt-2">{sub}</p>
    </div>
  );
}

function CourseCard({ title, progress, nextUp, category, color }: any) {
  return (
    <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/40 group hover:-translate-y-1 transition-all duration-300">
      <div className="flex justify-between items-start mb-8">
        <span className={cn("px-4 py-1.5 rounded-full text-[9px] font-bold text-white uppercase tracking-widest shadow-lg", color)}>
          {category}
        </span>
        <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:text-amber-600 transition-colors">
          <BookOpen className="w-5 h-5" />
        </div>
      </div>
      <h4 className="text-xl font-bold text-slate-900 mb-6 leading-tight h-14 line-clamp-2">{title}</h4>
      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Progress</p>
          <p className="text-sm font-bold text-slate-900">{progress}%</p>
        </div>
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className={cn("h-full rounded-full transition-all duration-1000", color)} 
            style={{ width: `${progress}%` }} 
          />
        </div>
        <div className="pt-4 mt-4 border-t border-slate-50 flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-[8px] font-bold text-slate-400 uppercase">Next Up</p>
            <p className="text-xs font-bold text-slate-600">{nextUp}</p>
          </div>
          <button className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
            <PlayCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function AttendanceCircle({ percentage, label }: any) {
  const radius = 35;
  const circum = 2 * Math.PI * radius;
  const offset = circum - (percentage / 100) * circum;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="48" cy="48" r={radius} fill="transparent" stroke="#f1f5f9" strokeWidth="8" />
          <circle 
            cx="48" cy="48" r={radius} fill="transparent" 
            stroke={percentage > 90 ? "#059669" : "#d97706"} 
            strokeWidth="8" 
            strokeDasharray={circum} 
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-slate-900">{percentage}%</div>
      </div>
      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{label}</span>
    </div>
  );
}

function ScheduleItem({ time, label, sub, active = false }: any) {
  return (
    <div className="flex gap-4 items-start group">
      <div className="w-16 pt-1">
        <p className={cn("text-xs font-bold", active ? "text-amber-600" : "text-slate-400")}>{time}</p>
      </div>
      <div className={cn(
        "flex-1 p-5 rounded-2xl border transition-all duration-300",
        active ? "bg-amber-600 text-white border-amber-600 shadow-xl shadow-amber-600/30" : "bg-slate-50 border-slate-100 hover:bg-white hover:border-amber-200"
      )}>
        <p className="font-bold text-sm leading-none mb-1">{label}</p>
        <p className={cn("text-[10px] font-medium opacity-80", active ? "text-white" : "text-slate-500")}>{sub}</p>
      </div>
    </div>
  );
}

function FeeItem({ title, amount, status, date, isPending = false }: any) {
  return (
    <div className={cn(
      "p-6 rounded-3xl border flex items-center justify-between group hover:border-amber-500/20 transition-all cursor-pointer",
      isPending ? "bg-amber-50/30 border-amber-100" : "bg-slate-50 border-slate-100"
    )}>
      <div className="flex items-center gap-6">
        <div className={cn(
          "w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg",
          isPending ? "bg-amber-500 text-white shadow-amber-500/20" : "bg-white text-slate-400 shadow-slate-200/50"
        )}>
          <CreditCard className="w-6 h-6" />
        </div>
        <div>
          <h5 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{title}</h5>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{date}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold text-slate-900">{amount}</p>
        <span className={cn(
          "text-[9px] font-black uppercase tracking-widest",
          isPending ? "text-amber-600" : "text-green-600"
        )}>{status}</span>
      </div>
    </div>
  );
}
