"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HOME_BANNERS } from "@/lib/marketplace";

export function MarketplaceBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % HOME_BANNERS.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  const banner = HOME_BANNERS[index];

  return (
    <div className="relative overflow-hidden rounded-xl bg-white shadow-sm">
      <AnimatePresence mode="wait">
        <motion.div
          key={banner.id}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.4 }}
          className={`relative min-h-[180px] bg-gradient-to-r ${banner.tone} p-6 text-white sm:min-h-[240px] sm:p-10`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Alikhan Wholesale
          </p>
          <h2 className="mt-3 max-w-md font-[family-name:var(--font-display)] text-2xl font-bold sm:text-4xl">
            {banner.title}
          </h2>
          <p className="mt-2 max-w-md text-sm text-white/90 sm:text-base">
            {banner.subtitle}
          </p>
          <Link
            href={banner.href}
            className="mt-5 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#222] transition hover:bg-[#FFF7F0]"
          >
            {banner.cta}
          </Link>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-3 right-4 flex gap-1.5">
        {HOME_BANNERS.map((item, i) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Go to banner ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
