"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { signupUser } from "@/lib/auth-api";
import { useAuth } from "@/views/auth/AuthProvider";
import {
  AuthButton,
  AuthInput,
  AuthShell,
} from "@/views/auth/AuthShell";

export default function SignupPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result = await signupUser(name, email, password);
      if (!result.token || !result.user) {
        throw new Error(result.message || "Signup failed.");
      }
      login(result.token, result.user);
      router.replace("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell
      title="Create account"
      subtitle="Join Alikhan to browse wholesale products and request quotes."
      footer={
        <p className="text-center text-sm text-[#666]">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-[#FF6A00] hover:underline">
            Sign in
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          id="name"
          label="Full name"
          value={name}
          onChange={setName}
          placeholder="Your name"
          autoComplete="name"
        />
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
          placeholder="At least 6 characters"
          autoComplete="new-password"
        />
        {error ? (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        ) : null}
        <AuthButton loading={loading}>Create account</AuthButton>
      </form>
    </AuthShell>
  );
}
