import React from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center background relative overflow-hidden">
      {/* Abstract Background Blobs */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[var(--primary)] opacity-[0.05] blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[var(--secondary)] opacity-[0.05] blur-[100px] pointer-events-none rounded-full" />

      <Card level="high" padding="xl" glow={true} className="w-full max-w-lg z-10 ghost-border border border-[var(--outline-variant)]">
        <div className="text-center mb-8">
          <h1 className="display-sm mb-2">Welcome Back</h1>
          <p className="title-md text-on-surface-variant">Sign in to your Cognitive Nebula</p>
        </div>

        <form className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <label className="label-md text-on-surface-variant uppercase tracking-wider">Email Address</label>
            <input 
              type="email" 
              className="bg-[var(--surface-lowest)] text-on-surface border border-[var(--outline-variant)] rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--primary)] transition-colors"
              placeholder="you@university.edu"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
               <label className="label-md text-on-surface-variant uppercase tracking-wider">Password</label>
               <span className="label-md text-primary cursor-pointer hover:underline">Forgot?</span>
            </div>
            <input 
              type="password" 
              className="bg-[var(--surface-lowest)] text-on-surface border border-[var(--outline-variant)] rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--primary)] transition-colors"
              placeholder="••••••••"
            />
          </div>

          <Link href="/dashboard" className="w-full pt-4">
             <Button size="lg" className="w-full">Sign In</Button>
          </Link>
        </form>

        <div className="mt-8 text-center">
           <p className="body-md text-on-surface-variant">
             Don't have an account? <Link href="/login" className="text-secondary hover:underline">Sign up</Link>
           </p>
        </div>
      </Card>
    </div>
  );
}
