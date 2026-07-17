"use client";

import { RequireAuth } from "@/views/auth/AuthGuards";
import { SiteHeader } from "@/views/layouts/SiteHeader";
import { SiteFooter } from "@/views/layouts/SiteFooter";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RequireAuth>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </RequireAuth>
  );
}
