import React from "react";
import { LayoutDashboard, BookOpen, GraduationCap, Calendar, Star, PlayCircle, ChevronRight, CheckCircle, User, LogOut } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="bg-background min-h-screen flex">
      {/* Sidebar Navigation */}
      <aside className="hidden md:flex flex-col h-screen w-64 border-r border-slate-200 bg-slate-50 py-6">
        <div className="px-6 mb-10">
          <h1 className="text-xl font-bold text-amber-600">Krishna Academy</h1>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 font-bold">Student Portal</p>
        </div>
        
        <nav className="flex-1 space-y-2 px-3">
          <SidebarItem icon={<LayoutDashboard className="w-5 h-5" />} label="Dashboard" active />
          <SidebarItem icon={<BookOpen className="w-5 h-5" />} label="My Courses" />
          <SidebarItem icon={<Calendar className="w-5 h-5" />} label="Schedule" />
          <SidebarItem icon={<Star className="w-5 h-5" />} label="Grades" />
        </nav>

        <div className="mt-auto px-6 pt-6 border-t border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-primary-container bg-slate-200" />
            <div>
              <p className="font-semibold text-sm">Arjun Sharma</p>
              <p className="text-[10px] text-slate-500">Class 12 - Science</p>
            </div>
          </div>
          <button className="mt-4 flex items-center gap-2 text-slate-500 hover:text-error text-xs font-bold uppercase transition-colors cursor-pointer">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto px-8 py-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Welcome Banner */}
          <section className="relative neo-out rounded-2xl p-8 overflow-hidden group bg-surface">
            <div className="absolute right-12 -top-4 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
              <GraduationCap className="w-48 h-48 text-primary" />
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-2">Welcome back, Arjun! Ready to learn?</h2>
                <p className="text-on-surface-variant max-w-2xl">You have 3 assignments due this week and your next lecture starts in 45 minutes.</p>
              </div>
              <button className="gold-gradient text-white px-8 py-4 rounded-xl neo-out hover:scale-95 transition-transform flex items-center gap-2 font-bold text-xs uppercase tracking-widest cursor-pointer">
                <span>Resume Last Lesson</span>
                <PlayCircle className="w-5 h-5" />
              </button>
            </div>
          </section>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Enrolled Courses */}
            <div className="lg:col-span-8 space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-on-surface">Enrolled Courses</h3>
                <Link href="/courses" className="text-primary text-xs font-bold uppercase hover:underline">View All</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DashboardCourseCard 
                  title="Advanced Physics: Quantum Mechanics"
                  lessonsLeft="12"
                  category="SCIENCE"
                />
                <DashboardCourseCard 
                  title="Calculus III: Vector Analysis"
                  lessonsLeft="8"
                  category="MATHS"
                  isSecondary
                />
              </div>

              {/* Progress Tracker */}
              <div className="glass-card rounded-2xl p-8 neo-out">
                <h3 className="text-xl font-bold text-on-surface mb-8">Overall Learning Progress</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <ProgressCircle percentage={75} label="PHYSICS" />
                  <ProgressCircle percentage={40} label="MATHS" />
                  <ProgressCircle percentage={90} label="CHEMISTRY" />
                  <ProgressCircle percentage={20} label="BIOLOGY" />
                </div>
              </div>
            </div>

            {/* Sidebar widgets */}
            <div className="lg:col-span-4 space-y-8">
              {/* Daily Schedule */}
              <div className="glass-card rounded-2xl p-6 neo-out space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-on-surface">Daily Schedule</h3>
                  <Calendar className="text-primary w-5 h-5" />
                </div>
                <div className="space-y-4">
                  <ScheduleItem time="09:00 AM" label="Physics Lab" location="Hall B-04" />
                  <ScheduleItem time="11:30 AM" label="Applied Mathematics" location="Main Auditorium" />
                  <ScheduleItem time="02:00 PM" label="Organic Chemistry" location="Online Session" highlighted />
                </div>
              </div>

              {/* Assignments */}
              <div className="glass-card rounded-2xl p-6 neo-out space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-on-surface">Assignments</h3>
                  <Star className="text-primary w-5 h-5" />
                </div>
                <div className="space-y-3">
                  <AssignmentItem title="Quantum Mechanics Quiz" dueDate="DUE IN 2 HOURS" isUrgent />
                  <AssignmentItem title="Vector Calculus Sheet 4" dueDate="DUE TOMORROW" />
                  <AssignmentItem title="Lab Report #3" completed />
                </div>
                <button className="w-full text-center text-[10px] font-bold text-primary py-2 border-t border-primary/10 mt-2 uppercase tracking-widest cursor-pointer">
                  Go to Student Portal
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon, label, active = false }: any) {
  return (
    <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer ${
      active 
        ? "bg-amber-50 text-amber-700 font-bold border-r-4 border-amber-500" 
        : "text-slate-500 hover:bg-slate-100 hover:pl-6"
    }`}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

function DashboardCourseCard({ title, lessonsLeft, category, isSecondary = false }: any) {
  return (
    <div className="neo-out rounded-2xl overflow-hidden group cursor-pointer border border-white/40 bg-surface">
      <div className="h-40 bg-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter ${
            isSecondary ? "bg-secondary-container text-on-secondary-container" : "bg-primary-container text-on-primary-container"
          }`}>
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h4 className="font-bold text-on-surface mb-2 line-clamp-1">{title}</h4>
        <p className="text-sm text-slate-500 mb-6 line-clamp-2">Deep dive into fundamental theories and concepts.</p>
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
            <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300" />
          </div>
          <span className="text-xs font-bold text-primary tracking-widest uppercase">{lessonsLeft} Lessons Left</span>
        </div>
      </div>
    </div>
  );
}

