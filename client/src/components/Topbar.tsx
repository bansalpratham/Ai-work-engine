import React from "react";

export function Topbar() {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 z-20 glass-topbar flex flex-row items-center px-10">
      <div className="flex-1 ml-80">
        {/* Breadcrumbs or search could go here */}
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-on-surface-variant hover:text-on-surface transition-colors">
          Search
        </button>
        <div className="w-10 h-10 rounded-full surface-high ghost-border flex items-center justify-center text-on-surface font-semibold">
          PR
        </div>
      </div>
    </header>
  );
}
