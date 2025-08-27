"use client";
import { Product } from "@/data/products";
import ProductInfo from "./ProductInfo";
import LikeButton from "./LikeButton";

interface ProductCardProps {
  product: Product;
}
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex justify-between items-start gap-4 bg-orange-100 p-4 rounded-md shadow-sm">
      <ProductInfo product={product} />
      <LikeButton id={product.id} />
    </article>
  );
}
