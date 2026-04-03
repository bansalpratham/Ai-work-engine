"use client";

import React, { useState, useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { AILoader } from "@/components/AILoader";

export default function CreateFlow() {
  const [step, setStep] = useState(1);

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
          <Card level="high" padding="lg" className="w-full max-w-3xl transition-opacity animate-fade-in border border-transparent shadow-ambient focus-within:border-[var(--outline-variant)]">
            <h2 className="headline-md mb-2">What shall we create today?</h2>
            <p className="body-md text-on-surface-variant mb-6">Provide the initial seed idea or topic.</p>
            <textarea 
              className="w-full bg-[var(--surface-lowest)] text-on-surface border border-[var(--outline-variant)] rounded-xl px-4 py-4 focus:outline-none focus:border-[var(--primary)] transition-colors h-40 mb-6"
              placeholder="Start typing your topic or objective..."
              autoFocus
            />
            <div className="flex justify-end">
              <Button onClick={() => setStep(2)}>Next: Refine</Button>
            </div>
          </Card>
        );
      case 2:
        return (
          <Card level="high" padding="lg" className="w-full max-w-3xl transition-opacity animate-fade-in border border-transparent">
            <h2 className="headline-md mb-2">Cognitive Clarification</h2>
            <p className="body-md text-on-surface-variant mb-6">AI needs a few more details to ensure precision.</p>
            
            <div className="flex flex-col space-y-4 mb-8">
              <div className="p-4 surface rounded-xl border border-[var(--outline-variant)]">
                <p className="text-on-surface title-md mb-4">What is the target audience depth?</p>
                <div className="flex space-x-3">
                  <div className="px-4 py-2 surface-lowest rounded-lg border border-[var(--primary)] text-primary cursor-pointer text-sm">Undergraduate</div>
                  <div className="px-4 py-2 surface-lowest rounded-lg border border-transparent text-on-surface-variant hover:border-[var(--outline-variant)] cursor-pointer transition-all text-sm">Postgraduate</div>
                  <div className="px-4 py-2 surface-lowest rounded-lg border border-transparent text-on-surface-variant hover:border-[var(--outline-variant)] cursor-pointer transition-all text-sm">General Public</div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="ghost" onClick={() => setStep(1)}>Back</Button>
              <Button onClick={() => setStep(3)}>Next: Format</Button>
            </div>
          </Card>
        );
      case 3:
        return (
          <Card level="high" padding="lg" className="w-full max-w-3xl transition-opacity animate-fade-in border border-transparent">
            <h2 className="headline-md mb-2">Select Output Format</h2>
            <p className="body-md text-on-surface-variant mb-6">Choose how you want the generation to be structured.</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-6 surface-lowest rounded-xl border border-[var(--primary)] shadow-ambient cursor-pointer flex flex-col items-center text-center">
                 <div className="h-10 w-10 bg-[var(--primary-container)] rounded-full opacity-25 mb-3" />
                 <h4 className="title-md text-primary">Academic Essay</h4>
              </div>
              <div className="p-6 surface border border-[var(--outline-variant)] rounded-xl cursor-pointer flex flex-col items-center text-center hover:border-[var(--primary-container)] transition-colors">
                 <div className="h-10 w-10 bg-[var(--surface-high)] rounded-full mb-3 border border-[var(--outline-variant)]" />
                 <h4 className="title-md text-on-surface">Slide Deck Outline</h4>
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="ghost" onClick={() => setStep(2)}>Back</Button>
              <Button onClick={() => setStep(4)}>Generate Content</Button>
            </div>
          </Card>
        );
      case 4:
        return (
          <div className="flex flex-col items-center justify-center animate-fade-in max-w-2xl text-center h-[50vh]">
            <AILoader className="mb-12" />
            <h2 className="headline-md gradient-text mb-4">Synthesizing Knowledge</h2>
            <p className="body-md text-on-surface-variant max-w-md mx-auto leading-relaxed">
              The AI is traversing academic literature, structuring arguments, and finalizing the cognitive template.
            </p>
          </div>
        );
      case 5:
        return (
          <Card level="high" padding="xl" className="w-full max-w-4xl transition-opacity animate-fade-in ghost-border glow">
            <div className="flex justify-between items-center mb-8 pb-6 border-b border-[var(--outline-variant)]">
              <div>
                 <h2 className="display-sm mb-1">Generated Essay</h2>
                 <p className="label-md text-on-surface-variant uppercase tracking-widest">Cognitive Iteration #1</p>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline" size="sm">Export Document</Button>
                <Button size="sm">Save to History</Button>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="title-md text-on-surface leading-relaxed whitespace-pre-wrap">
                Quantum computing represents a paradigm shift in computation, utilizing the principles of superposition and entanglement to perform complex calculations at speeds unachievable by classical architectures.
              </p>
              <p className="body-md text-on-surface-variant leading-relaxed">
                Unlike classical bits, which represent either exactly 0 or exactly 1, qubits can exist in a superposition of both states simultaneously. This flexibility exponentially increases the possible processing pathways. When entanglement is introduced—linking the state of multiple qubits regardless of physical distance—the system builds an interconnected, multidimensional array capable of vast problem-solving algorithms, such as Shor's algorithm for prime factorization and Grover's search algorithm.
              </p>
            </div>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen background flex font-sans">
      <Sidebar />
      <Topbar />
      <main className="flex-1 ml-[21rem] pt-32 px-10 pb-10 flex flex-col items-center justify-start overflow-y-auto w-full relative">
        
        {/* Step Progress Bar (Hidden during generation and result) */}
        {step < 4 && (
          <div className="w-full max-w-3xl mb-12">
            <div className="flex justify-between items-center mb-3">
              <span className="text-on-surface-variant label-md uppercase tracking-wider font-semibold">Cognitive Assembly</span>
              <span className="text-primary label-md uppercase tracking-wider font-semibold">Step {step} of 3</span>
            </div>
            <div className="h-1.5 w-full surface-lowest rounded-full overflow-hidden ghost-border">
              <div 
                className="h-full bg-[var(--primary)] rounded-full transition-all duration-700 ease-in-out shadow-[0_0_10px_var(--primary-container)]" 
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex flex-1 w-full justify-center items-start">
          {renderStepContent()}
        </div>

        {/* Ambient Glow */}
        <div className="fixed top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-[var(--primary-dim)] opacity-[0.04] blur-[200px] pointer-events-none rounded-full -z-10" />
      </main>
    </div>
  );
}
