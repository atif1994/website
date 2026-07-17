"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-[#F5F5F5]">
      <div className="border-b border-[#E8E8E8] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link
            href="/login"
            className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[#FF6A00]"
          >
            Alikhan
          </Link>
          <p className="hidden text-xs text-[#666] sm:block">
            Wholesale marketplace for buyers & suppliers
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-6 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="hidden rounded-xl bg-gradient-to-br from-[#FF6A00] to-[#FF8A3D] p-8 text-white lg:block"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Alikhan Wholesale
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight xl:text-4xl">
            Source products.
            <br />
            Grow your business.
          </h2>
          <p className="mt-4 max-w-md text-sm text-white/90">
            Sign in to browse wholesale listings, compare MOQs, and request
            quotations — just like a modern B2B marketplace.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/95">
            <li>• Verified supplier catalog</li>
            <li>• Clear wholesale pricing</li>
            <li>• Fast quotation requests</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="rounded-xl border border-[#EEEEEE] bg-white p-6 shadow-sm sm:p-8"
        >
          <h1 className="text-2xl font-semibold text-[#222]">{title}</h1>
          <p className="mt-2 text-sm text-[#666]">{subtitle}</p>
          <div className="mt-7">{children}</div>
          {footer ? <div className="mt-6">{footer}</div> : null}
        </motion.div>
      </div>
    </div>
  );
}

export function AuthInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-[#444]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-[#E0E0E0] bg-white px-3 py-2.5 text-sm text-[#222] outline-none transition placeholder:text-[#AAA] focus:border-[#FF6A00]"
      />
    </div>
  );
}

export function AuthButton({
  children,
  loading,
}: {
  children: React.ReactNode;
  loading?: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full rounded-full bg-[#FF6A00] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#E55F00] disabled:opacity-60"
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}
