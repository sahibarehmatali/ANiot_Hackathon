// app/components/RelatedProducts.tsx
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}