"use client";

import React, { useState } from "react";
import { User, Lock, ArrowRight, GraduationCap, Globe } from "lucide-react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="bg-background min-h-screen flex flex-col relative overflow-hidden">
      {/* Abstract Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary-container/20 to-primary/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-secondary-container/20 to-primary-container/20 blur-[80px]" />
      </div>

      <div className="flex-grow flex items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-[480px] glass-card rounded-[32px] p-8 md:p-12 neo-out flex flex-col gap-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
              Krishna Academy
            </h1>
            <p className="text-[10px] font-bold text-secondary tracking-[0.2em] uppercase">Upleta Student Portal</p>
          </div>

          {/* Toggle */}
          <div className="neo-in bg-surface-container/50 p-1.5 rounded-2xl flex items-center">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300 cursor-pointer ${isLogin ? "bg-primary-container text-white shadow-lg" : "text-on-surface-variant hover:text-primary"}`}
            >
              Sign In
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all duration-300 cursor-pointer ${!isLogin ? "bg-primary-container text-white shadow-lg" : "text-on-surface-variant hover:text-primary"}`}
            >
              Create Account
            </button>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-on-surface-variant ml-2 uppercase tracking-widest">
                Student ID or Email
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
                <input 
                  type="text" 
                  className="w-full pl-12 pr-4 py-4 rounded-2xl neo-in bg-white/40 border-none focus:ring-2 focus:ring-primary-container transition-all" 
                  placeholder="e.g. KA-2024-001" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Password</label>
                <button type="button" className="text-[10px] font-bold text-primary hover:underline cursor-pointer">FORGOT?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
                <input 
                  type="password" 
                  className="w-full pl-12 pr-4 py-4 rounded-2xl neo-in bg-white/40 border-none focus:ring-2 focus:ring-primary-container transition-all" 
                  placeholder="••••••••" 
                />
              </div>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-primary-container to-primary rounded-2xl text-white font-bold text-lg shadow-xl hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer">
              {isLogin ? "Enter Campus" : "Begin Journey"}
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="text-center">
            <p className="text-sm text-on-surface-variant">
              {isLogin ? "New to Krishna Academy?" : "Already have an account?"} 
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary font-bold hover:underline ml-1 cursor-pointer"
              >
                {isLogin ? "Apply for Admission" : "Sign In here"}
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 w-full py-8 px-6 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-outline uppercase tracking-widest">
          <span>© 2024 Krishna Academy Upleta</span>
          <div className="flex gap-6">
            <button className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</button>
            <button className="hover:text-primary transition-colors cursor-pointer">Student Support</button>
          </div>
        </div>
      </footer>
    </main>
  );
}
