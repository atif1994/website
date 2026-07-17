"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/auth-api";
import { useAuth } from "@/views/auth/AuthProvider";
import {
  AuthButton,
  AuthInput,
  AuthShell,
} from "@/views/auth/AuthShell";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result = await loginUser(email, password);
      if (!result.token || !result.user) {
        throw new Error(result.message || "Login failed.");
      }
      login(result.token, result.user);
      router.replace("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell
      title="Sign in"
      subtitle="Welcome back. Access the Alikhan wholesale catalog."
      footer={
        <>
          <p className="text-center text-sm text-[#666]">
            New here?{" "}
            <Link href="/signup" className="font-medium text-[#FF6A00] hover:underline">
              Create an account
            </Link>
          </p>
          <p className="mt-3 text-center text-xs text-[#999]">
            Demo buyer: buyer@alikhan.com / buyer123
          </p>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="you@company.com"
          autoComplete="email"
        />
        <AuthInput
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="Enter your password"
          autoComplete="current-password"
        />
        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-xs font-medium text-[#FF6A00] hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        {error ? (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        ) : null}
        <AuthButton loading={loading}>Sign in</AuthButton>
      </form>
    </AuthShell>
  );
}
