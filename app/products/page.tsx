// app/products/page.tsx
import Pagination from "@/components/Pagination/Pagination";
import ProductList from "@/components/Product/ProductList";
import { PRODUCTS } from "@/data/products";
import {
  filterProducts,
  paginateData,
  parseSearchParams,
} from "@/lib/products-utils";

interface PageProps {
  searchParams?: {
    q?: string;
    page?: string;
    limit?: string;
  };
}

export default async function ProductsPage({ searchParams }: PageProps) {
  const { query, page, limit } = parseSearchParams((await searchParams) || {});

  const filteredProducts = filterProducts(PRODUCTS, query);
  const { paginatedItems, totalPages } = paginateData(
    filteredProducts,
    page,
    limit
  );

  return (
    <div className="p-4">
      <header className="flex w-full justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">Products</h2>
      </header>

      <ProductList products={paginatedItems} query={query} />

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        limit={limit}
        query={query}
      />
    </div>
  );
}
