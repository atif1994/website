"use client";

import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-[#E8E8E8] bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="font-[family-name:var(--font-display)] text-xl font-bold text-[#FF6A00]">
            Alikhan
          </p>
          <p className="mt-2 text-sm text-[#666]">
            B2B wholesale marketplace to discover products, compare pricing, and
            request quotations.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#222]">Buy</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[#666]">
            <Link href="/products" className="hover:text-[#FF6A00]">
              All products
            </Link>
            <Link href="/" className="hover:text-[#FF6A00]">
              Home
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#222]">Company</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[#666]">
            <Link href="/about" className="hover:text-[#FF6A00]">
              About Alikhan
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[#F0F0F0] py-4 text-center text-xs text-[#999]">
        © {new Date().getFullYear()} Alikhan. All rights reserved.
      </div>
    </footer>
  );
}
