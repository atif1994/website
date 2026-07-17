"use client";

import type { Product } from "@/models";
import { ProductCard } from "@/views/products/ProductCard";
import { Reveal, Stagger } from "@/views/motion/Reveal";

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  emptyMessage?: string;
}

export function ProductGrid({
  products,
  title = "Featured products",
  subtitle = "Live listings from the Alikhan wholesale catalog.",
  emptyMessage = "No products are published yet.",
}: ProductGridProps) {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.28em] text-[#E8C9A0]/80">
          Catalog
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-[#F4EFE6] sm:text-5xl">
          {title}
        </h2>
        <p className="mt-3 max-w-xl text-[#C9C2B5]/80">{subtitle}</p>
      </Reveal>

      {products.length === 0 ? (
        <Reveal delay={0.1}>
          <p className="mt-12 rounded-2xl border border-dashed border-white/15 px-6 py-16 text-center text-[#C9C2B5]/70">
            {emptyMessage}
          </p>
        </Reveal>
      ) : (
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </Stagger>
      )}
    </section>
  );
}
