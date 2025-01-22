// app/components/CheckoutFlow.tsx
export default function CheckoutFlow() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Shipping Address</h2>
            {/* Add address form here */}
          </div>
          <div>
            <h2 className="text-xl font-semibold">Payment</h2>
            {/* Add payment form here */}
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Place Order
          </button>
        </div>
      </div>
    );
  }