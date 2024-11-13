import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-3xl">DASHBOARD</h1>
      {children}
    </div>
  );
}
