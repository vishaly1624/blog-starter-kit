"use client";

import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import { useCart, CartItem } from "@/app/context/CartContext";

const cropsData: CartItem[] = [
  { title: "Organic Wheat", description: "Rich in nutrients", image: "/images/wheat.jpg", price: 30 },
  { title: "Basmati Rice", description: "Aromatic long-grain rice", image: "/images/rice.jpg", price: 25 },
  { title: "Maize", description: "Golden corn", image: "/images/maize.jpg", price: 18 },
  { title: "Barley", description: "Ideal for brewing", image: "/images/barley.jpg", price: 22 },
];

export default function CropsPage() {
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-white font-sans scroll-smooth">
      <Navbar />
      <Hero />

      <section className="px-6 py-12 bg-green-50">
        <h2 className="text-2xl font-bold text-center mb-8 text-green-900 tracking-wide">
          Our Crops Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cropsData.map((crop, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <img src={crop.image} alt={crop.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{crop.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{crop.description}</p>
                <span className="block mt-2 text-green-700 font-bold">${crop.price}</span>

                <div className="mt-4 flex flex-col sm:flex-row gap-2">
                  <button
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md"
                    onClick={() => alert("Buy Now clicked")}
                  >
                    Buy Now
                  </button>
                  <button
                    className="flex-1 bg-yellow-500 text-white py-2 px-4 rounded-md"
                    onClick={() => {
                      addToCart(crop);
                      alert(`✅ ${crop.title} added to cart`);
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
