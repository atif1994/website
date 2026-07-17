"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";
import { forgotPassword } from "@/lib/auth-api";
import {
  AuthButton,
  AuthInput,
  AuthShell,
} from "@/views/auth/AuthShell";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [resetPath, setResetPath] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setSuccess("");
    setResetPath("");
    setLoading(true);
    try {
      const result = await forgotPassword(email);
      setSuccess(result.message);
      if (result.resetPath) {
        setResetPath(result.resetPath);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Request failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell
      title="Forgot password"
      subtitle="Enter your email and we’ll send a reset link."
      footer={
        <p className="text-center text-sm text-[#666]">
          Remembered it?{" "}
          <Link href="/login" className="font-medium text-[#FF6A00] hover:underline">
            Back to sign in
          </Link>
        </p>
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
        {error ? (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        ) : null}
        {success ? (
          <p className="text-sm text-emerald-600" role="status">
            {success}
          </p>
        ) : null}
        {resetPath ? (
          <p className="rounded-lg border border-[#FFE1CC] bg-[#FFF7F0] p-3 text-xs text-[#666]">
            Demo reset link:{" "}
            <Link href={resetPath} className="font-medium text-[#FF6A00] hover:underline">
              {resetPath}
            </Link>
          </p>
        ) : null}
        <AuthButton loading={loading}>Send reset link</AuthButton>
      </form>
    </AuthShell>
  );
}
