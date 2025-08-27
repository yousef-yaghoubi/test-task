import { z } from "zod";
import { Product } from "@/data/products";

const SearchParamsSchema = z.object({
  q: z.string().optional(),
  page: z
    .string()
    .transform((val) => parseInt(val))
    .refine((val) => val > 0, { message: "page must be > 0" })
    .optional(),
  limit: z
    .string()
    .transform((val) => parseInt(val))
    .refine((val) => val > 0, { message: "limit must be > 0" })
    .optional(),
});

export interface ParsedSearchParams {
  query: string;
  page: number;
  limit: number;
}

export function parseSearchParams(
  searchParams: Record<string, string>
): ParsedSearchParams {
  const parsed = SearchParamsSchema.safeParse(searchParams);

  return {
    query: parsed.success ? parsed.data.q?.toLowerCase() || "" : "",
    page: parsed.success ? parsed.data.page || 1 : 1,
    limit: parsed.success ? parsed.data.limit || 5 : 5,
  };
}

export function filterProducts(products: Product[], query: string): Product[] {
  if (!query) return products;

  return products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );
}

export interface PaginatedData {
  paginatedItems: Product[];
  totalPages: number;
}

export function paginateData(
  items: Product[],
  page: number,
  limit: number
): PaginatedData {
  const totalPages = Math.ceil(items.length / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedItems = items.slice(startIndex, endIndex);

  return {
    paginatedItems,
    totalPages,
  };
}
