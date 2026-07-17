"use client";

import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useAuth } from "@/views/auth/AuthProvider";
import { MARKETPLACE_CATEGORIES } from "@/lib/marketplace";

export function SiteHeader() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [catsOpen, setCatsOpen] = useState(false);

  function handleSearch(event: FormEvent) {
    event.preventDefault();
    const q = query.trim();
    router.push(q ? `/products?q=${encodeURIComponent(q)}` : "/products");
    setOpen(false);
  }

  function handleLogout() {
    logout();
    router.replace("/login");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8E8E8] bg-white shadow-sm">
      <div className="border-b border-[#F0F0F0] bg-[#FAFAFA]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-xs text-[#666] sm:px-6">
          <p>Wholesale marketplace for buyers & suppliers</p>
          <div className="hidden items-center gap-4 sm:flex">
            <Link href="/about" className="hover:text-[#FF6A00]">
              About
            </Link>
            <span>{user?.email}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0">
          <span className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[#FF6A00]">
            Alikhan
          </span>
        </Link>

        <form onSubmit={handleSearch} className="hidden flex-1 md:flex">
          <div className="flex w-full overflow-hidden rounded-full border-2 border-[#FF6A00]">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, categories, suppliers..."
              className="min-w-0 flex-1 px-4 py-2.5 text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-[#FF6A00] px-6 text-sm font-semibold text-white transition hover:bg-[#E55F00]"
            >
              Search
            </button>
          </div>
        </form>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <Link
            href="/products"
            className="hidden text-sm text-[#333] hover:text-[#FF6A00] lg:inline"
          >
            Products
          </Link>
          <span className="hidden text-sm text-[#666] sm:inline">
            Hi, {user?.name?.split(" ")[0] || "Buyer"}
          </span>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-full border border-[#E8E8E8] px-3 py-1.5 text-xs font-medium text-[#333] hover:border-[#FF6A00] hover:text-[#FF6A00]"
          >
            Sign out
          </button>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E8E8E8] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>

      <form onSubmit={handleSearch} className="px-4 pb-3 md:hidden">
        <div className="flex overflow-hidden rounded-full border-2 border-[#FF6A00]">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="min-w-0 flex-1 px-3 py-2 text-sm outline-none"
          />
          <button
            type="submit"
            className="bg-[#FF6A00] px-4 text-sm font-semibold text-white"
          >
            Go
          </button>
        </div>
      </form>

      <div className="border-t border-[#F0F0F0] bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-2 sm:px-6">
          <button
            type="button"
            onClick={() => setCatsOpen((v) => !v)}
            className="shrink-0 rounded bg-[#FF6A00] px-3 py-1.5 text-xs font-semibold text-white"
          >
            All Categories
          </button>
          {MARKETPLACE_CATEGORIES.slice(0, 7).map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${encodeURIComponent(cat.slug)}`}
              className="shrink-0 rounded px-2.5 py-1.5 text-xs text-[#444] hover:bg-[#FFF3EB] hover:text-[#FF6A00]"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {catsOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[#F0F0F0] bg-white"
          >
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 py-4 sm:grid-cols-3 md:grid-cols-5 sm:px-6">
              {MARKETPLACE_CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products?category=${encodeURIComponent(cat.slug)}`}
                  onClick={() => setCatsOpen(false)}
                  className="rounded-lg border border-[#F0F0F0] px-3 py-2 text-sm text-[#333] hover:border-[#FF6A00] hover:text-[#FF6A00]"
                >
                  <span className="mr-2">{cat.icon}</span>
                  {cat.name}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="border-t border-[#F0F0F0] bg-white px-4 py-3 md:hidden"
          >
            <Link href="/" className="block py-2 text-sm" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link
              href="/products"
              className="block py-2 text-sm"
              onClick={() => setOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="block py-2 text-sm"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
