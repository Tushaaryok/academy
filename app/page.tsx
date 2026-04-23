import React from "react";
import Navbar from "@/components/Navbar";
import { ArrowRight, BookOpen, GraduationCap, Star, ChevronLeft, ChevronRight, Microscope, Code, Palette, Quote } from "lucide-react";

export default function Home() {
  return (
    <main className="relative bg-background overflow-x-hidden min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(201,163,78,0.1)_0%,_transparent_50%)]" />
        <div className="container-max mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 max-w-7xl">
          <div className="flex flex-col gap-6">
            <span className="text-primary font-semibold tracking-widest uppercase text-xs">
              Upleta's Premier Institution
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-on-background leading-tight">
              Excellence in Education, <br />
              <span className="text-primary-container">Redefined.</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-lg leading-relaxed">
              Discover a sanctuary of learning where tradition meets technology. We empower the next generation of leaders through personalized academic guidance and holistic development.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="gold-gradient text-white px-8 py-4 rounded-2xl font-bold neo-out active:scale-95 transition-transform flex items-center gap-2 group cursor-pointer">
                Explore Courses
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="glass-card px-8 py-4 rounded-2xl font-bold text-on-surface hover:bg-white/50 transition-all border border-white/30 cursor-pointer">
                Take a Tour
              </button>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_50%_50%,_rgba(201,163,78,0.2)_0%,_transparent_70%)]" />
            <div className="relative z-10">
              <div className="relative w-72 h-72 md:w-96 md:h-96 bg-surface rounded-[3rem] neo-out flex items-center justify-center p-8">
                <BookOpen className="w-32 h-32 md:w-48 md:h-48 text-primary opacity-20 absolute" />
                <div className="relative z-10 text-center">
                  <GraduationCap className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="font-bold text-xl text-primary">Academic Excellence</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 glass-card p-4 rounded-3xl neo-out animate-bounce">
                <BookOpen className="text-primary w-8 h-8" />
              </div>
              <div className="absolute bottom-4 -left-8 glass-card p-4 rounded-2xl neo-out">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
                    <Star className="text-white w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <p className="font-bold text-xs">Top Rated</p>
                    <p className="text-[10px] text-on-surface-variant">Academic Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Disciplines */}
      <section className="py-24 bg-surface-container-low relative">
        <div className="container-max mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-on-background mb-4">Featured Disciplines</h2>
              <p className="text-on-surface-variant text-lg">Master the future with our specialized curricula designed for global competitiveness.</p>
            </div>
            <div className="flex gap-4">
              <button className="neo-out w-12 h-12 rounded-full flex items-center justify-center text-primary bg-white hover:scale-110 transition-transform cursor-pointer">
                <ChevronLeft />
              </button>
              <button className="neo-out w-12 h-12 rounded-full flex items-center justify-center text-primary bg-white hover:scale-110 transition-transform cursor-pointer">
                <ChevronRight />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DisciplineCard 
              icon={<Microscope className="w-8 h-8" />}
              title="Advanced Sciences"
              description="In-depth laboratory research and theoretical physics curricula for aspiring innovators."
              price="$499/term"
            />
            <DisciplineCard 
              icon={<Code className="w-8 h-8" />}
              title="Computing & AI"
              description="From algorithmic foundations to advanced neural networks, prepare for the silicon tomorrow."
              price="$599/term"
              highlighted
            />
            <DisciplineCard 
              icon={<Palette className="w-8 h-8" />}
              title="Liberal Arts"
              description="Cultivating critical thinking through philosophy, history, and creative expression."
              price="$399/term"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container-max mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-on-background">Student Voices</h2>
            <p className="text-on-surface-variant mt-2 text-lg">Real experiences from our global student community.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <TestimonialCard 
              quote="The fusion of modern technology with traditional academic values at Krishna Academy has redefined my learning trajectory."
              author="Aarav Mehta"
              role="Physics Major"
            />
            <TestimonialCard 
              quote="Beyond just grades, the academy focuses on character development. I feel truly prepared for the professional world."
              author="Priya Sharma"
              role="Computer Science"
              shifted
            />
            <TestimonialCard 
              quote="The laboratory facilities are world-class. Having access to such premium resources is unprecedented."
              author="Vikram Vora"
              role="Biotechnology"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-bold text-amber-700">Krishna Academy</span>
            <p className="text-slate-600 text-sm leading-relaxed">
              Building excellence and fostering innovation in the heart of Upleta since 2004.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 justify-center md:justify-start">
            <a href="#" className="text-slate-600 hover:text-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-primary text-sm transition-colors">Terms</a>
            <a href="#" className="text-slate-600 hover:text-primary text-sm transition-colors">Curriculum</a>
          </div>
          <div className="flex gap-4 justify-center md:justify-end">
            <div className="w-10 h-10 rounded-full neo-out bg-white flex items-center justify-center text-slate-600 hover:text-primary transition-colors cursor-pointer">
              <Star className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="text-center text-slate-400 text-xs mt-12">
          © 2024 Krishna Academy Upleta. Excellence in Education.
        </div>
      </footer>
    </main>
  );
}

function DisciplineCard({ icon, title, description, price, highlighted = false }: any) {
  return (
    <div className={`glass-card p-8 rounded-[40px] neo-out flex flex-col gap-6 group hover:-translate-y-2 transition-all duration-300 ${highlighted ? "border-primary-container/20" : ""}`}>
      <div className="w-16 h-16 rounded-2xl neo-in flex items-center justify-center text-primary-container">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-on-background">{title}</h3>
      <p className="text-on-surface-variant text-sm leading-relaxed">{description}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="font-bold text-primary">{price}</span>
        <button className="text-primary font-bold flex items-center gap-1 group-hover:gap-2 transition-all text-sm cursor-pointer">
          Details <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function TestimonialCard({ quote, author, role, shifted = false }: any) {
  return (
    <div className={`neo-out p-10 rounded-[2rem] bg-surface relative ${shifted ? "md:translate-y-8" : ""}`}>
      <div className="absolute -top-6 left-10">
        <Quote className="text-primary w-12 h-12 opacity-10 fill-current" />
      </div>
      <p className="italic text-on-surface-variant mb-8 relative z-10 leading-relaxed">"{quote}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden neo-out bg-slate-200" />
        <div>
          <p className="font-bold text-on-background">{author}</p>
          <p className="text-xs text-primary font-bold uppercase tracking-wider">{role}</p>
        </div>
      </div>
    </div>
  );
}
