import React from "react";
import Link from "next/link";
import { Button } from "@/components/Button";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center background pt-32 px-6">
      <header className="fixed top-0 w-full glass-topbar z-50 h-20 flex items-center justify-between px-10 border-b ghost-border">
        <div className="headline-md gradient-text font-bold">Cognitive Nebula</div>
        <div className="flex space-x-6">
          <Link href="/login">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href="/login">
            <Button>Get Started</Button>
          </Link>
        </div>
      </header>

      <main className="flex flex-col items-center mt-20 max-w-4xl text-center space-y-8 z-10">
        <div className="inline-flex items-center px-4 py-2 surface-low rounded-full ghost-border text-on-surface-variant text-sm mb-6 shadow-ambient">
          <span className="text-primary mr-2">✦</span> The Next Evolution of Student AI
        </div>
        
        <h1 className="display-lg text-on-surface leading-tight">
          Supercharge your study workflow with <br/><span className="gradient-text inline-block mt-4">Cognitive Nebula</span>
        </h1>
        
        <p className="title-md text-on-surface-variant max-w-2xl px-6 leading-relaxed">
           More than just a dashboard, it's an extension of your own intelligence. 
           Generate essays, prep for vivas, and organize your academic life all in one deeply immersive workspace.
        </p>
        
        <div className="pt-8 flex space-x-6 pb-20">
          <Link href="/login">
            <Button size="lg">Start Free Trial</Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="secondary" size="lg">View Demo</Button>
          </Link>
        </div>
      </main>
      
      {/* Abstract Background Blur to match deep sea nebula feel */}
      <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-[var(--primary)] opacity-[0.07] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-[40rem] h-[40rem] bg-[var(--secondary)] opacity-[0.05] blur-[160px] pointer-events-none rounded-full" />
    </div>
  );
}