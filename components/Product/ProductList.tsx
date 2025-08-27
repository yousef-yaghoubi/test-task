"use client";

import { useMemo, useState } from "react";
import { Product } from "@/data/products";
import Cart from "@/components/Product/Cart";
import SearchBox from "@/components/SearchBox/SearchBox";

export default function ProductList({
  products,
  query,
}: {
  products: Product[];
  query: string;
}) {
  const [sortBy, setSortBy] = useState<"title" | "price">("title");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const filteredAndSorted = useMemo(() => {
    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );

    filtered.sort((a, b) => {
      if (sortBy === "title") {
        return sortDir === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else {
        return sortDir === "asc" ? a.price - b.price : b.price - a.price;
      }
    });

    return filtered;
  }, [products, query, sortBy, sortDir]);

  return (
    <div className="p-4 flex flex-col gap-3">
      {/* سرچ باکس */}
      <SearchBox />

      {/* کنترل سورت */}
      <div className="flex gap-2 my-2">
        <button onClick={() => setSortBy("title")} className="cursor-pointer">
          Sort by Title
        </button>
        <button onClick={() => setSortBy("price")} className="cursor-pointer">
          Sort by Price
        </button>
        <button
          onClick={() => setSortDir(sortDir === "asc" ? "desc" : "asc")}
          className="cursor-pointer"
        >
          Toggle Dir
        </button>
      </div>

      {/* لیست محصولات */}
      {filteredAndSorted.map((product: Product) => (
        <Cart key={product.id} product={product} />
      ))}
    </div>
  );
}
