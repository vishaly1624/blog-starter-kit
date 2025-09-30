"use client";

import Navbar from "../../pages/Navbar";
import Hero from "@/pages/Hero";
import AboutUs from "../../pages/AboutUs";
import Footer from "../../pages/Footer";
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

// ---------------- CropsPage Component ----------------
const cropsData: CartItem[] = [
  { title: "Organic Wheat", description: "Rich in nutrients", image: "/images/wheat.jpg", price: 30 },
  { title: "Basmati Rice", description: "Aromatic long-grain rice", image: "/images/rice.jpg", price: 25 },
  { title: "Maize", description: "Golden corn", image: "/images/maize.jpg", price: 18 },
  { title: "Barley", description: "Ideal for brewing", image: "/images/barley.jpg", price: 22 },
  { title: "Sorghum", description: "Drought-resistant cereal grain", image: "/images/Sorghum.jpg", price: 20 },
  { title: "Millet", description: "Nutritious small-seed grain", image: "/images/millet.jpg", price: 15 },
  { title: "Oats", description: "Perfect for breakfast and baking", image: "/images/oats.jpg", price: 28 },
  { title: "Rye", description: "Used for bread and whiskey", image: "/images/rye.jpg", price: 24 },
  { title: "Chickpeas", description: "High-protein legume", image: "/images/chickpeas.jpg", price: 35 },
  { title: "Lentils", description: "Rich in protein and fiber", image: "/images/lentils.jpg", price: 32 },
  { title: "Soybeans", description: "Great source of plant protein", image: "/images/soybeans.jpg", price: 40 },
  { title: "Green Gram", description: "Nutritious mung beans, perfect for soups and sprouts", image: "/images/green-gram.jpg", price: 36 },
];

export default function CropsPage() {
  const { addToCart } = useCart();
  const [selectedCrop, setSelectedCrop] = useState<CartItem | null>(null);

  return (
    <main className="min-h-screen bg-white font-sans scroll-smooth">
      <Navbar />
      <Hero />

      <section className="px-4 sm:px-6 lg:px-12 py-12 bg-green-50">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-green-900 tracking-wide">
          Our Crops Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cropsData.map((crop, index) => (
            <TiltCard key={index}>
              <div
                className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col h-full cursor-pointer"
                onClick={() => setSelectedCrop(crop)}
              >
                <img
                  src={crop.image}
                  alt={crop.title}
                  className="w-full h-56 sm:h-64 md:h-72 object-cover"
                />
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold">{crop.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-1 flex-1">{crop.description}</p>
                  <span className="block mt-2 text-green-700 font-bold text-lg sm:text-xl">${crop.price}</span>
                  <div className="mt-4 flex flex-col sm:flex-row gap-2 w-full">
                    <button
                      className="flex-1 bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-md transition transform hover:scale-105 text-sm sm:text-base"
                      onClick={(e) => { e.stopPropagation(); alert("Buy Now clicked"); }}
                    >
                      Buy Now
                    </button>
                    <button
                      className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-white font-medium py-2 px-4 rounded-md transition transform hover:scale-105 text-sm sm:text-base"
                      onClick={(e) => { e.stopPropagation(); addToCart(crop); alert(`✅ ${crop.title} added to cart`); }}
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

      {/* Crop Popup Modal */}
      {selectedCrop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6 md:p-12">
          <div className="bg-white rounded-xl shadow-2xl max-w-md sm:max-w-lg w-full p-4 sm:p-6 md:p-8 relative transition-transform duration-500 scale-95">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
              onClick={() => setSelectedCrop(null)}
            >
              &times;
            </button>

            <img
              src={selectedCrop.image}
              alt={selectedCrop.title}
              className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">{selectedCrop.title}</h3>
            <p className="text-gray-700 mb-3 text-sm sm:text-base">{selectedCrop.description}</p>
            <span className="block text-lg sm:text-xl text-green-700 font-semibold mb-4">${selectedCrop.price}</span>

            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <button
                className="flex-1 bg-green-600 hover:bg-green-500 text-white py-2 rounded-md"
                onClick={() => alert("Buy Now clicked")}
              >
                Buy Now
              </button>
              <button
                className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-white py-2 rounded-md"
                onClick={() => { addToCart(selectedCrop); alert(`✅ ${selectedCrop.title} added to cart`); }}
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
