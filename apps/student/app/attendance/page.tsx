"use client";

import React, { useState } from "react";
import { 
  Calendar as CalendarIcon, Filter, 
  ChevronLeft, ChevronRight, CheckCircle2, 
  XCircle, Clock, AlertTriangle 
} from "lucide-react";
import { cn } from "@/packages/lib/utils";

export default function AttendancePage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="bg-slate-50 min-h-screen p-12">
      <header className="mb-12">
        <span className="text-amber-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-2 block">Academic Records</span>
        <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Attendance Analytics</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Stats & Subject-wise */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl shadow-slate-200/50">
            <h3 className="text-lg font-bold mb-6">Subject-wise Analytics</h3>
            <div className="space-y-6">
              <SubjectProgress label="Physics" percentage={92} color="bg-blue-500" />
              <SubjectProgress label="Mathematics" percentage={85} color="bg-amber-500" />
              <SubjectProgress label="Chemistry" percentage={78} color="bg-purple-500" />
              <SubjectProgress label="Biology" percentage={95} color="bg-green-500" />
            </div>
          </div>

          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-slate-900/30">
            <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-4">Quick Insight</p>
            <h4 className="text-2xl font-bold mb-2">Maintain 90%+</h4>
            <p className="text-slate-400 text-xs">You need to attend the next 4 lectures to maintain your distinction status.</p>
          </div>
        </div>

        {/* Right: Calendar View */}
        <div className="lg:col-span-8 bg-white rounded-[3rem] p-12 border border-slate-200 shadow-2xl shadow-slate-200/50">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-2xl font-bold tracking-tight flex items-center gap-3">
              <CalendarIcon className="text-amber-600 w-6 h-6" /> 
              Monthly Calendar
            </h3>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-all cursor-pointer">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-all cursor-pointer">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dummy Calendar Grid */}
          <div className="grid grid-cols-7 gap-4 text-center">
            {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(day => (
              <div key={day} className="text-[10px] font-black text-slate-400 tracking-widest mb-4">{day}</div>
            ))}
            {Array.from({ length: 31 }).map((_, i) => (
              <CalendarDay 
                key={i} 
                day={i + 1} 
                status={i % 7 === 0 ? "absent" : (i % 12 === 0 ? "leave" : "present")} 
              />
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100 flex gap-8">
            <LegendItem icon={<CheckCircle2 className="text-green-500" />} label="Present" />
            <LegendItem icon={<XCircle className="text-red-500" />} label="Absent" />
            <LegendItem icon={<Clock className="text-amber-500" />} label="On Leave" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SubjectProgress({ label, percentage, color }: any) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-end">
        <span className="text-xs font-bold text-slate-700">{label}</span>
        <span className="text-[10px] font-black text-slate-900">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
        <div className={cn("h-full rounded-full transition-all duration-1000", color)} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

function CalendarDay({ day, status }: any) {
  const getStyles = () => {
    switch(status) {
      case 'present': return 'bg-green-50 text-green-700 border-green-100 hover:bg-green-100';
      case 'absent': return 'bg-red-50 text-red-700 border-red-100 hover:bg-red-100';
      case 'leave': return 'bg-amber-50 text-amber-700 border-amber-100 hover:bg-amber-100';
      default: return 'bg-slate-50 text-slate-400 border-slate-100';
    }
  };

  return (
    <div className={cn(
      "aspect-square flex items-center justify-center rounded-2xl border font-bold text-sm transition-all cursor-pointer",
      getStyles()
    )}>
      {day}
    </div>
  );
}

function LegendItem({ icon, label }: any) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</span>
    </div>
  );
}
