"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate min-h-dvh overflow-hidden">
      <div className="absolute inset-0 hero-atmosphere" />
      <div className="absolute inset-0 hero-grain opacity-40" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 h-[28rem] w-[28rem] rounded-full bg-[#E8C9A0]/15 blur-3xl"
        animate={
          reduce
            ? undefined
            : { scale: [1, 1.12, 1], opacity: [0.25, 0.4, 0.25] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-10 h-[22rem] w-[22rem] rounded-full bg-[#3D6B7A]/25 blur-3xl"
        animate={
          reduce
            ? undefined
            : { scale: [1.1, 1, 1.1], opacity: [0.2, 0.35, 0.2] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-32">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-[family-name:var(--font-display)] text-5xl leading-none tracking-tight text-[#F4EFE6] sm:text-7xl md:text-8xl"
        >
          Alikhan
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-xl font-light leading-relaxed text-[#C9C2B5] sm:text-2xl"
        >
          Wholesale products sourced for serious buyers — clear pricing,
          reliable supply, ready to order.
        </motion.h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link
            href="/products"
            className="inline-flex items-center rounded-full bg-[#E8C9A0] px-6 py-3 text-sm font-semibold text-[#0B1220] transition hover:bg-[#F4EFE6]"
          >
            Explore products
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-[#F4EFE6] transition hover:border-[#E8C9A0]/50 hover:text-[#E8C9A0]"
          >
            About Alikhan
          </Link>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[11px] uppercase tracking-[0.3em] text-[#C9C2B5]/50 md:block"
        animate={reduce ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        Scroll
      </motion.div>
    </section>
  );
}
