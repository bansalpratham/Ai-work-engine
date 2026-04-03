import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen background flex">
      <Sidebar />
      <Topbar />
      <main className="flex-1 ml-[21rem] pt-24 px-10 pb-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
