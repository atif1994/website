import { notFound } from "next/navigation";
import { ProductController } from "@/controllers";
import { ProductDetailView } from "@/views/products/ProductDetailView";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = await ProductController.getById(id);
  if (!product) notFound();
  return <ProductDetailView product={product} />;
}