function ProgressCircle({ percentage, label }: any) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full transform -rotate-90">
          <circle className="text-slate-100" cx="48" cy="48" fill="transparent" r={radius} stroke="currentColor" strokeWidth="8" />
          <circle 
            className="text-primary transition-all duration-1000 ease-out" 
            cx="48" cy="48" fill="transparent" r={radius} stroke="currentColor" strokeWidth="8" 
            strokeDasharray={circumference} 
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-primary">{percentage}%</div>
      </div>
      <span className="text-[10px] font-bold text-slate-500 tracking-widest">{label}</span>
    </div>
  );
}

function ScheduleItem({ time, label, location, highlighted = false }: any) {
  return (
    <div className="flex gap-4 items-start group">
      <div className="w-16 text-center shrink-0">
        <p className="text-xs font-bold text-primary">{time.split(' ')[0]}</p>
        <p className="text-[10px] text-slate-400 font-bold uppercase">{time.split(' ')[1]}</p>
      </div>
      <div className={`flex-1 p-3 neo-in rounded-xl transition-all duration-300 ${highlighted ? "border-l-4 border-amber-500 bg-amber-50/50" : "group-hover:bg-amber-50/20"}`}>
        <p className="text-sm font-bold text-on-surface">{label}</p>
        <p className="text-xs text-slate-500">{location}</p>
      </div>
    </div>
  );
}

function AssignmentItem({ title, dueDate, completed = false, isUrgent = false }: any) {
  return (
    <div className={`p-4 rounded-xl border border-white/40 flex justify-between items-center transition-all ${completed ? "opacity-60 bg-green-50/20" : "bg-white/20"}`}>
      <div>
        <p className={`text-sm font-bold text-on-surface ${completed ? "line-through" : ""}`}>{title}</p>
        <p className={`text-[10px] font-bold mt-1 uppercase tracking-widest ${isUrgent ? "text-error" : "text-slate-500"}`}>
          {completed ? "SUBMITTED" : dueDate}
        </p>
      </div>
      {completed ? (
        <CheckCircle className="text-green-600 w-5 h-5 fill-current" />
      ) : (
        <ChevronRight className="text-slate-400 w-5 h-5" />
      )}
    </div>
  );
}
