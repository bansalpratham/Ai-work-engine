"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  rounded?: "md" | "full";
}

export function Button({
  className = "",
  variant = "primary",
  size = "md",
  rounded = "full",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-sans font-medium transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "gradient-primary text-white shadow-ambient hover:brightness-110 hover:shadow-[0_0_12px_var(--secondary-dim)]",
    secondary: "surface-bright text-on-surface hover:surface-high ghost-border",
    ghost: "bg-transparent text-on-surface-variant hover:text-on-surface hover:surface-high",
    outline: "bg-transparent ghost-border text-on-surface hover:surface-high",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const radius = {
    md: "rounded-2xl",
    full: "rounded-full",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${radius[rounded]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
