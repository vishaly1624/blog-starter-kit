"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import { useCart, CartItem } from "@/app/context/CartContext";

const vegetablesData: CartItem[] = [
  { title: "Fresh Tomatoes", description: "Juicy and ripe.", image: "/images/tomato.jpg", price: 12 },
  { title: "Organic Onions", description: "Pungent and flavorful.", image: "/images/onion.jpg", price: 10 },
  { title: "Green Spinach", description: "Leafy and rich in iron.", image: "/images/spinach.jpg", price: 8 },
  { title: "Carrots", description: "Crunchy and sweet.", image: "/images/carrot.jpg", price: 9 },
  { title: "Bell Peppers", description: "Colorful and crisp.", image: "/images/peppers.jpg", price: 11 },
  { title: "Cauliflower", description: "Fresh florets ideal for roasting.", image: "/images/cauliflower.jpg", price: 13 },
];

export default function VegetablesPage() {
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-white font-sans scroll-smooth">
      <Navbar />
      <Hero />

      <section className="px-6 py-12 bg-green-50">
        <h2 className="text-2xl font-bold text-center mb-8 text-green-900 tracking-wide">
          Our Vegetable Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vegetablesData.map((veg: CartItem, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative w-full h-64">
                <Image
                  src={veg.image}
                  alt={veg.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{veg.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{veg.description}</p>
                <span className="block mt-2 text-green-700 font-bold">${veg.price}</span>
                <div className="mt-4 flex flex-col sm:flex-row gap-2 w-full">
                  <button
                    className="flex-1 bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-md transition transform hover:scale-105"
                    onClick={() => alert("Buy Now clicked")}
                  >
                    Buy Now
                  </button>
                  <button
                    className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-white font-medium py-2 px-4 rounded-md transition transform hover:scale-105"
                    onClick={() => {
                      addToCart(veg);
                      alert(`✅ ${veg.title} added to cart`);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AboutUs />
      <Footer />
    </main>
  );
}
