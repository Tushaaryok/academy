import React from "react";
import Navbar from "@/components/Navbar";
import { 
  ArrowRight, BookOpen, GraduationCap, Star, 
  ChevronLeft, ChevronRight, Microscope, Code, 
  Palette, Quote, ShieldCheck, Zap, Globe, 
  Award, Target, Rocket
} from "lucide-react";
import Link from "next/link";

export default function MarketingLanding() {
  return (
    <main className="relative bg-[#020617] text-white overflow-x-hidden min-h-screen selection:bg-amber-500 selection:text-white">
      <Navbar />
      
      {/* Hero Section - High Conversion */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[150px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container-max mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10 max-w-7xl">
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500">
              <Zap className="w-4 h-4 fill-current" />
              <span className="font-bold text-[10px] tracking-[0.2em] uppercase">Now Open for 2024-25 Admissions</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              EXCELLENCE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600">REDEFINED.</span>
            </h1>
            
            <p className="text-slate-400 text-xl max-w-xl leading-relaxed font-medium">
              Upleta's premier institution combining traditional wisdom with cutting-edge technology. Join a community of over 2,000 successful alumni.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <Link href="/courses" className="bg-amber-500 text-white px-10 py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-amber-500/20 flex items-center gap-3 group">
                Explore Courses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <button className="bg-white/5 border border-white/10 backdrop-blur-md px-10 py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3 cursor-pointer">
                Take a Digital Tour
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-white/10">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-[#020617] bg-slate-800" />
                ))}
              </div>
              <div>
                <p className="font-bold text-lg text-white">4.9/5 Rating</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Trusted by 2k+ Students</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-blue-500/20 blur-[100px] opacity-50 group-hover:opacity-80 transition-opacity" />
            <div className="relative z-10 p-4">
              <div className="relative rounded-[4rem] border border-white/10 bg-slate-900/50 backdrop-blur-xl overflow-hidden aspect-[4/5] md:aspect-square flex items-center justify-center p-12">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-br from-amber-400 to-orange-600 mx-auto flex items-center justify-center shadow-2xl shadow-amber-500/40 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                    <GraduationCap className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-4xl font-black tracking-tighter">Academic Sanctuary</h3>
                  <p className="text-slate-400 font-medium">Where every student's potential <br /> meets its purpose.</p>
                </div>
                
                {/* Floating Micro-cards */}
                <div className="absolute top-12 right-12 bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/10 animate-bounce cursor-default">
                  <Award className="text-amber-500 w-8 h-8" />
                </div>
                <div className="absolute bottom-12 left-12 bg-white/10 backdrop-blur-md p-6 rounded-[2rem] border border-white/10 flex items-center gap-4 group-hover:scale-110 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <ShieldCheck className="text-green-500 w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Verified Success</p>
                    <p className="text-[10px] text-slate-500 uppercase font-bold">ISO Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 relative bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <PhilosophyCard 
              icon={<Target className="w-10 h-10" />}
              title="Goal Oriented"
              desc="Our curriculum is meticulously designed to meet competitive standards like JEE, NEET, and Board Exams."
            />
            <PhilosophyCard 
              icon={<Rocket className="w-10 h-10" />}
              title="Modern Tech"
              desc="Leveraging smart classes and a dedicated student portal for a seamless 24/7 learning experience."
              active
            />
            <PhilosophyCard 
              icon={<Globe className="w-10 h-10" />}
              title="Global Vision"
              desc="Preparing students not just for exams, but for leadership roles in a globalized professional world."
            />
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-32 bg-[#020617] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-amber-500 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Our Curriculum</span>
              <h2 className="text-5xl font-black tracking-tighter">PATHWAYS TO SUCCESS</h2>
            </div>
            <Link href="/courses" className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 group hover:text-amber-500 transition-colors">
              View All Courses <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <CourseHighlightCard 
              title="JEE/NEET Advanced"
              desc="Comprehensive coaching for India's toughest entrance exams with expert mentorship."
              tags={["Science", "Competitive"]}
            />
            <CourseHighlightCard 
              title="Foundations (8-10)"
              desc="Building strong conceptual roots for higher academic excellence and logical reasoning."
              tags={["Junior", "Core"]}
              premium
            />
            <CourseHighlightCard 
              title="Digital Literacy"
              desc="Introducing modern computing, coding, and AI ethics to the young generation."
              tags={["Technology", "Future"]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center">
                <GraduationCap className="text-white w-8 h-8" />
              </div>
              <h4 className="text-3xl font-black tracking-tighter">Krishna Academy</h4>
            </div>
            <p className="text-slate-400 text-lg max-w-sm leading-relaxed font-medium">
              Empowering the youth of Upleta with world-class education and ethical leadership since 2004.
            </p>
          </div>
          <div className="space-y-6">
            <h5 className="font-bold text-xs uppercase tracking-widest text-amber-500">Quick Links</h5>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
              <li><button className="hover:text-white transition-colors cursor-pointer">Admissions</button></li>
              <li><button className="hover:text-white transition-colors cursor-pointer">Student Login</button></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h5 className="font-bold text-xs uppercase tracking-widest text-amber-500">Connect</h5>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li>Upleta Main Road, Gujarat</li>
              <li>+91 99999 88888</li>
              <li>contact@krishnaacademy.com</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">© 2024 KRISHNA ACADEMY UPLETA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            <button className="hover:text-amber-500 transition-colors cursor-pointer">Privacy</button>
            <button className="hover:text-amber-500 transition-colors cursor-pointer">Terms</button>
          </div>
        </div>
      </footer>
    </main>
  );
}

function PhilosophyCard({ icon, title, desc, active = false }: any) {
  return (
    <div className={`p-12 rounded-[3rem] border transition-all duration-500 group ${active ? 'bg-amber-500 border-amber-500 shadow-2xl shadow-amber-500/20' : 'bg-white/5 border-white/10 hover:border-amber-500/30'}`}>
      <div className={`mb-8 transition-transform group-hover:scale-110 duration-500 ${active ? 'text-white' : 'text-amber-500'}`}>
        {icon}
      </div>
      <h3 className={`text-2xl font-black mb-4 tracking-tight ${active ? 'text-white' : 'text-white'}`}>{title}</h3>
      <p className={`font-medium leading-relaxed ${active ? 'text-white/80' : 'text-slate-400'}`}>{desc}</p>
    </div>
  );
}

function CourseHighlightCard({ title, desc, tags, premium = false }: any) {
  return (
    <div className={`p-10 rounded-[3rem] border transition-all duration-500 group relative overflow-hidden ${premium ? 'bg-gradient-to-br from-amber-500 to-orange-600 border-amber-500 shadow-2xl shadow-amber-500/20' : 'bg-white/5 border-white/10 hover:border-amber-500/30'}`}>
      {premium && (
        <div className="absolute top-6 right-6">
          <Star className="text-white/30 w-12 h-12" />
        </div>
      )}
      <div className="flex gap-2 mb-8">
        {tags.map((tag: string) => (
          <span key={tag} className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${premium ? 'bg-white/20 text-white' : 'bg-amber-500/10 text-amber-500'}`}>
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-3xl font-black mb-6 tracking-tighter text-white leading-none">{title}</h3>
      <p className={`font-medium mb-10 leading-relaxed ${premium ? 'text-white/90' : 'text-slate-400'}`}>{desc}</p>
      <button className={`w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all cursor-pointer ${premium ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-amber-500 text-white hover:bg-amber-600'}`}>
        Learn More & Apply
      </button>
    </div>
  );
}
