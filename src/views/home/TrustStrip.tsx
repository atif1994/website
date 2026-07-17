"use client";

import Link from "next/link";
import { Reveal } from "@/views/motion/Reveal";

const TRUST = [
  { title: "Trade Assurance", desc: "Protected payments & orders" },
  { title: "Verified Suppliers", desc: "Checked seller profiles" },
  { title: "Bulk Pricing", desc: "MOQ & wholesale ready" },
  { title: "Fast Quotation", desc: "Request quotes quickly" },
];

export function TrustStrip() {
  return (
    <Reveal>
      <section className="grid gap-3 rounded-xl bg-white p-4 shadow-sm sm:grid-cols-2 sm:p-5 lg:grid-cols-4">
        {TRUST.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border border-[#F0F0F0] bg-[#FAFAFA] px-3 py-3"
          >
            <p className="text-sm font-semibold text-[#222]">{item.title}</p>
            <p className="mt-1 text-xs text-[#888]">{item.desc}</p>
          </div>
        ))}
        <div className="sm:col-span-2 lg:col-span-4">
          <Link
            href="/products"
            className="inline-flex text-sm font-medium text-[#FF6A00] hover:underline"
          >
            Start sourcing products →
          </Link>
        </div>
      </section>
    </Reveal>
  );
}
