"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Product } from "@/models";
import { formatPrice, productImage } from "@/lib/api";
import { StaggerItem } from "@/views/motion/Reveal";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product }: ProductCardProps) {
  const image = productImage(product);

  return (
    <StaggerItem>
      <Link href={`/products/${product.id}`} className="group block h-full">
        <motion.article
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 360, damping: 24 }}
          className="flex h-full flex-col overflow-hidden rounded-lg border border-[#EEEEEE] bg-white shadow-sm transition hover:border-[#FFD7BF] hover:shadow-md"
        >
          <div className="relative aspect-square overflow-hidden bg-[#F7F7F7]">
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image}
                alt={product.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#FFF3EB] to-[#F5F5F5]">
                <span className="font-[family-name:var(--font-display)] text-3xl text-[#FF6A00]/35">
                  A
                </span>
              </div>
            )}
            <span className="absolute left-2 top-2 rounded bg-white/90 px-2 py-0.5 text-[10px] font-medium text-[#666]">
              {product.category}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-3">
            <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-medium leading-snug text-[#222] group-hover:text-[#FF6A00]">
              {product.title}
            </h3>
            <p className="mt-2 text-base font-bold text-[#FF6A00]">
              {formatPrice(product.wholesalePrice)}
              <span className="ml-1 text-xs font-normal text-[#888]">
                / {product.unit || "unit"}
              </span>
            </p>
            <p className="mt-1 text-xs text-[#888]">
              Retail {formatPrice(product.retailPrice)}
            </p>
            <div className="mt-auto flex items-center justify-between pt-3 text-[11px] text-[#999]">
              <span>Min. order: {product.minOrderQuantity}</span>
              <span className="text-[#FF6A00] opacity-0 transition group-hover:opacity-100">
                Chat now
              </span>
            </div>
          </div>
        </motion.article>
      </Link>
    </StaggerItem>
  );
}
