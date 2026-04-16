"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Sparkles, ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center background pt-32 px-6 overflow-hidden">
      <header className="fixed top-0 w-full glass-topbar z-50 h-20 flex items-center justify-between px-10 border-b ghost-border">
        <div className="headline-md gradient-text font-bold tracking-tight">Cognitive Nebula</div>
        <div className="flex space-x-6">
          <Link href="/login">
            <Button variant="ghost" size="sm">Sign In</Button>
          </Link>
          <Link href="/register">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </header>

      <main className="flex flex-col items-center mt-20 max-w-4xl text-center space-y-10 z-10 animate-fade-in-up">
        <div className="inline-flex items-center px-4 py-2 surface-low rounded-full ghost-border text-on-surface-variant text-sm mb-6 shadow-ambient border border-white/5">
          <Sparkles size={14} className="text-primary mr-2" />
          <span className="tracking-wide">The Next Evolution of Student AI</span>
        </div>
        
        <h1 className="display-lg text-on-surface leading-[1.1] max-w-3xl">
          Supercharge your study workflow with <br/>
          <span className="gradient-text italic font-black">Cognitive Nebula</span>
        </h1>
        
        <p className="title-md text-on-surface-variant max-w-2xl px-6 leading-relaxed opacity-90">
           More than just a dashboard, it&apos;s an extension of your own intelligence. 
           Generate essays, prep for vivas, and organize your academic life all in one deeply immersive workspace.
        </p>
        
        <div className="pt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pb-20">
          <Link href="/register">
            <Button size="lg" className="group">
              Start Free Trial 
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="secondary" size="lg">View Demo</Button>
          </Link>
        </div>
      </main>
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-indigo-600/10 blur-[120px] pointer-events-none rounded-full animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-[50rem] h-[50rem] bg-sky-500/10 blur-[150px] pointer-events-none rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-[30rem] bg-gradient-to-t from-indigo-900/20 to-transparent blur-[80px] pointer-events-none" />
    </div>
  );
}