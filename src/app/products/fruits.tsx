"use client";

import Navbar from "../../pages/Navbar";
import Hero from "@/pages/Hero";
import AboutUs from "../../pages/AboutUs";
import Footer from "../../pages/Footer";
import { useCart, CartItem } from "../context/CartContext";
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

// ---------------- Fruits Data ----------------
const fruitsData: CartItem[] = [
  { 
    title: "Red Apples", 
    description: "Crisp and sweet, packed with natural goodness.", 
    image: "/images/apple.jpg", 
    price: 15,
    details: "Fresh red apples, crisp and naturally sweet. Rich in fiber, antioxidants, and vitamin C. Perfect for snacking, baking, making juices, or adding to salads." 
  },
  { 
    title: "Bananas", 
    description: "Rich in potassium, perfect for quick energy.", 
    image: "/images/banana.jpg", 
    price: 10,
    details: "Ripe bananas, high in potassium and natural sugars for quick energy. Ideal for smoothies, snacks, baking, or as a natural sweetener in recipes." 
  },
  { 
    title: "Oranges", 
    description: "Juicy and tangy, loaded with Vitamin C.", 
    image: "/images/orange.jpg", 
    price: 12,
    details: "Fresh, juicy oranges packed with vitamin C and antioxidants. Great for fresh juice, snacking, salads, or adding zest to desserts." 
  },
  { 
    title: "Mangoes", 
    description: "Sweet and tropical, the king of fruits.", 
    image: "/images/mango.jpg", 
    price: 20,
    details: "Ripe, sweet mangoes with tropical flavor and rich aroma. Ideal for eating fresh, making smoothies, desserts, jams, and traditional recipes." 
  },
  { 
    title: "Grapes", 
    description: "Fresh clusters, ideal for snacking or juices.", 
    image: "/images/grapes.jpg", 
    price: 14,
    details: "Juicy, sweet grapes perfect for snacking, desserts, and juices. Rich in vitamins, antioxidants, and natural sugars." 
  },
  { 
    title: "Strawberries", 
    description: "Bright red and juicy, perfect for desserts.", 
    image: "/images/strawberry.jpg", 
    price: 18,
    details: "Fresh strawberries, bright red and bursting with flavor. Ideal for desserts, smoothies, jams, or snacking. Rich in vitamin C and antioxidants." 
  },
  { 
    title: "Pineapples", 
    description: "Tropical delight, tangy and sweet.", 
    image: "/images/pineapple.jpg", 
    price: 22,
    details: "Juicy, tangy, and sweet pineapples. Excellent for snacking, smoothies, desserts, and tropical dishes. Contains bromelain, which aids digestion." 
  },
  { 
    title: "Papaya", 
    description: "Soft and sweet, excellent for digestion.", 
    image: "/images/papaya.jpg", 
    price: 16,
    details: "Ripe papaya, soft, sweet, and highly digestible. Rich in vitamin C, fiber, and digestive enzymes. Perfect for snacking, smoothies, and salads." 
  },
  { 
    title: "Watermelon", 
    description: "Refreshing and hydrating summer fruit.", 
    image: "/images/watermelon.jpg", 
    price: 12,
    details: "Hydrating and refreshing watermelon, naturally sweet and juicy. Ideal for summer snacks, juices, smoothies, and fruit salads." 
  },
  { 
    title: "Pears", 
    description: "Sweet and juicy, perfect for snacking.", 
    image: "/images/pear.jpg", 
    price: 14,
    details: "Fresh pears, naturally sweet and juicy. Great for snacking, desserts, baking, or adding to salads. Rich in fiber and antioxidants." 
  },
  { 
    title: "Cherries", 
    description: "Small, sweet, and packed with antioxidants.", 
    image: "/images/cherries.jpg", 
    price: 25,
    details: "Juicy cherries with a perfect balance of sweetness and tartness. Ideal for snacking, desserts, jams, or baking. Packed with antioxidants and vitamins." 
  },
  { 
    title: "Kiwi", 
    description: "Tangy, vitamin-rich, and full of flavor.", 
    image: "/images/kiwi.jpg", 
    price: 20,
    details: "Fresh kiwis with tangy and sweet flavor, high in vitamin C and fiber. Perfect for fruit salads, smoothies, or eating fresh." 
  },
  { 
    title: "Pomegranates", 
    description: "Juicy seeds, loaded with antioxidants.", 
    image: "/images/pomegranate.jpg", 
    price: 18,
    details: "Fresh pomegranates with juicy seeds, rich in antioxidants, vitamins, and minerals. Ideal for snacking, juices, desserts, or garnishing dishes." 
  },
  { 
    title: "Dragon Fruit", 
    description: "Exotic, mildly sweet, and visually stunning.", 
    image: "/images/dragon-fruit.jpg", 
    price: 30,
    details: "Exotic dragon fruit with a mildly sweet flavor and striking appearance. Great for smoothies, fruit bowls, salads, and garnishes. High in fiber and vitamin C." 
  },
  { 
    title: "Lychee", 
    description: "Sweet and aromatic, perfect for desserts and drinks.", 
    image: "/images/lychee.jpg", 
    price: 28,
    details: "Ripe lychees, sweet and fragrant. Perfect for snacking, desserts, cocktails, and smoothies. Rich in vitamin C and antioxidants." 
  },
  { 
    title: "Guava", 
    description: "Rich in Vitamin C, slightly tangy and sweet.", 
    image: "/images/guava.jpg", 
    price: 18,
    details: "Fresh guava, slightly tangy and naturally sweet. High in vitamin C, fiber, and antioxidants. Ideal for snacking, juices, and desserts." 
  },
  { 
    title: "Apricots", 
    description: "Sweet and soft, perfect for snacking or jams.", 
    image: "/images/apricots.jpg", 
    price: 22,
    details: "Fresh apricots, soft, juicy, and sweet. Perfect for snacking, jams, baking, or desserts. Rich in vitamins A and C." 
  },
  { 
    title: "Plums", 
    description: "Juicy and sweet with a slight tartness.", 
    image: "/images/plums.jpg", 
    price: 20,
    details: "Ripe plums with a balance of sweetness and mild tartness. Ideal for snacking, desserts, jams, and baking. Rich in vitamins and antioxidants." 
  },
];

