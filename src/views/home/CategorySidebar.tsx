"use client";

import Link from "next/link";
import { MARKETPLACE_CATEGORIES } from "@/lib/marketplace";

export function CategorySidebar() {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm">
      <p className="mb-3 text-sm font-semibold text-[#222]">Categories</p>
      <ul className="space-y-1">
        {MARKETPLACE_CATEGORIES.map((cat) => (
          <li key={cat.slug}>
            <Link
              href={`/products?category=${encodeURIComponent(cat.slug)}`}
              className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-[#444] transition hover:bg-[#FFF7F0] hover:text-[#FF6A00]"
            >
              <span>{cat.icon}</span>
              <span className="line-clamp-1">{cat.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
