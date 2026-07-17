"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/views/auth/AuthProvider";

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { ready, isAuthenticated } = useAuth();

  useEffect(() => {
    if (ready && !isAuthenticated) {
      router.replace("/login");
    }
  }, [ready, isAuthenticated, router]);

  if (!ready) {
    return (
      <div className="flex min-h-dvh items-center justify-center text-sm text-[#C9C2B5]/70">
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-dvh items-center justify-center text-sm text-[#C9C2B5]/70">
        Redirecting to login...
      </div>
    );
  }

  return <>{children}</>;
}

export function RedirectIfAuthenticated({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { ready, isAuthenticated } = useAuth();

  useEffect(() => {
    if (ready && isAuthenticated) {
      router.replace("/");
    }
  }, [ready, isAuthenticated, router]);

  if (!ready) {
    return (
      <div className="flex min-h-dvh items-center justify-center text-sm text-[#C9C2B5]/70">
        Loading...
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <div className="flex min-h-dvh items-center justify-center text-sm text-[#C9C2B5]/70">
        Redirecting...
      </div>
    );
  }

  return <>{children}</>;
}
