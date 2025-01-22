import Wishlist from "../components/Wishlist";

const wishlistItems = [
  {
    id: 1,
    name: "Thief Alarm Gadget",
    price: "5000 PKR",
    image: "/images/thief-alarm.jpg",
  },
  {
    id: 2,
    name: "Defense Watch with Knife Mode",
    price: "3000 PKR",
    image: "/images/defense-watch.jpg",
  },
];

export default function WishlistPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
      <Wishlist wishlistItems={wishlistItems} />
    </div>
  );
}