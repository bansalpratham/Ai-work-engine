"use client";

import React, { useState, useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { AILoader } from "@/components/AILoader";
import { 
  Sparkles, 
  ArrowRight, 
  ChevronLeft, 
  BookOpen, 
  Presentation, 
  FileText,
  Download,
  Save,
  CheckCircle2
} from "lucide-react";

export default function CreateFlow() {
  const [step, setStep] = useState(1);
  const [topic, setTopic] = useState("");

  // Step 4 is Generation: Automatically transition to Step 5 after a fake delay
  useEffect(() => {
    if (step === 4) {
      const timer = setTimeout(() => {
        setStep(5);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <Card className="w-full max-w-3xl animate-fade-in-up border-white/5 shadow-2xl overflow-hidden group">
            <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Sparkles size={20} />
                </div>
                <h2 className="headline-md">What shall we create today?</h2>
            </div>
            <p className="body-md text-on-surface-variant mb-8 opacity-80">Provide the initial seed idea, research topic, or essay prompt.</p>
            <textarea 
              className="w-full bg-white/[0.02] text-on-surface border border-white/10 rounded-2xl px-5 py-5 focus:outline-none focus:border-primary/50 focus:bg-white/[0.04] transition-all h-48 mb-6 placeholder:text-on-surface-variant/30 resize-none"
              placeholder="e.g., 'The impact of quantum entanglement on modern cryptography systems'..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              autoFocus
            />
            <div className="flex justify-end">
              <Button onClick={() => setStep(2)} disabled={!topic.trim()} className="group">
                Next: Refine 
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        );
      case 2:
        return (
          <Card className="w-full max-w-3xl animate-fade-in-up border-white/5">
            <h2 className="headline-md mb-2">Cognitive Clarification</h2>
            <p className="body-md text-on-surface-variant mb-8 opacity-80">AI needs a few more details to ensure academic precision.</p>
            
            <div className="flex flex-col space-y-6 mb-10">
              <div className="p-5 bg-white/[0.02] rounded-2xl border border-white/5">
                <p className="text-on-surface title-md mb-4 flex items-center">
                    <BookOpen size={18} className="mr-2 text-secondary" />
                    Target Audience Depth
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Undergraduate", "Postgraduate", "General Public"].map((level) => (
                    <button 
                        key={level}
                        className={`px-5 py-2.5 rounded-xl border transition-all text-sm font-medium ${
                            level === "Undergraduate" 
                            ? "bg-primary/20 border-primary/50 text-primary" 
                            : "bg-surface-lowest border-white/10 text-on-surface-variant hover:border-white/20 hover:text-on-surface"
                        }`}
                    >
                        {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="ghost" onClick={() => setStep(1)} className="hover:bg-white/5">
                <ChevronLeft size={18} className="mr-2" />
                Back
              </Button>
              <Button onClick={() => setStep(3)}>Next: Format</Button>
            </div>
          </Card>
        );
      case 3:
        return (
          <Card className="w-full max-w-3xl animate-fade-in-up border-white/5">
            <h2 className="headline-md mb-2">Select Output Format</h2>
            <p className="body-md text-on-surface-variant mb-8 opacity-80">Choose how you want the generation to be structured.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { title: "Academic Essay", icon: FileText, desc: "Detailed, structured prose with citations." },
                { title: "Slide Deck Outline", icon: Presentation, desc: "Concise points optimized for visuals." },
              ].map((format, i) => {
                const Icon = format.icon;
                const isSelected = i === 0;
                return (
                  <div 
                    key={i}
                    className={`
                        p-6 rounded-2xl border transition-all cursor-pointer flex flex-col items-center text-center
                        ${isSelected 
                            ? "bg-primary/10 border-primary/40 shadow-glow" 
                            : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                        }
                    `}
                    onClick={() => setStep(4)}
                  >
                     <div className={`h-12 w-12 rounded-xl mb-4 flex items-center justify-center ${isSelected ? "bg-primary text-white" : "bg-white/5 text-on-surface-variant"}`}>
                        <Icon size={24} />
                     </div>
                     <h4 className={`title-md mb-2 ${isSelected ? "text-primary" : "text-on-surface"}`}>{format.title}</h4>
                     <p className="body-md text-xs opacity-60 leading-normal">{format.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between">
              <Button variant="ghost" onClick={() => setStep(2)} className="hover:bg-white/5">
                <ChevronLeft size={18} className="mr-2" />
                Back
              </Button>
              <Button onClick={() => setStep(4)} className="shadow-glow">Generate Content</Button>
            </div>
          </Card>
        );
      case 4:
        return (
          <div className="flex flex-col items-center justify-center animate-fade-in max-w-2xl text-center h-[50vh]">
            <AILoader className="mb-12" />
            <h2 className="display-sm gradient-text mb-4">Synthesizing Knowledge</h2>
            <p className="title-md text-on-surface-variant max-w-md mx-auto leading-relaxed opacity-80">
              The AI is traversing academic literature, structuring arguments, and finalizing your cognitive template.
            </p>
          </div>
        );
      case 5:
        return (
          <Card className="w-full max-w-4xl animate-fade-in-up border-white/5 shadow-glow relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                <FileText size={200} />
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-white/10 gap-4">
              <div>
                 <div className="flex items-center space-x-2 text-primary mb-2">
                    <CheckCircle2 size={16} />
                    <span className="label-md uppercase tracking-widest">Generation Complete</span>
                 </div>
                 <h2 className="display-sm mb-1">Quantum Computing Essay</h2>
                 <p className="label-md text-on-surface-variant opacity-60">Cognitive Iteration #1 • Undergraduate Level</p>
              </div>
              <div className="flex space-x-3 w-full md:w-auto">
                <Button variant="outline" size="sm" className="flex-1 md:flex-none">
                    <Download size={16} className="mr-2" />
                    Export
                </Button>
                <Button size="sm" className="flex-1 md:flex-none">
                    <Save size={16} className="mr-2" />
                    Save
                </Button>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                  <h3 className="title-md text-primary mb-4">1. The Fundamentals of Superposition</h3>
                  <p className="body-md text-on-surface leading-relaxed opacity-90 first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                    Quantum computing represents a paradigm shift in computation, utilizing the principles of superposition and entanglement to perform complex calculations at speeds unachievable by classical architectures.
                  </p>
              </section>
              <section>
                  <h3 className="title-md text-primary mb-4">2. Qubits vs. Classical Bits</h3>
                  <p className="body-md text-on-surface-variant leading-relaxed opacity-90">
                    Unlike classical bits, which represent either exactly 0 or exactly 1, qubits can exist in a superposition of both states simultaneously. This flexibility exponentially increases the possible processing pathways. When entanglement is introduced—linking the state of multiple qubits regardless of physical distance—the system builds an interconnected, multidimensional array capable of vast problem-solving algorithms, such as Shor&apos;s algorithm for prime factorization and Grover&apos;s search algorithm.
                  </p>
              </section>
            </div>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen background flex font-sans overflow-x-hidden">
      <Sidebar />
      <div className="flex-1 ml-0 lg:ml-[21rem] transition-all duration-500">
        <Topbar />
        <main className="pt-32 px-6 md:px-10 pb-20 flex flex-col items-center justify-start min-h-screen relative">
          
          {/* Step Progress Bar */}
          {step < 4 && (
            <div className="w-full max-w-3xl mb-12 animate-fade-in-up">
              <div className="flex justify-between items-center mb-4">
                <div className="space-y-1">
                    <span className="text-on-surface-variant label-md uppercase tracking-[0.2em] font-bold opacity-50">Cognitive Assembly</span>
                    <h3 className="title-md text-sm font-bold">Refining Parameters</h3>
                </div>
                <div className="text-right">
                    <span className="text-primary label-md uppercase tracking-widest font-bold">Step {step} of 3</span>
                </div>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out shadow-glow" 
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          <div className="flex w-full justify-center items-start z-10">
            {renderStepContent()}
          </div>

          {/* Ambient Lighting */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-primary/5 blur-[200px] pointer-events-none rounded-full -z-10 animate-pulse" />
        </main>
      </div>
    </div>
  );
}

