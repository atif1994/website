import { ProductController } from "@/controllers";
import type { Product } from "@/models";
import { ProductRail } from "@/views/home/ProductRail";
import { CategorySidebar } from "@/views/home/CategorySidebar";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{ q?: string; category?: string }>;
}

export default async function ProductsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const q = params.q?.trim() || "";
  const category = params.category?.trim() || "";

  let products: Product[] = [];
  try {
    const result = await ProductController.getCatalog({
      limit: 50,
      search: q || undefined,
      category: category || undefined,
    });
    products = result.data;
  } catch {
    products = [];
  }

  const titleParts = [
    category || null,
    q ? `“${q}”` : null,
  ].filter(Boolean);

  return (
    <div className="bg-[#F5F5F5]">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-4 sm:px-6 sm:py-6 lg:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <CategorySidebar />
        </aside>
        <div className="space-y-4">
          <div className="rounded-xl bg-white px-4 py-4 shadow-sm sm:px-5">
            <p className="text-xs uppercase tracking-wide text-[#999]">
              Product catalog
            </p>
            <h1 className="mt-1 text-xl font-semibold text-[#222] sm:text-2xl">
              {titleParts.length > 0
                ? titleParts.join(" · ")
                : "All products"}
            </h1>
            <p className="mt-1 text-sm text-[#888]">
              {products.length} result{products.length === 1 ? "" : "s"} found
            </p>
          </div>
          <ProductRail
            title="Matching products"
            products={products}
            viewAllHref="/products"
            emptyMessage="No products matched your search. Try another keyword or category."
          />
        </div>
      </div>
    </div>
  );
}
