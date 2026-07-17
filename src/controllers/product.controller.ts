import { getFeaturedProducts, getProduct, getProducts } from "@/lib/api";
import type { Product, ProductListResponse } from "@/models";

export class ProductController {
  static async getCatalog(params?: {
    page?: number;
    limit?: number;
    search?: string;
    category?: string;
  }): Promise<ProductListResponse> {
    return getProducts(params);
  }

  static async getFeatured(limit = 6): Promise<Product[]> {
    return getFeaturedProducts(limit);
  }

  static async getById(id: string): Promise<Product | null> {
    return getProduct(id);
  }
}
