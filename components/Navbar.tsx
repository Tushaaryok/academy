"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-2xl border border-white/20 bg-white/30 backdrop-blur-xl flex justify-between items-center px-8 py-4 z-50 shadow-[20px_20px_60px_#bebebe] transition-all duration-300">
      <div className="flex items-center gap-2">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent tracking-tight">
          Krishna Academy
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-8 tracking-tight text-sm font-medium">
        <Link href="/" className="text-slate-700 hover:text-primary transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-slate-700 hover:text-primary transition-colors">
          About
        </Link>
        <Link href="/courses" className="text-slate-700 hover:text-primary transition-colors">
          Courses
        </Link>
        <Link href="/contact" className="text-slate-700 hover:text-primary transition-colors">
          Contact
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/auth" className="text-slate-700 font-medium hover:opacity-80 transition-all text-sm">
          Sign In
        </Link>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="gold-gradient text-white px-6 py-2.5 rounded-xl font-bold neo-out text-sm"
        >
          Join Now
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
