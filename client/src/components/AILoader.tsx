"use client";
import React from "react";

export function AILoader({ className = "" }: { className?: string }) {
  // Custom styling used to match the "Pulse Field" requirement:
  // Three overlapping circles with 32px blur oscillating in opacity from 10% to 30%.
  return (
    <div className={`relative flex items-center justify-center h-40 w-40 ${className}`}>
      <div 
        className="absolute w-24 h-24 rounded-full bg-[var(--surface-tint)] blur-[32px] animate-pulse"
        style={{ animationDuration: "4s" }} 
      />
      <div 
        className="absolute w-28 h-28 rounded-full bg-[var(--secondary)] blur-[32px] animate-pulse"
        style={{ animationDuration: "3s", animationDelay: "1s" }}
      />
      <div 
        className="absolute w-32 h-32 rounded-full bg-[var(--primary-dim)] blur-[32px] animate-pulse"
        style={{ animationDuration: "5s", animationDelay: "2s" }}
      />
    </div>
  );
}
