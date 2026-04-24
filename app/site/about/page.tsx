import React from "react";
import Navbar from "@/components/Navbar";
import { School, Flag, Eye, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Navbar />
      
      <div className="pt-32 pb-24">
        {/* Hero Introduction Section */}
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container/30 border border-secondary-container/50 text-on-secondary-container">
              <School className="w-4 h-4" />
              <span className="font-semibold text-[10px] tracking-widest uppercase">ESTABLISHED EXCELLENCE</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
              Nurturing Minds, <br /><span className="text-secondary">Shaping Futures.</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
              Krishna Academy Upleta is more than an institution; it is a sanctuary of learning where traditional values meet modern innovation. We provide an elite educational experience designed to empower students with critical thinking and leadership skills.
            </p>
            <div className="flex flex-wrap gap-4">
              <StatCard value="15+" label="YEARS" />
              <StatCard value="2k+" label="ALUMNI" />
              <StatCard value="50+" label="AWARDS" />
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary-container/10 blur-[100px] rounded-full" />
            <div className="relative z-10 w-full max-w-md aspect-square neo-out rounded-[3rem] bg-surface flex items-center justify-center p-12 group">
               <div className="text-center">
                  <School className="w-32 h-32 text-primary opacity-20" />
                  <p className="mt-4 font-bold text-primary text-xl">Upleta Campus</p>
               </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <MissionCard 
              icon={<Flag className="w-8 h-8 text-white" />}
              title="Our Mission"
              description="To ignite a passion for lifelong learning by providing a rigorous, student-centered curriculum that fosters intellectual curiosity and emotional resilience."
              bgColor="bg-primary-container"
            />
            <MissionCard 
              icon={<Eye className="w-8 h-8 text-white" />}
              title="Our Vision"
              description="To be the premier center for academic excellence in the region, recognized for cultivating ethical leaders who contribute meaningfully to society."
              bgColor="bg-secondary"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({ value, label }: any) {
  return (
    <div className="neo-out p-6 rounded-2xl bg-surface flex flex-col items-center gap-2 w-32">
      <span className="text-3xl font-bold text-primary">{value}</span>
      <span className="text-[10px] font-bold text-secondary tracking-widest">{label}</span>
    </div>
  );
}

function MissionCard({ icon, title, description, bgColor }: any) {
  return (
    <div className="glass-card p-12 rounded-[2.5rem] relative overflow-hidden group border border-white/30">
      <div className="relative z-10">
        <div className={`w-16 h-16 rounded-2xl ${bgColor} flex items-center justify-center mb-8 shadow-lg`}>
          {icon}
        </div>
        <h3 className={`text-3xl font-bold mb-6 ${bgColor.includes('primary') ? 'text-primary' : 'text-secondary'}`}>{title}</h3>
        <p className="text-on-surface-variant text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
