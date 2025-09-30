"use client";

import Navbar from "@/pages/Navbar";
import Hero from "@/pages/Hero";
import Link from "next/link";
import AboutUs from "@/pages/AboutUs";
import Footer from "@/pages/Footer";
import { useCart, CartItem } from "@/app/context/CartContext";
import { useState } from "react";

// ---------------- TiltCard Component ----------------
function TiltCard({ children }: { children: React.ReactNode }) {
  const [style, setStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
    boxShadow: "0 0 20px rgba(0,0,0,0.05)",
    transition: "transform 0.5s ease, box-shadow 0.5s ease",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 7;
    const rotateY = ((x - centerX) / centerX) * 7;

    setStyle({
      transform: `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`,
      boxShadow: `${-(rotateY * 2)}px ${rotateX * 2}px 25px rgba(0,0,0,0.15)`,
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
      boxShadow: "0 0 20px rgba(0,0,0,0.05)",
      transition: "transform 0.5s ease, box-shadow 0.5s ease",
    });
  };

  return (
    <div
      className="rounded-lg w-full"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

// ---------------- HomePage Component ----------------
export default function HomePage() {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<CartItem | null>(null);

  const products: CartItem[] = [
    { title: "Organic Wheat", price: 30, image: "/images/wheat.jpg", description: "High-quality grains from farms." },
    { title: "Fresh Tomatoes", price: 12, image: "/images/tomato.jpg", description: "Juicy and ripe tomatoes." },
    { title: "Seasonal Fruits", price: 20, image: "/images/fruits.png", description: "Fresh seasonal fruits." },
    { title: "Rice", price: 12, image: "/images/rice.jpg", description: "Premium rice grains." },
    { title: "Fresh Onions", price: 12, image: "/images/onion.jpg", description: "Organic onions from farms." },
    { title: "Fresh Vegetables", price: 12, image: "/images/veg.jpg", description: "Mixed farm-fresh vegetables." },
    { title: "Bell Peppers", description: "Colorful and crisp.", image: "/images/peppers.jpg", price: 11 },
    { title: "Cauliflower", description: "Fresh florets ideal for roasting.", image: "/images/cauliflower.jpg", price: 13 },
    { title: "Grapes", description: "Fresh clusters, ideal for snacking or juices.", image: "/images/grapes.jpg", price: 14 },
    { title: "Strawberries", description: "Bright red and juicy, perfect for desserts.", image: "/images/strawberry.jpg", price: 18 },
    { title: "Basmati Rice", description: "Aromatic long-grain rice", image: "/images/rice.jpg", price: 25 },
    { title: "Mangoes", description: "Sweet and tropical, the king of fruits.", image: "/images/mango.jpg", price: 20 },
  ];

  return (
    <main className="min-h-screen bg-white font-sans scroll-smooth">
      <Navbar />
      <Hero />

      {/* Category Grid Section */}
      <section id="products" className="px-4 sm:px-6 lg:px-12 py-12 bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { href: "/crops-options", img: "/images/cr.jpg", title: "Crops", desc: "High-quality grains and cereals directly from farms." },
            { href: "/vegitable-options", img: "/images/veg.jpg", title: "Vegetables", desc: "High-quality vegetables directly from farms." },
            { href: "/fruits-options", img: "/images/fr.jpg", title: "Fruits", desc: "High-quality fruits directly from farms." },
          ].map((cat, idx) => (
            <Link key={idx} href={cat.href}>
              <div className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-green-900/40 flex flex-col justify-end p-4 text-white">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1">{cat.title}</h3>
                  <p className="text-sm sm:text-base leading-snug">{cat.desc}</p>
                  <span className="mt-2 text-xs sm:text-sm font-medium">50 PRODUCTS</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="px-4 sm:px-6 lg:px-12 py-12 bg-green-50">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-green-900 tracking-wide">Farm Fresh Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <TiltCard key={index}>
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden cursor-pointer flex flex-col h-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover"
                  onClick={() => setSelectedProduct(product)}
                />
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold">{product.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-1 flex-1">{product.description}</p>
                  <span className="block mt-2 text-green-700 font-bold text-lg sm:text-xl">${product.price}</span>
                  <div className="mt-4 flex flex-col sm:flex-row gap-2 w-full">
                    <button
                      className="flex-1 bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-md transition transform hover:scale-105 text-sm sm:text-base"
                      onClick={() => alert("Buy Now clicked")}
                    >
                      Buy Now
                    </button>
                    <button
                      className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-white font-medium py-2 px-4 rounded-md transition transform hover:scale-105 text-sm sm:text-base"
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
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Product Popup Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6 md:p-12">
          <div className="bg-white rounded-xl shadow-2xl max-w-md sm:max-w-lg w-full p-4 sm:p-6 md:p-8 relative transition-transform duration-500 scale-95">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">{selectedProduct.title}</h3>
            <p className="text-gray-700 mb-3 text-sm sm:text-base">{selectedProduct.description}</p>
            <span className="block text-lg sm:text-xl text-green-700 font-semibold mb-4">${selectedProduct.price}</span>
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <button
                className="flex-1 bg-green-600 hover:bg-green-500 text-white py-2 rounded-md"
                onClick={() => alert("Buy Now clicked")}
              >
                Buy Now
              </button>
              <button
                className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-white py-2 rounded-md"
                onClick={() => {
                  addToCart(selectedProduct);
                  alert(`✅ ${selectedProduct.title} added to cart`);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      <AboutUs />
      <Footer />
    </main>
  );
}
