"use client";

import Navbar from "../../pages/Navbar";
import Hero from "@/pages/Hero";
import AboutUs from "../../pages/AboutUs";
import Footer from "../../pages/Footer";
import { useCart, CartItem} from "../context/CartContext";

const fruitsData: CartItem[] = [
  { title: "Red Apples", description: "Crisp and sweet, packed with natural goodness.", image: "/images/apple.jpg", price: 15 },
  { title: "Bananas", description: "Rich in potassium, perfect for quick energy.", image: "/images/banana.jpg", price: 10 },
  { title: "Oranges", description: "Juicy and tangy, loaded with Vitamin C.", image: "/images/orange.jpg", price: 12 },
  { title: "Mangoes", description: "Sweet and tropical, the king of fruits.", image: "/images/mango.jpg", price: 20 },
  { title: "Grapes", description: "Fresh clusters, ideal for snacking or juices.", image: "/images/grapes.jpg", price: 14 },
  { title: "Strawberries", description: "Bright red and juicy, perfect for desserts.", image: "/images/strawberry.jpg", price: 18 },
];

export default function FruitsPage() {
  const { addToCart } = useCart(); // ✅ Safe because CartProvider wraps the app

  return (
    <main className="min-h-screen bg-white font-sans scroll-smooth">
      <Navbar />
      <Hero />

      {/* Fruit Collection Section */}
      <section className="px-6 py-12 bg-red-50">
        <h2 className="text-2xl font-bold text-center mb-8 text-red-900 tracking-wide">
          Our Fruit Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fruitsData.map((fruit: CartItem, index: number) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <img
                src={fruit.image}
                alt={fruit.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{fruit.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{fruit.description}</p>
                <span className="block mt-2 text-red-700 font-bold">${fruit.price}</span>

                {/* Action Buttons */}
                <div className="mt-4 flex flex-col sm:flex-row gap-2 w-full">
                  <button
                    className="flex-1 bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-md transition transform hover:scale-105 text-sm sm:text-base lg:text-lg"
                    onClick={() => alert(`💳 Buy Now clicked for ${fruit.title}`)}
                  >
                    Buy Now
                  </button>
                  <button
                    className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-white font-medium py-2 px-4 rounded-md transition transform hover:scale-105 text-sm sm:text-base lg:text-lg"
                    onClick={() => {
                      addToCart(fruit);
                      alert(`✅ ${fruit.title} added to cart`);
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
