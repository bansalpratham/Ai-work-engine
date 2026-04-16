"use client";

import React from "react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import Link from "next/link";
import { 
  Plus, 
  Zap, 
  FileText, 
  Clock, 
  ChevronRight,
  TrendingUp
} from "lucide-react";

export default function DashboardHome() {
  return (
    <div className="flex flex-col space-y-12 max-w-6xl animate-fade-in-up">
      <section className="flex flex-col space-y-4">
        <div className="flex items-center space-x-3 text-secondary mb-2">
            <TrendingUp size={18} />
            <span className="label-md uppercase tracking-widest opacity-80">Workspace Pulse</span>
        </div>
        <h1 className="display-sm">Welcome back, <span className="gradient-text font-black">Explorer</span>.</h1>
        <p className="title-md text-on-surface-variant opacity-80">Your cognitive workspace is synced and ready.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card glow={true} className="flex flex-col space-y-6 group cursor-default border-white/5">
          <div className="h-14 w-14 rounded-2xl gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-500">
            <Plus className="text-white" size={28} />
          </div>
          <div>
            <h2 className="headline-md mb-2 group-hover:text-primary transition-colors">Start a New Creation</h2>
            <p className="body-md text-on-surface-variant leading-relaxed">
              Generate intelligent content, from essays to presentations, guided by advanced cognitive models.
            </p>
          </div>
          <Link href="/create">
            <Button size="lg" className="w-full mt-4 group">
              Draft New Entity
              <ChevronRight size={18} className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Button>
          </Link>
        </Card>

        <Card className="flex flex-col space-y-6 group cursor-default border-white/5 bg-white/[0.02]">
          <div className="h-14 w-14 rounded-2xl surface-highest flex items-center justify-center shadow-ambient group-hover:bg-secondary/10 transition-colors duration-500">
            <Zap className="text-secondary group-hover:animate-pulse" size={28} />
          </div>
          <div>
            <h2 className="headline-md mb-2 group-hover:text-secondary transition-colors">Viva Mode Prep</h2>
            <p className="body-md text-on-surface-variant leading-relaxed">
              Prepare for your viva voce with interactive, real-time AI questioning tailored to your topic.
            </p>
          </div>
          <Link href="/dashboard/viva">
            <Button variant="secondary" size="lg" className="w-full mt-4">Start Training</Button>
          </Link>
        </Card>
      </section>

      <section>
        <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
                <Clock className="text-on-surface-variant" size={20} />
                <h3 className="headline-md">Recent Activity</h3>
            </div>
            <Link href="/dashboard/history" className="text-sm text-primary hover:underline flex items-center">
                View All <ChevronRight size={16} />
            </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Quantum Computing Essay", type: "Draft", time: "2 days ago", icon: FileText },
            { title: "VIVA Prep: Neural Networks", type: "Session", time: "5 hours ago", icon: Zap },
            { title: "Climate Change Analysis", type: "Final", time: "1 week ago", icon: FileText },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <Card key={i} className="cursor-pointer hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300 border-white/5 group">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-white/5 text-secondary group-hover:bg-secondary/10 transition-colors">
                        <Icon size={18} />
                    </div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant opacity-60">{item.time}</div>
                </div>
                <h4 className="title-md text-on-surface mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <p className="label-md text-on-surface-variant uppercase">{item.type}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}

