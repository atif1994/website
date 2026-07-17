"use client";

import Link from "next/link";
import { MARKETPLACE_CATEGORIES } from "@/lib/marketplace";
import { Reveal } from "@/views/motion/Reveal";

export function CategoryShortcuts() {
  return (
    <Reveal>
      <section className="rounded-xl bg-white p-4 shadow-sm sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-semibold text-[#222]">Shop by category</h2>
          <Link href="/products" className="text-xs text-[#FF6A00] hover:underline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {MARKETPLACE_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${encodeURIComponent(cat.slug)}`}
              className="group flex flex-col items-center rounded-lg border border-transparent bg-[#FAFAFA] px-2 py-4 text-center transition hover:border-[#FFD7BF] hover:bg-[#FFF7F0]"
            >
              <span className="text-2xl transition group-hover:scale-110">
                {cat.icon}
              </span>
              <span className="mt-2 line-clamp-2 text-xs font-medium text-[#444] group-hover:text-[#FF6A00]">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
