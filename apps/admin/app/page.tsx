"use client";

import React from "react";
import { 
  TrendingUp, Users, Wallet, Calendar, 
  Search, Notifications, Edit, Trash2,
  UserPlus, RefreshCw 
} from "lucide-react";
import { cn } from "@/packages/lib/utils";

export default function AdminDashboard() {
  return (
    <div className="bg-[#10141a] min-h-screen text-[#dfe2eb] p-10 font-sans selection:bg-cyan-500/30 selection:text-white bg-mesh">
      <style jsx global>{`
        .bg-mesh {
          background-color: #10141a;
          background-image: 
              radial-gradient(at 0% 0%, rgba(0, 210, 255, 0.05) 0px, transparent 50%),
              radial-gradient(at 100% 100%, rgba(110, 32, 140, 0.08) 0px, transparent 50%);
        }
        .glass-panel {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(24px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .neon-glow-primary {
            box-shadow: 0 0 20px rgba(0, 210, 255, 0.2);
        }
      `}</style>

      {/* Top Bar */}
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">Command Dashboard</h1>
          <p className="text-slate-400 font-medium mt-2">Overseeing institutional performance and student lifecycle metrics.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-4">
            <Search className="text-cyan-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Global search..." 
              className="bg-transparent border-none focus:ring-0 text-sm text-white w-64 placeholder:text-slate-700 outline-none"
            />
          </div>
          <button className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer">
            <Notifications className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Analytics */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="glass-panel p-10 rounded-[2.5rem] lg:col-span-2 relative overflow-hidden group">
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(0,210,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,210,255,1)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="flex justify-between items-center mb-12 relative z-10">
            <h3 className="text-xl font-black text-white flex items-center gap-3 uppercase tracking-tight">
              <TrendingUp className="text-cyan-400 w-6 h-6" />
              Enrollment Trends
            </h3>
            <span className="px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase tracking-widest border border-cyan-400/20">Live</span>
          </div>
          
          <div className="h-40 flex items-end justify-between px-2 mb-10 relative z-10">
            {/* Visual simulation of a chart */}
            {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-4 flex-1">
                <div className="w-1.5 bg-gradient-to-t from-cyan-500 to-cyan-300 rounded-full group-hover:shadow-[0_0_15px_rgba(0,210,255,0.5)] transition-all duration-500" style={{ height: `${h}%` }} />
                <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{["M", "T", "W", "T", "F", "S", "S"][i]}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-16 relative z-10 border-t border-white/5 pt-8">
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">New Students</p>
              <p className="text-4xl font-black text-white tracking-tighter">2,482</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Growth Rate</p>
              <p className="text-4xl font-black text-cyan-400 tracking-tighter">+12.4%</p>
            </div>
          </div>
        </div>

        <div className="glass-panel p-10 rounded-[2.5rem] flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-black text-white mb-8 uppercase tracking-tight">Fee Status</h3>
            <div className="space-y-10">
              <ProgressItem label="Collected" percentage={84} color="bg-cyan-400" glow="shadow-[0_0_15px_rgba(0,210,255,0.4)]" />
              <ProgressItem label="Pending" percentage={16} color="bg-purple-500" glow="shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Total Monthly Revenue</p>
            <p className="text-5xl font-black text-white tracking-tighter">$428.5K</p>
          </div>
        </div>
      </section>

      {/* Student Table */}
      <section className="glass-panel rounded-[3rem] overflow-hidden">
        <div className="p-10 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 bg-white/5">
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">Student Management</h2>
          <div className="flex gap-4">
            <button className="px-6 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors cursor-pointer">Export CSV</button>
            <button className="px-8 py-3 bg-cyan-400 text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-xl hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-[0_0_20px_rgba(0,210,255,0.3)]">Filter View</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-600 text-[10px] font-black uppercase tracking-widest border-b border-white/5">
                <th className="px-10 py-6">Student Name</th>
                <th className="px-10 py-6">Grade / Level</th>
                <th className="px-10 py-6">Attendance</th>
                <th className="px-10 py-6">Status</th>
                <th className="px-10 py-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <AdminTableRow name="Aryan Sharma" id="KA-92831" grade="Advanced 3D Sculpting" attendance={95} status="Active" color="text-emerald-400" />
              <AdminTableRow name="Ishani Verma" id="KA-92845" grade="VFX & Compositing" attendance={72} status="On Leave" color="text-amber-400" />
              <AdminTableRow name="Kabir Malhotra" id="KA-92901" grade="Game Engine Logic" attendance={88} status="Active" color="text-emerald-400" />
            </tbody>
          </table>
        </div>
      </section>

      {/* Quick Actions */}
      <div className="fixed bottom-10 right-10 flex flex-col gap-6 z-50">
        <QuickAction color="bg-cyan-500" icon={<UserPlus className="w-6 h-6" />} label="Add Student" />
        <QuickAction color="bg-purple-500" icon={<RefreshCw className="w-6 h-6" />} label="Update Schedule" />
      </div>
    </div>
  );
}

function ProgressItem({ label, percentage, color, glow }: any) {
  return (
    <div>
      <div className="flex justify-between text-[10px] font-black mb-3">
        <span className="text-slate-500 uppercase tracking-widest">{label}</span>
        <span className={cn("tracking-widest", percentage > 80 ? "text-cyan-400" : "text-purple-400")}>{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
        <div className={cn("h-full transition-all duration-1000", color, glow)} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

function AdminTableRow({ name, id, grade, attendance, status, color }: any) {
  return (
    <tr className="hover:bg-white/5 transition-colors group">
      <td className="px-10 py-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-cyan-400 border border-white/5">
            {name.charAt(0)}
          </div>
          <div>
            <p className="text-white font-bold text-sm">{name}</p>
            <p className="text-[10px] text-slate-600 font-black tracking-widest uppercase">ID: #{id}</p>
          </div>
        </div>
      </td>
      <td className="px-10 py-6">
        <span className="px-4 py-1.5 rounded-lg bg-white/5 text-slate-400 text-[10px] font-black uppercase tracking-widest border border-white/5">{grade}</span>
      </td>
      <td className="px-10 py-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className={cn("h-full", attendance > 90 ? "bg-cyan-400" : "bg-purple-400")} style={{ width: `${attendance}%` }} />
          </div>
          <span className="text-xs font-black text-white">{attendance}%</span>
        </div>
      </td>
      <td className="px-10 py-6">
        <div className="flex items-center gap-2">
          <div className={cn("w-2 h-2 rounded-full", color.replace('text', 'bg'))} />
          <span className={cn("text-[10px] font-black uppercase tracking-widest", color)}>{status}</span>
        </div>
      </td>
      <td className="px-10 py-6 text-right">
        <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          <button className="w-10 h-10 glass-panel rounded-xl flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all cursor-pointer">
            <Edit className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 glass-panel rounded-xl flex items-center justify-center text-slate-400 hover:text-red-400 transition-all cursor-pointer">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}

function QuickAction({ color, icon, label }: any) {
  return (
    <button className="group flex items-center gap-4 p-2 pr-8 rounded-full bg-slate-900/80 backdrop-blur-3xl border border-white/10 hover:border-cyan-400/50 transition-all shadow-2xl hover:scale-105 active:scale-95 cursor-pointer">
      <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-slate-900 shadow-xl", color)}>
        {React.cloneElement(icon, { strokeWidth: 3 })}
      </div>
      <span className="text-[10px] font-black text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
        {label}
      </span>
    </button>
  );
}
