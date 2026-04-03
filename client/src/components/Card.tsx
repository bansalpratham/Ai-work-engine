import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  level?: "lowest" | "low" | "base" | "high" | "highest" | "floating";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  glow?: boolean;
}

export function Card({
  className = "",
  level = "base",
  padding = "lg",
  glow = false,
  children,
  ...props
}: CardProps) {
  const levels = {
    lowest: "surface-lowest",
    low: "surface-low",
    base: "surface",
    high: "surface-high",
    highest: "surface-highest shadow-ambient",
    floating: "glass-floating shadow-ambient ghost-border",
  };

  const paddings = {
    none: "p-0",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  };

  return (
    <div
      className={`rounded-3xl relative overflow-hidden ${levels[level]} ${paddings[padding]} ${className}`}
      {...props}
    >
      {glow && (
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--primary-container)] opacity-10 blur-3xl pointer-events-none rounded-full" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
