import React from "react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function DashboardHome() {
  return (
    <div className="flex flex-col space-y-12 max-w-6xl">
      <section className="flex flex-col space-y-4">
        <h1 className="display-sm">Welcome back, Explorer.</h1>
        <p className="title-md text-on-surface-variant">Your cognitive workspace is ready.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card glow={true} className="flex flex-col space-y-6">
          <div className="h-12 w-12 rounded-full gradient-primary flex items-center justify-center shadow-ambient">
            <span className="text-white text-xl">+</span>
          </div>
          <div>
            <h2 className="headline-md mb-2">Start a New Creation</h2>
            <p className="body-md text-on-surface-variant">
              Generate intelligent content, from essays to presentations, guided by AI.
            </p>
          </div>
          <Link href="/create">
            <Button size="lg" className="w-full mt-4">Draft New Entity</Button>
          </Link>
        </Card>

        <Card level="high" className="flex flex-col space-y-6">
          <div className="h-12 w-12 rounded-full surface-highest flex items-center justify-center shadow-ambient">
            <span className="text-secondary text-xl">⚡</span>
          </div>
          <div>
            <h2 className="headline-md mb-2">Viva Mode Prep</h2>
            <p className="body-md text-on-surface-variant">
              Prepare for your viva voce with interactive, real-time AI questioning.
            </p>
          </div>
          <Link href="/dashboard/viva">
            <Button variant="secondary" size="lg" className="w-full mt-4">Start Training</Button>
          </Link>
        </Card>
      </section>

      <section>
        <h3 className="headline-md mb-6">Recent Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} level="low" padding="md" className="cursor-pointer hover:surface transition-colors">
              <div className="text-secondary mb-3 text-sm font-medium">Draft • 2 days ago</div>
              <h4 className="title-md text-on-surface mb-2">Quantum Computing Essay</h4>
              <p className="body-md text-on-surface-variant line-clamp-2">
                A brief exploration into the superposition and entanglement mechanics...
              </p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
