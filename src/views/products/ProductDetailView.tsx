"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Product } from "@/models";
import { formatPrice, productImage } from "@/lib/api";
import { Reveal } from "@/views/motion/Reveal";

interface ProductDetailViewProps {
  product: Product;
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const gallery = useMemo(() => {
    const images = [...(product.images || [])];
    if (product.thumbnail && !images.includes(product.thumbnail)) {
      images.unshift(product.thumbnail);
    }
    return images;
  }, [product]);

  const [active, setActive] = useState(0);
  const current = gallery[active] || productImage(product);

  return (
    <div className="bg-[#F5F5F5]">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6">
        <Reveal>
          <Link
            href="/products"
            className="text-sm text-[#666] hover:text-[#FF6A00]"
          >
            ← Back to products
          </Link>
        </Reveal>

        <div className="mt-4 grid gap-4 rounded-xl bg-white p-4 shadow-sm lg:grid-cols-2 lg:gap-8 lg:p-6">
          <Reveal>
            <div className="overflow-hidden rounded-lg border border-[#EEEEEE] bg-[#FAFAFA]">
              <div className="relative aspect-square">
                <AnimatePresence mode="wait">
                  {current ? (
                    <motion.img
                      key={current}
                      src={current}
                      alt={product.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-[#CCC]">
                      No image
                    </div>
                  )}
                </AnimatePresence>
              </div>
              {gallery.length > 1 ? (
                <div className="flex gap-2 overflow-x-auto p-3">
                  {gallery.map((image, index) => (
                    <button
                      key={`${index}-${image.slice(0, 16)}`}
                      type="button"
                      onClick={() => setActive(index)}
                      className={`h-16 w-16 shrink-0 overflow-hidden rounded border ${
                        active === index
                          ? "border-[#FF6A00]"
                          : "border-[#EEEEEE]"
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs font-medium uppercase tracking-wide text-[#999]">
              {product.category}
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-[#222] sm:text-3xl">
              {product.title}
            </h1>
            <p className="mt-4 text-3xl font-bold text-[#FF6A00]">
              {formatPrice(product.wholesalePrice)}
              <span className="ml-2 text-sm font-normal text-[#888]">
                / {product.unit}
              </span>
            </p>
            <p className="mt-1 text-sm text-[#888]">
              Retail price: {formatPrice(product.retailPrice)}
            </p>

            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                ["Min. order", `${product.minOrderQuantity} ${product.unit}`],
                [
                  "Monthly capacity",
                  String(product.monthlyProductionCapacity),
                ],
                ["Origin", product.originCountry],
                ["SKU / Unique No", product.uniqueNo],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-lg border border-[#F0F0F0] bg-[#FAFAFA] px-3 py-2"
                >
                  <dt className="text-xs text-[#999]">{label}</dt>
                  <dd className="mt-0.5 text-sm font-medium text-[#222]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6">
              <h2 className="text-sm font-semibold text-[#222]">Description</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#666]">
                {product.descriptionText || "No description provided."}
              </p>
            </div>

            {product.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-[#FFF3EB] px-2.5 py-1 text-xs text-[#FF6A00]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            <a
              href={`mailto:sales@alikhan.com?subject=Inquiry:%20${encodeURIComponent(product.title)}`}
              className="mt-8 inline-flex rounded-full bg-[#FF6A00] px-6 py-3 text-sm font-semibold text-white hover:bg-[#E55F00]"
            >
              Start order / Request quote
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
