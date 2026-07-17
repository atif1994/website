"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Reveal } from "@/views/motion/Reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(232,201,160,0.16),transparent_45%),linear-gradient(180deg,#0B1220,#080D18)]" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-12 text-center backdrop-blur sm:px-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[#F4EFE6] sm:text-5xl">
              Ready to source at scale?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[#C9C2B5]/80">
              Browse the live catalog and request a quotation for the products
              you need.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} className="mt-8 inline-block">
              <Link
                href="/products"
                className="inline-flex rounded-full bg-[#E8C9A0] px-6 py-3 text-sm font-semibold text-[#0B1220]"
              >
                View all products
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
