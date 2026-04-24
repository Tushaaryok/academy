"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, Users, BookOpen, Settings, BarChart, 
  Plus, Search, MoreVertical, CreditCard, Calendar, 
  CheckCircle2, AlertCircle, TrendingUp, UserPlus
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="bg-[#0f172a] min-h-screen text-slate-200 flex font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-[#1e293b]/50 backdrop-blur-xl border-r border-slate-800 p-8 flex flex-col gap-10 sticky top-0 h-screen">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white leading-none">KA Admin</h1>
            <p className="text-[10px] text-amber-500 font-bold uppercase tracking-widest mt-1">Institutional Panel</p>
          </div>
        </div>
        
        <nav className="flex-1 space-y-2">
          <AdminNavItem 
            icon={<BarChart className="w-5 h-5" />} 
            label="Overview" 
            active={activeTab === "overview"} 
            onClick={() => setActiveTab("overview")}
          />
          <AdminNavItem 
            icon={<Users className="w-5 h-5" />} 
            label="Students" 
            active={activeTab === "students"}
            onClick={() => setActiveTab("students")}
          />
          <AdminNavItem 
            icon={<CreditCard className="w-5 h-5" />} 
            label="Fee Management" 
            active={activeTab === "fees"}
            onClick={() => setActiveTab("fees")}
          />
          <AdminNavItem 
            icon={<Calendar className="w-5 h-5" />} 
            label="Attendance" 
            active={activeTab === "attendance"}
            onClick={() => setActiveTab("attendance")}
          />
          <AdminNavItem 
            icon={<BookOpen className="w-5 h-5" />} 
            label="Courses" 
            active={activeTab === "courses"}
            onClick={() => setActiveTab("courses")}
          />
          <div className="pt-6 mt-6 border-t border-slate-800">
            <AdminNavItem 
              icon={<Settings className="w-5 h-5" />} 
              label="System Settings" 
              active={activeTab === "settings"}
              onClick={() => setActiveTab("settings")}
            />
          </div>
        </nav>

        <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
          <p className="text-xs font-bold text-amber-500 mb-2 uppercase tracking-tighter">System Health</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-medium text-slate-400">All systems operational</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="p-12 pb-0 flex justify-between items-end">
          <div>
            <p className="text-amber-500 font-bold text-xs uppercase tracking-[0.2em] mb-2">Management Terminal</p>
            <h2 className="text-5xl font-extrabold text-white tracking-tight">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 font-bold text-xs uppercase tracking-widest hover:bg-slate-700 transition-all flex items-center gap-2 cursor-pointer">
              <Search className="w-4 h-4" /> Search
            </button>
            <button className="px-6 py-3 rounded-xl bg-amber-500 text-white font-bold text-xs uppercase tracking-widest hover:bg-amber-600 shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 cursor-pointer">
              <Plus className="w-4 h-4" /> Add New
            </button>
          </div>
        </header>

        <div className="p-12 space-y-12">
          {activeTab === "overview" && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <AdminStatCard 
                  label="Total Students" 
                  value="1,248" 
                  trend="+12% this month" 
                  icon={<Users className="w-6 h-6 text-blue-400" />}
                />
                <AdminStatCard 
                  label="Active Batches" 
                  value="24" 
                  trend="Stable" 
                  icon={<BookOpen className="w-6 h-6 text-amber-400" />}
                />
                <AdminStatCard 
                  label="Monthly Revenue" 
                  value="₹8.4L" 
                  trend="+18.2%" 
                  icon={<TrendingUp className="w-6 h-6 text-green-400" />}
                />
                <AdminStatCard 
                  label="Attendance Avg" 
                  value="92%" 
                  trend="-2% today" 
                  icon={<CheckCircle2 className="w-6 h-6 text-purple-400" />}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <section className="bg-slate-800/40 border border-slate-700 rounded-3xl p-8 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-bold text-white">Recent Enrolments</h3>
                    <button className="text-amber-500 text-xs font-bold uppercase tracking-widest hover:underline cursor-pointer">View All</button>
                  </div>
                  <div className="space-y-4">
                    <RecentUserItem name="Rahul Varma" course="Advanced Physics" date="2 mins ago" />
                    <RecentUserItem name="Sneha Patel" course="Computer Science" date="15 mins ago" />
                    <RecentUserItem name="Karan Joshi" course="Mathematics III" date="1 hour ago" />
                  </div>
                </section>

                <section className="bg-slate-800/40 border border-slate-700 rounded-3xl p-8 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-bold text-white">Pending Fee Alerts</h3>
                    <AlertCircle className="text-orange-400 w-5 h-5" />
                  </div>
                  <div className="space-y-4">
                    <FeeAlertItem name="Amit Shah" amount="₹12,000" dueDate="Overdue 3 days" isUrgent />
                    <FeeAlertItem name="Priya Das" amount="₹8,500" dueDate="Due in 2 days" />
                  </div>
                </section>
              </div>
            </>
          )}

          {activeTab === "students" && (
            <div className="bg-slate-800/40 border border-slate-700 rounded-3xl overflow-hidden backdrop-blur-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-700 bg-slate-800/60">
                    <th className="p-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Student Name</th>
                    <th className="p-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Course/Batch</th>
                    <th className="p-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                    <th className="p-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Enrolled Date</th>
                    <th className="p-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <StudentRow name="Arjun Mehta" course="NEET Preparation" status="Active" date="Oct 12, 2023" />
                  <StudentRow name="Isha Sharma" course="JEE Advanced" status="On Leave" date="Nov 05, 2023" />
                  <StudentRow name="Vikram Rathore" course="Foundations 10th" status="Active" date="Sep 28, 2023" />
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function AdminNavItem({ icon, label, active = false, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group cursor-pointer",
        active 
          ? "bg-amber-500 text-white shadow-lg shadow-amber-500/20 font-bold" 
          : "text-slate-400 hover:bg-slate-800 hover:text-white"
      )}
    >
      <span className={cn(
        "transition-transform duration-300 group-hover:scale-110",
        active ? "text-white" : "text-slate-500 group-hover:text-amber-500"
      )}>
        {icon}
      </span>
      <span className="text-sm tracking-wide">{label}</span>
    </button>
  );
}

