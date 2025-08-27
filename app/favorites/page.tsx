"use client";

import React, { useEffect, useState } from "react";
import { Product, PRODUCTS } from "@/data/products";
import Cart from "@/components/Product/Cart";

export default function Page() {
  const [likedIds, setLikedIds] = useState<number[]>([]);
  const [likedProducts, setLikedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("IdsProduct");
    const parsed: number[] = stored ? JSON.parse(stored) : [];
    setLikedIds(parsed);
  }, []);

  useEffect(() => {
    const filtered = PRODUCTS.filter((p) => likedIds.includes(p.id));
    setLikedProducts(filtered);
  }, [likedIds]);

  return (
    <div className="p-4 flex flex-col gap-3">
      Favorites
      {likedProducts.map((product) => (
        <Cart product={product} key={product.id} />
      ))}
    </div>
  );
}
