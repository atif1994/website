export type ProductStatus = "draft" | "pending" | "active";

export interface Product {
  id: string;
  uniqueNo: string;
  title: string;
  description: string;
  descriptionText: string;
  originCountry: string;
  category: string;
  retailPrice: number;
  wholesalePrice: number;
  unit: string;
  minOrderQuantity: number;
  monthlyProductionCapacity: number;
  tags: string[];
  status: ProductStatus;
  visible: boolean;
  thumbnail?: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductListResponse {
  data: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