function AdminStatCard({ label, value, trend, icon }: any) {
  return (
    <div className="bg-slate-800/40 border border-slate-700 p-8 rounded-[2rem] backdrop-blur-sm group hover:border-amber-500/30 transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 rounded-2xl bg-slate-800 group-hover:bg-amber-500/10 transition-colors">
          {icon}
        </div>
        <div className="flex flex-col items-end">
          <span className="text-2xl font-bold text-white">{value}</span>
          <span className={cn(
            "text-[10px] font-bold mt-1",
            trend.includes('+') ? "text-green-400" : "text-slate-400"
          )}>{trend}</span>
        </div>
      </div>
      <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.15em]">{label}</p>
    </div>
  );
}

function RecentUserItem({ name, course, date }: any) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/50 hover:bg-slate-800/80 transition-all border border-transparent hover:border-slate-700 group cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-xs text-white">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-bold text-white group-hover:text-amber-500 transition-colors">{name}</p>
          <p className="text-[10px] text-slate-500 font-medium">{course}</p>
        </div>
      </div>
      <span className="text-[10px] font-bold text-slate-600 uppercase">{date}</span>
    </div>
  );
}

function FeeAlertItem({ name, amount, dueDate, isUrgent = false }: any) {
  return (
    <div className={cn(
      "flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer",
      isUrgent ? "bg-orange-500/5 border-orange-500/20 hover:bg-orange-500/10" : "bg-slate-900/50 border-transparent hover:border-slate-700"
    )}>
      <div className="flex items-center gap-4">
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs",
          isUrgent ? "bg-orange-500 text-white" : "bg-slate-700 text-white"
        )}>
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-bold text-white">{name}</p>
          <p className="text-[10px] text-slate-500">{amount}</p>
        </div>
      </div>
      <div className="text-right">
        <span className={cn(
          "text-[10px] font-bold uppercase tracking-wider",
          isUrgent ? "text-orange-500" : "text-slate-400"
        )}>{dueDate}</span>
      </div>
    </div>
  );
}

function StudentRow({ name, course, status, date }: any) {
  return (
    <tr className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
      <td className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold">
            {name.split(' ').map((n: string) => n[0]).join('')}
          </div>
          <span className="text-sm font-bold text-white group-hover:text-amber-500 transition-colors">{name}</span>
        </div>
      </td>
      <td className="p-6">
        <span className="text-xs font-medium text-slate-300">{course}</span>
      </td>
      <td className="p-6">
        <span className={cn(
          "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
          status === "Active" ? "bg-green-500/10 text-green-500" : "bg-slate-700 text-slate-400"
        )}>
          {status}
        </span>
      </td>
      <td className="p-6">
        <span className="text-xs text-slate-500">{date}</span>
      </td>
      <td className="p-6 text-right">
        <button className="text-slate-500 hover:text-white transition-colors cursor-pointer">
          <MoreVertical className="w-5 h-5" />
        </button>
      </td>
    </tr>
  );
}
