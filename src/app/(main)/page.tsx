import { ProductController } from "@/controllers";
import type { Product } from "@/models";
import { CategoryShortcuts } from "@/views/home/CategoryShortcuts";
import { CategorySidebar } from "@/views/home/CategorySidebar";
import { MarketplaceBanner } from "@/views/home/MarketplaceBanner";
import { ProductRail } from "@/views/home/ProductRail";
import { TrustStrip } from "@/views/home/TrustStrip";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let products: Product[] = [];
  try {
    const result = await ProductController.getCatalog({ limit: 50 });
    products = result.data;
  } catch {
    products = [];
  }

  const featured = products.slice(0, 10);
  const topRanked = [...products]
    .sort((a, b) => a.wholesalePrice - b.wholesalePrice)
    .slice(0, 10);
  const newest = [...products]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 10);

  return (
    <div className="bg-[#F5F5F5]">
      <div className="mx-auto max-w-7xl space-y-4 px-4 py-4 sm:px-6 sm:py-6">
        <div className="grid gap-4 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <CategorySidebar />
          </aside>
          <div className="space-y-4">
            <MarketplaceBanner />
            <div className="lg:hidden">
              <CategoryShortcuts />
            </div>
            <TrustStrip />
          </div>
        </div>

        <ProductRail
          title="Just for you"
          subtitle="Recommended wholesale products based on your catalog."
          products={featured}
        />
        <ProductRail
          title="Top ranking deals"
          subtitle="Best wholesale prices available right now."
          products={topRanked}
        />
        <ProductRail
          title="New arrivals"
          subtitle="Recently added listings from sellers."
          products={newest}
        />
      </div>
    </div>
  );
}
