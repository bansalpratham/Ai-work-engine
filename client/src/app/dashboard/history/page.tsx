import React from "react";
import { Card } from "@/components/Card";

export default function HistoryPage() {
  return (
    <div className="flex flex-col space-y-10 max-w-6xl">
      <section>
        <h1 className="display-sm mb-4">My History</h1>
        <p className="title-md text-on-surface-variant">Review your past generated content and interactions.</p>
      </section>

      <div className="flex flex-col space-y-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <Card key={item} level="low" padding="md" className="flex items-center justify-between hover:surface transition-colors cursor-pointer ghost-border hover:border-[var(--outline-variant)]">
            <div>
              <h3 className="title-md text-on-surface">Past Output Title {item}</h3>
              <p className="body-md text-on-surface-variant mt-1">Generated {item} days ago • Viva Prep Session</p>
            </div>
            <div className="text-primary font-medium text-sm">Review</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
