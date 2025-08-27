"use client";

import React, { useEffect, useState } from "react";
import { Product, PRODUCTS } from "@/data/products";
import Cart from "@/components/Product/Cart";
import { useLike } from "@/context/LikeContext";

export default function Page() {
  const [likedProducts, setLikedProducts] = useState<Product[]>([]);
  const { liked } = useLike();

  useEffect(() => {
    const filtered = PRODUCTS.filter((p) => liked.includes(p.id.toString()));
    setLikedProducts(filtered);
  }, [liked]);

  return (
    <div className="p-4 flex flex-col gap-3">
      <header className="flex w-full justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">Favorites</h2>
      </header>
      {likedProducts.map((product) => (
        <Cart product={product} key={product.id} />
      ))}
    </div>
  );
}
