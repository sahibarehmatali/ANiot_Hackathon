import Link from "next/link";
import Button from "./Button";
import Image from "next/image"
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image
        src={product.image}
        alt={product.name}
        // className="w-full h-48 object-cover"
        width={300} height={45}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-700 mb-4">{product.price}</p>
        <Link href={`/products/${product.id}`}>
          <Button text="View Details" className="w-full" />
        </Link>
      </div>
    </div>
  );
}