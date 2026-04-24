import React from "react";
import { 
  Rocket, User, 
  ArrowRight, Globe, Mail, Share 
} from "lucide-react";
import Link from "next/link";

export default function EliteLanding() {
  return (
    <div className="bg-[#10141a] text-[#dfe2eb] font-sans selection:bg-cyan-500/30 selection:text-white bg-mesh min-h-screen">
      {/* Mesh Background injected via CSS in layout or globals.css */}
      <style jsx global>{`
        .bg-mesh {
          background-color: #0D1117;
          background-image: 
              radial-gradient(at 0% 0%, rgba(0, 210, 255, 0.1) 0px, transparent 50%),
              radial-gradient(at 100% 100%, rgba(110, 32, 140, 0.1) 0px, transparent 50%);
        }
        .glass-panel {
            backdrop-filter: blur(24px);
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(0); }
        }
      `}</style>

      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur-xl shadow-[0_0_20px_rgba(0,210,255,0.1)]">
        <nav className="flex justify-between items-center px-8 h-20 max-w-[1440px] mx-auto tracking-tight font-display">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            KRISHNA ACADEMY
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link className="text-slate-400 hover:text-white transition-colors" href="/courses">Courses</Link>
            <Link className="text-slate-400 hover:text-white transition-colors" href="/faculty">Faculty</Link>
            <Link className="text-slate-400 hover:text-white transition-colors" href="/results">Results</Link>
            <Link className="text-slate-400 hover:text-white transition-colors" href="/admissions">Admissions</Link>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/portal/auth" className="px-6 py-2 rounded-full border border-cyan-400/30 text-cyan-400 font-bold hover:bg-cyan-400/10 transition-all active:scale-95 text-xs uppercase tracking-widest">
              Student Portal
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full opacity-40 grayscale bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlD5ZheL9BZuzm61SWqNs0fb5nNiFk8_G9hyScRlzW--CXecYnE82IFCUb8U14B0G-5r476tBK-KW0jjAYrAD37Hre1ziP-0su40E-ydmas1ynhbDBedYcNTLy05YFpBVYLdXxXIAS3eNKKDjX85xFdWngNU1DmeY-KpgTGsO8sgw3D5tlVK56TA6KWc2zw4ym0rr9XOYwb_oa1xhwlc7IVmwDq6qP4fYpnitQ7OWv9MFhrhU0L6iVEKxt__rQ59yO3w9fZW5vQ7Fu')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-[#10141a]/80 to-[#10141a]" />
          </div>
          
          <div className="relative z-10 max-w-[1440px] mx-auto px-8 w-full">
            <div className="max-w-4xl">
              <h1 className="text-7xl md:text-[80px] font-black mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent leading-[0.9] tracking-tighter uppercase">
                Unlock Your <br /> Potential
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 font-medium">
                The elite command center for future-ready creators. Master the physics of light, the mathematics of space, and the logic of tomorrow's industries.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="px-10 py-5 bg-cyan-400 text-slate-950 font-black rounded-xl hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-all flex items-center gap-3 uppercase text-xs tracking-widest">
                  Start Journey
                  <Rocket className="w-5 h-5" />
                </button>
                <button className="px-10 py-5 glass-panel text-white font-black rounded-xl hover:bg-white/5 transition-all uppercase text-xs tracking-widest">
                  View Syllabus
                </button>
              </div>
            </div>
          </div>

          {/* Floating Element */}
          <div className="absolute bottom-20 right-20 hidden lg:block">
            <div className="glass-panel p-8 rounded-2xl w-72 animate-bounce-slow">
              <div className="text-cyan-400 mb-2 font-bold text-[10px] uppercase tracking-[0.3em]">LIVE SESSIONS</div>
              <div className="text-white text-2xl font-black mb-4">Quantum Theory</div>
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700" />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-cyan-500 flex items-center justify-center text-[10px] font-bold text-slate-900">+12</div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid */}
        <section className="max-w-[1440px] mx-auto px-8 py-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-cyan-400 font-bold text-[10px] uppercase tracking-[0.4em] mb-2 block">Academic Core</span>
              <h2 className="text-5xl font-black tracking-tighter uppercase">Specialized Disciplines</h2>
            </div>
            <Link href="/courses" className="text-slate-500 font-bold text-xs uppercase tracking-widest flex items-center gap-2 group hover:text-white transition-colors">
              Explore all 24 courses <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 glass-panel p-12 rounded-[3rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[120px] group-hover:bg-cyan-500/20 transition-all" />
              <div className="text-5xl text-cyan-400 mb-8 font-black uppercase">01</div>
              <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">Quantum Physics</h3>
              <p className="text-slate-400 mb-10 max-w-md font-medium">Deep dive into particle wave duality, entanglement, and the foundational mathematics of the universe.</p>
              <div className="flex items-center gap-4">
                <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest">Advanced</span>
                <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest">12 Modules</span>
              </div>
            </div>

            <div className="glass-panel p-12 rounded-[3rem] group">
              <div className="text-5xl text-purple-400 mb-8 font-black uppercase">02</div>
              <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">Mathematics</h3>
              <p className="text-slate-400 mb-10 font-medium">From topology to multi-variable calculus for engineering.</p>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-gradient-to-r from-purple-500 to-cyan-400" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-white/5 bg-slate-950/50 py-16 px-8 flex flex-col items-center gap-8">
        <div className="text-2xl font-black text-white tracking-[0.3em] uppercase">KRISHNA ACADEMY</div>
        <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-slate-500">
          <Link className="hover:text-cyan-300 transition-colors" href="#">Privacy</Link>
          <Link className="hover:text-cyan-300 transition-colors" href="#">Terms</Link>
          <Link className="hover:text-cyan-300 transition-colors" href="#">Contact</Link>
        </div>
        <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">© 2024 KRISHNA ACADEMY. ENGINEERED FOR EXCELLENCE.</p>
      </footer>
    </div>
  );
}
