"use client";

import Image from "next/image";
import Navbar from "../../pages/Navbar";
import Hero from "@/pages/Hero";
import Footer from "../../pages/Footer";
import AboutUs from "../../pages/AboutUs";
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

// ---------------- VegetablesPage Component ----------------
const vegetablesData: CartItem[] = [
  { title: "Fresh Tomatoes", description: "Juicy and ripe.", image: "/images/tomato.jpg", price: 12 },
  { title: "Organic Onions", description: "Pungent and flavorful.", image: "/images/onion.jpg", price: 10 },
  { title: "Green Spinach", description: "Leafy and rich in iron.", image: "/images/spinach.jpg", price: 8 },
  { title: "Carrots", description: "Crunchy and sweet.", image: "/images/carrot.jpg", price: 9 },
  { title: "Bell Peppers", description: "Colorful and crisp.", image: "/images/peppers.jpg", price: 11 },
  { title: "Cauliflower", description: "Fresh florets ideal for roasting.", image: "/images/cauliflower.jpg", price: 13 },
  { title: "Cabbage", description: "Leafy and perfect for salads or stir-fries.", image: "/images/cabbage.jpg", price: 10 },
  { title: "Cucumbers", description: "Cool and crisp, great for salads.", image: "/images/cucumber.jpg", price: 9 },
  { title: "Broccoli", description: "Rich in vitamins and perfect for steaming.", image: "/images/broccoli.jpg", price: 14 },
  { title: "Potatoes", description: "Versatile and starchy, perfect for many dishes.", image: "/images/potatoes.jpg", price: 11 },
  { title: "Eggplants", description: "Tender and flavorful for cooking.", image: "/images/eggplant.jpg", price: 13 },
  { title: "Zucchini", description: "Mild-flavored and great for roasting or grilling.", image: "/images/zucchini.jpg", price: 12 },
  { title: "Green Beans", description: "Fresh and crunchy, ideal for steaming or stir-fry.", image: "/images/green-beans.jpg", price: 10 },
  { title: "Pumpkin", description: "Sweet and rich, perfect for soups and pies.", image: "/images/pumpkin.jpg", price: 15 },
  { title: "Radishes", description: "Crisp and slightly spicy, perfect for salads.", image: "/images/radishes.jpg", price: 8 },
  { title: "Kale", description: "Dark leafy green, rich in nutrients.", image: "/images/kale.jpg", price: 16 },
  { title: "Bok Choy", description: "Tender and mild, ideal for stir-fries.", image: "/images/bok-choy.jpg", price: 14 },
  { title: "Asparagus", description: "Delicate flavor, perfect for grilling or steaming.", image: "/images/asparagus.jpg", price: 20 },
  { title: "Brussels Sprouts", description: "Nutritious mini cabbages, great roasted.", image: "/images/brussels-sprouts.jpg", price: 18 },
  { title: "Swiss Chard", description: "Leafy green with colorful stems, perfect for sautés.", image: "/images/swiss-chard.jpg", price: 17 },
  { title: "Sweet Corn", description: "Tender and naturally sweet, perfect for boiling or grilling.", image: "/images/sweet-corn.jpg", price: 15 },
];

export default function VegetablesPage() {
  const { addToCart } = useCart();
  const [selectedVeg, setSelectedVeg] = useState<CartItem | null>(null);

  return (
    <main className="min-h-screen bg-white font-sans scroll-smooth">
      <Navbar />
      <Hero />

      {/* Vegetable Collection Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-12 bg-green-50">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-green-900 tracking-wide">
          Our Vegetable Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vegetablesData.map((veg, index) => (
            <TiltCard key={index}>
              <div
                className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col h-full cursor-pointer"
                onClick={() => setSelectedVeg(veg)}
              >
                <div className="relative w-full h-56 sm:h-64 md:h-72">
                  <Image
                    src={veg.image}
                    alt={veg.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold">{veg.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-1 flex-1">{veg.description}</p>
                  <span className="block mt-2 text-green-700 font-bold text-lg sm:text-xl">${veg.price}</span>
                  <div className="mt-4 flex flex-col sm:flex-row gap-2 w-full">
                    <button
                      className="flex-1 bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-md transition transform hover:scale-105 text-sm sm:text-base"
                      onClick={(e) => { e.stopPropagation(); alert(`Buy Now clicked for ${veg.title}`); }}
                    >
                      Buy Now
                    </button>
                    <button
                      className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-white font-medium py-2 px-4 rounded-md transition transform hover:scale-105 text-sm sm:text-base"
                      onClick={(e) => { e.stopPropagation(); addToCart(veg); alert(`✅ ${veg.title} added to cart`); }}
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

      {/* Vegetable Popup Modal */}
      {selectedVeg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6 md:p-12">
          <div className="bg-white rounded-xl shadow-2xl max-w-md sm:max-w-lg w-full p-4 sm:p-6 md:p-8 relative transition-transform duration-500 scale-95">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
              onClick={() => setSelectedVeg(null)}
            >
              &times;
            </button>

            <div className="relative w-full h-48 sm:h-64 md:h-72 mb-4">
              <Image
                src={selectedVeg.image}
                alt={selectedVeg.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">{selectedVeg.title}</h3>
            <p className="text-gray-700 mb-3 text-sm sm:text-base">{selectedVeg.description}</p>
            <span className="block text-lg sm:text-xl text-green-700 font-semibold mb-4">${selectedVeg.price}</span>

            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <button
                className="flex-1 bg-green-600 hover:bg-green-500 text-white py-2 rounded-md"
                onClick={() => alert(`Buy Now clicked for ${selectedVeg.title}`)}
              >
                Buy Now
              </button>
              <button
                className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-white py-2 rounded-md"
                onClick={() => { addToCart(selectedVeg); alert(`✅ ${selectedVeg.title} added to cart`); }}
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
