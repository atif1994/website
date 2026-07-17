"use client";

import Link from "next/link";
import type { Product } from "@/models";
import { ProductCard } from "@/views/products/ProductCard";
import { Reveal, Stagger } from "@/views/motion/Reveal";

interface ProductRailProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllHref?: string;
  emptyMessage?: string;
}

export function ProductRail({
  title,
  subtitle,
  products,
  viewAllHref = "/products",
  emptyMessage = "No products available yet.",
}: ProductRailProps) {
  return (
    <section className="rounded-xl bg-white p-4 shadow-sm sm:p-5">
      <Reveal>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
          <div>
            <h2 className="text-lg font-semibold text-[#222]">{title}</h2>
            {subtitle ? (
              <p className="mt-1 text-sm text-[#888]">{subtitle}</p>
            ) : null}
          </div>
          <Link
            href={viewAllHref}
            className="text-sm font-medium text-[#FF6A00] hover:underline"
          >
            View more →
          </Link>
        </div>
      </Reveal>

      {products.length === 0 ? (
        <p className="rounded-lg border border-dashed border-[#E8E8E8] px-4 py-10 text-center text-sm text-[#999]">
          {emptyMessage}
        </p>
      ) : (
        <Stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </Stagger>
      )}
    </section>
  );
}
