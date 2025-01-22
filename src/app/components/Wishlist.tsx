// app/components/Wishlist.tsx
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface WishlistProps {
  wishlistItems: Product[];
}

export default function Wishlist({ wishlistItems }: WishlistProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {wishlistItems.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}