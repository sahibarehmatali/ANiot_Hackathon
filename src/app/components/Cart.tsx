// app/components/Cart.tsx
interface CartItem {
    id: number;
    name: string;
    price: string;
    quantity: number;
  }
  
  interface CartProps {
    cartItems: CartItem[];
  }
  
  export default function Cart({ cartItems }: CartProps) {
    return (
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="border-b py-4">
            <p>{item.name}</p>
            <p>{item.quantity} x {item.price}</p>
          </div>
        ))}
      </div>
    );
  }