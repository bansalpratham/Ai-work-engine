import React from "react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export default function VivaModePage() {
  return (
    <div className="flex flex-col space-y-10 max-w-6xl">
      <section>
        <h1 className="display-sm mb-4">Viva Mode <span className="gradient-text">Prep</span></h1>
        <p className="title-md text-on-surface-variant">Defend your knowledge against an intelligent faculty simulator.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col space-y-6">
          <Card level="high" padding="md" className="border border-[var(--outline-variant)] flex flex-col space-y-6">
            <div>
              <h2 className="headline-md mb-2">Subject Selection</h2>
              <p className="body-md text-on-surface-variant">Select the topic and difficulty parameters.</p>
            </div>
            <div className="flex flex-col space-y-4">
               <div>
                  <label className="label-md text-on-surface-variant uppercase tracking-wider mb-2 block">Upload Context (Optional)</label>
                  <div className="w-full border border-dashed border-[var(--outline-variant)] rounded-xl px-6 py-8 text-center text-on-surface hover:surface-highest transition-colors cursor-pointer">
                    Drag and drop your report, essay, or thesis here.
                  </div>
               </div>
               <div>
                  <label className="label-md text-on-surface-variant uppercase tracking-wider mb-2 block">Topic Description</label>
                  <textarea 
                    className="w-full bg-[var(--surface-lowest)] text-on-surface border border-[var(--outline-variant)] rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--primary)] transition-colors h-32"
                    placeholder="E.g., The implications of Quantum Supremacy on modern standard encryption."
                  />
               </div>
            </div>
          </Card>
        </div>

        <div className="flex flex-col flex-1 space-y-6">
          <Card level="low" padding="md" className="flex flex-col justify-between">
            <div>
              <h3 className="title-md text-on-surface mb-4">Simulator Persona</h3>
              <div className="flex flex-col space-y-3">
                 <div className="flex items-center justify-between p-3 surface border border-[var(--primary)] rounded-xl cursor-pointer">
                    <span className="text-on-surface">Strict Professor</span>
                    <span className="text-primary text-xl">✓</span>
                 </div>
                 <div className="flex items-center justify-between p-3 surface-highest border border-[var(--outline-variant)] rounded-xl cursor-pointer">
                    <span className="text-on-surface-variant">Curious Peer</span>
                 </div>
                 <div className="flex items-center justify-between p-3 surface-highest border border-[var(--outline-variant)] rounded-xl cursor-pointer">
                    <span className="text-on-surface-variant">Panel Interview</span>
                 </div>
              </div>
            </div>
            
            <Button size="lg" className="w-full mt-8">Commence Viva</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
