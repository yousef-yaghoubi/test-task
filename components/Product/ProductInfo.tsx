import { Product } from "@/data/products";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="flex-1">
      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
        <span className="font-medium">
          <span className="text-gray-600">Name:</span> {product.name}
        </span>
        <span className="font-semibold text-green-600">
          <span className="text-gray-600">Price:</span> ${product.price}
        </span>
      </div>
      <div className="text-sm text-gray-600">
        <span className="font-medium">Category:</span> {product.category}
      </div>
    </div>
  );
}