// ---------------- FruitsPage Component ----------------
export default function FruitsPage() {
  const { addToCart } = useCart();
  const [selectedFruit, setSelectedFruit] = useState<CartItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter fruits based on search query
  const filteredFruits = fruitsData.filter((fruit) =>
    fruit.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white font-sans scroll-smooth">
      <Navbar />
      <Hero />

      {/* Search Bar */}
      <div className="flex justify-center mt-8 mb-6 px-4 sm:px-6 lg:px-12">
        <input
          type="text"
          placeholder="Search fruits..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        />
      </div>

      {/* Fruit Collection Section */}
      <section className="px-4 sm:px-6 lg:px-12 py-12 bg-red-50">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-red-900 tracking-wide">
          Our Fruit Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFruits.map((fruit, index) => (
            <TiltCard key={index}>
              <div
                className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col h-full cursor-pointer"
                onClick={() => setSelectedFruit(fruit)}
              >
                <img
                  src={fruit.image}
                  alt={fruit.title}
                  className="w-full h-56 sm:h-64 md:h-72 object-cover"
                />
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold">{fruit.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mt-1 flex-1">{fruit.description}</p>
                  <span className="block mt-2 text-red-700 font-bold text-lg sm:text-xl">${fruit.price}</span>
                  <div className="mt-4 flex flex-col sm:flex-row gap-2 w-full">
                    <button
                      className="flex-1 bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-md transition transform hover:scale-105 text-sm sm:text-base"
                      onClick={(e) => { e.stopPropagation(); alert(`💳 Buy Now clicked for ${fruit.title}`); }}
                    >
                      Buy Now
                    </button>
                    <button
                      className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-white font-medium py-2 px-4 rounded-md transition transform hover:scale-105 text-sm sm:text-base"
                      onClick={(e) => { e.stopPropagation(); addToCart(fruit); alert(`✅ ${fruit.title} added to cart`); }}
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

      {/* Fruit Popup Modal */}
      {selectedFruit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6 md:p-12">
          <div className="bg-white rounded-xl shadow-2xl max-w-md sm:max-w-lg w-full p-4 sm:p-6 md:p-8 relative transition-transform duration-500 scale-95">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
              onClick={() => setSelectedFruit(null)}
            >
              &times;
            </button>

            <img
              src={selectedFruit.image}
              alt={selectedFruit.title}
              className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">{selectedFruit.title}</h3>
            <p className="text-gray-700 mb-1 text-sm sm:text-base">{selectedFruit.details}</p>
            <span className="block text-lg sm:text-xl text-green-700 font-semibold mb-4">${selectedFruit.price}</span>

            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <button
                className="flex-1 bg-green-600 hover:bg-green-500 text-white py-2 rounded-md"
                onClick={() => alert(`💳 Buy Now clicked for ${selectedFruit.title}`)}
              >
                Buy Now
              </button>
              <button
                className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-white py-2 rounded-md"
                onClick={() => { addToCart(selectedFruit); alert(`✅ ${selectedFruit.title} added to cart`); }}
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
