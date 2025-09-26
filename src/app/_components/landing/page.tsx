"use client";

import Navbar from "@/pages/Navbar";
import Hero from "@/app/products/Hero";
import Link from "next/link";
import AboutUs from "@/pages/AboutUs";
import Footer from "@/pages/Footer";
import { useCart, CartItem} from "@/app/context/CartContext"

export default function HomePage() {
  const { addToCart } = useCart();

  const products: CartItem[] = [
    { title: "Organic Wheat", price: 30, image: "/images/wheat.jpg", description: "High-quality grains from farms." },
    { title: "Fresh Tomatoes", price: 12, image: "/images/tomato.jpg", description: "Juicy and ripe tomatoes." },
    { title: "Seasonal Fruits", price: 20, image: "/images/fr.jpg", description: "Fresh seasonal fruits." },
    { title: "Rice", price: 12, image: "/images/rice.jpg", description: "Premium rice grains." },
    { title: "Fresh Onions", price: 12, image: "/images/onion.jpg", description: "Organic onions from farms." },
    { title: "Fresh Vegetables", price: 12, image: "/images/veg.jpg", description: "Mixed farm-fresh vegetables." },
  ];

  return (
    <main className="min-h-screen bg-white font-sans scroll-smooth">
      <Navbar />
      <Hero />

      {/* Category Grid Section */}
      <section id="products" className="px-6 py-12 bg-white">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/crops-options">
            <div className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
              <img
                src="/images/cr.jpg"
                alt="Crops"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-green-900/40 flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-semibold mb-2">Crops</h3>
                <p className="text-sm leading-snug">High-quality grains and cereals directly from farms.</p>
                <span className="mt-2 text-xs font-medium">50 PRODUCTS</span>
              </div>
            </div>
          </Link>

          <Link href="/vegitable-options">
            <div className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
              <img
                src="/images/veg.jpg"
                alt="Vegetables"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-green-900/40 flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-semibold mb-2">Vegetables</h3>
                <p className="text-sm leading-snug">High-quality vegetables directly from farms.</p>
                <span className="mt-2 text-xs font-medium">50 PRODUCTS</span>
              </div>
            </div>
          </Link>

          <Link href="/fruits-options">
            <div className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
              <img
                src="/images/fr.jpg"
                alt="Fruits"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-green-900/40 flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-semibold mb-2">Fruits</h3>
                <p className="text-sm leading-snug">High-quality fruits directly from farms.</p>
                <span className="mt-2 text-xs font-medium">50 PRODUCTS</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="px-6 py-12 bg-green-50">
        <h2 className="text-2xl font-bold text-center mb-8 text-green-900 tracking-wide">Farm Fresh Now</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                <span className="block mt-2 text-green-700 font-bold">${product.price}</span>

                {/* Buttons */}
                <div className="mt-4 flex flex-col sm:flex-row gap-2 w-full">
                  <button
                    className="flex-1 bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-md transition transform hover:scale-105 text-sm sm:text-base lg:text-lg"
                    onClick={() => alert("Buy Now clicked")}
                  >
                    Buy Now
                  </button>
                  <button
                    className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-white font-medium py-2 px-4 rounded-md transition transform hover:scale-105 text-sm sm:text-base lg:text-lg"
                    onClick={() => {
                      addToCart(product);
                      alert(`✅ ${product.title} added to cart`);
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
