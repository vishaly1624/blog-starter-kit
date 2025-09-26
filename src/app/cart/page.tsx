"use client";

import Link from "next/link";
import { useCart } from "@/app/context/CartContext"; // ✅ make sure this path is correct

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <h1 className="text-3xl font-bold text-green-800 mb-6">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-600">
          <p className="text-lg">Your cart is empty.</p>
          <Link
            href="/"
            className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-500"
          >
            Go Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
         {(cart as any[]).map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-green-50 p-4 rounded-md shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-green-700 font-bold">${item.price}</p>
                </div>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
