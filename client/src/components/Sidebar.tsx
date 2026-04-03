import React from "react";
import Link from "next/link";

export function Sidebar() {
  return (
    <nav className="fixed top-6 bottom-6 left-6 w-72 surface-lowest rounded-3xl flex flex-col p-6 shadow-ambient z-30 mr-2 border border-[var(--outline-variant)] border-opacity-15">
      <div className="mb-12 mt-4 px-2">
        <h1 className="headline-md gradient-text w-max">AI Engine</h1>
      </div>
      <div className="flex flex-col space-y-4">
        <Link href="/dashboard" className="text-on-surface hover:text-white transition-colors title-md py-3 px-4 rounded-[1.5rem] hover:surface-low flex items-center space-x-3">
          <span>Home</span>
        </Link>
        <Link href="/dashboard/history" className="text-on-surface-variant hover:text-white transition-colors title-md py-3 px-4 rounded-[1.5rem] hover:surface-low flex items-center space-x-3">
          <span>My History</span>
        </Link>
        <Link href="/dashboard/templates" className="text-on-surface-variant hover:text-white transition-colors title-md py-3 px-4 rounded-[1.5rem] hover:surface-low flex items-center space-x-3">
          <span>Templates</span>
        </Link>
        <Link href="/dashboard/viva" className="text-on-surface-variant hover:text-white transition-colors title-md py-3 px-4 rounded-[1.5rem] hover:surface-low flex items-center space-x-3">
          <span>Viva Mode</span>
        </Link>
      </div>
      <div className="mt-auto">
        <Link href="/create" className="block text-center w-full">
          <div className="gradient-primary text-white shadow-ambient hover:brightness-110 hover:shadow-[0_0_12px_var(--secondary-dim)] rounded-full px-4 py-4 font-medium transition-all">
            + New Creation
          </div>
        </Link>
      </div>
    </nav>
  );
}
