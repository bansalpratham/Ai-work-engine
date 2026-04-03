import React from "react";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

export default function TemplatesPage() {
  const templates = [
    { title: "Standard Essay", type: "Writing", desc: "Detailed academic essay structure." },
    { title: "Presentation Outline", type: "Planning", desc: "Key talking points structured." },
    { title: "Technical Report", type: "Writing", desc: "Formal report with abstract and findings." },
    { title: "Study Guide", type: "Learning", desc: "Summarised bullet points from vast subjects." },
    { title: "Viva Questions", type: "Prep", desc: "Anticipated questions over a topic." },
    { title: "Flashcards", type: "Learning", desc: "Q&A styled short format data." },
  ];

  return (
    <div className="flex flex-col space-y-10 max-w-6xl">
      <section>
        <h1 className="display-sm mb-4">Templates Library</h1>
        <p className="title-md text-on-surface-variant">Start fresh from standard academic formats.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((tpl, i) => (
          <Card key={i} level="high" padding="md" className="flex flex-col border border-transparent hover:border-[var(--outline-variant)] transition-all cursor-pointer group">
            <div className="text-secondary mb-3 text-sm font-medium">{tpl.type}</div>
            <h3 className="title-md text-on-surface mb-2">{tpl.title}</h3>
            <p className="body-md text-on-surface-variant mb-6 flex-1">
              {tpl.desc}
            </p>
            <Button variant="outline" className="w-full opacity-0 group-hover:opacity-100 transition-opacity">
              Use Template
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
