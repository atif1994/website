import type { Product, ProductListResponse } from "@/models/product.model";

/**
 * Base API URL from env.
 * Local:  http://localhost:4000
 * Prod:   https://hadikhantraders.com/api
 */
const RAW_API_BASE =
  process.env.NEXT_PUBLIC_API_URL?.trim() || "http://localhost:4000";

export function getApiBase() {
  return RAW_API_BASE.replace(/\/$/, "");
}

/** Join base + path without doubling "/api". */
export function apiUrl(path: string) {
  const base = getApiBase();
  let cleanPath = path.startsWith("/") ? path : `/${path}`;

  if (base.endsWith("/api") && cleanPath.startsWith("/api/")) {
    cleanPath = cleanPath.slice(4);
  } else if (base.endsWith("/api") && cleanPath === "/api") {
    cleanPath = "";
  }

  return `${base}${cleanPath}`;
}

function isPublicProduct(product: Product): boolean {
  if (product.status === "draft") return false;
  if (product.visible === false) return false;
  return true;
}

export async function getProducts(params?: {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
}): Promise<ProductListResponse> {
  const query = new URLSearchParams();
  query.set("page", String(params?.page ?? 1));
  query.set("limit", String(params?.limit ?? 50));
  if (params?.search) query.set("search", params.search);
  if (params?.category) query.set("category", params.category);

  const response = await fetch(apiUrl(`/api/products?${query}`), {
    next: { revalidate: 15 },
  });

  if (!response.ok) {
    throw new Error("Failed to load products");
  }

  const result = (await response.json()) as ProductListResponse;
  const data = result.data.filter(isPublicProduct);

  return {
    ...result,
    data,
    total: data.length,
  };
}

export async function getProduct(id: string): Promise<Product | null> {
  const response = await fetch(apiUrl(`/api/products/${id}`), {
    next: { revalidate: 15 },
  });

  if (!response.ok) return null;
  const product = (await response.json()) as Product;
  if (!isPublicProduct(product)) return null;
  return product;
}

export async function getFeaturedProducts(limit = 6): Promise<Product[]> {
  const result = await getProducts({ limit: 24, page: 1 });
  return result.data.slice(0, limit);
}

export function formatPrice(amount: number): string {
  return `PKR ${amount.toLocaleString()}`;
}

export function productImage(product: Product): string | null {
  return product.thumbnail || product.images?.[0] || null;
}
