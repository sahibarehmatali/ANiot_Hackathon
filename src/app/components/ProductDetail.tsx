// app/components/ProductDetail.tsx
import Image from "next/image"

import Button from "./Button";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <Image
        src={product.image}
        alt={product.name}
        className="rounded-lg"
        width={300} height={64}
      />
      <h1 className="text-3xl font-bold mt-6">{product.name}</h1>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-2xl font-semibold mt-4">{product.price}</p>
      <Button text="Proceed to checkout" className="mt-6 w-full" />
    </div>
  );
}