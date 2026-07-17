"use client";

import { RedirectIfAuthenticated } from "@/views/auth/AuthGuards";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RedirectIfAuthenticated>{children}</RedirectIfAuthenticated>;
}
