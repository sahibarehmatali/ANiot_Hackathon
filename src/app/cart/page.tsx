import Cart from "../components/Cart";

const cartItems = [
  {
    id: 1,
    name: "Thief Alarm Gadget",
    price: "5000 PKR",
    quantity: 2,
  },
  {
    id: 2,
    name: "Defense Watch with Knife Mode",
    price: "3000 PKR",
    quantity: 1,
  },
];

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <Cart cartItems={cartItems} />
    </div>
  );
}