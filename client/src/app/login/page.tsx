"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center background relative overflow-hidden">
      {/* Abstract Background Blobs */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[var(--primary)] opacity-[0.05] blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[var(--secondary)] opacity-[0.05] blur-[100px] pointer-events-none rounded-full" />

      <Card level="high" padding="xl" glow={true} className="w-full max-w-lg z-10 ghost-border border border-[var(--outline-variant)]">
        <div className="text-center mb-8">
          <h1 className="display-sm mb-2">Welcome Back</h1>
          <p className="title-md text-on-surface-variant">Sign in to your Cognitive Nebula</p>
        </div>

        {error && (
          <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            {error}
          </div>
        )}

        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2">
            <label className="label-md text-on-surface-variant uppercase tracking-wider">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-[var(--surface-lowest)] text-on-surface border border-[var(--outline-variant)] rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--primary)] transition-colors"
              placeholder="you@university.edu"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
               <label className="label-md text-on-surface-variant uppercase tracking-wider">Password</label>
               <span className="label-md text-primary cursor-pointer hover:underline">Forgot?</span>
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="bg-[var(--surface-lowest)] text-on-surface border border-[var(--outline-variant)] rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--primary)] transition-colors"
              placeholder="••••••••"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full mt-4"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <div className="mt-8 text-center">
           <p className="body-md text-on-surface-variant">
             Don&apos;t have an account? <Link href="/register" className="text-secondary hover:underline">Sign up</Link>
           </p>
        </div>
      </Card>
    </div>
  );
}
