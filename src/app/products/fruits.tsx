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
  { title: "Pineapples", description: "Tropical delight, tangy and sweet.", image: "/images/pineapple.jpg", price: 22 },
  { title: "Papaya", description: "Soft and sweet, excellent for digestion.", image: "/images/papaya.jpg", price: 16 },
  { title: "Watermelon", description: "Refreshing and hydrating summer fruit.", image: "/images/watermelon.jpg", price: 12 },
  { title: "Pears", description: "Sweet and juicy, perfect for snacking.", image: "/images/pear.jpg", price: 14 },
  { title: "Cherries", description: "Small, sweet, and packed with antioxidants.", image: "/images/cherries.jpg", price: 25 },
  { title: "Kiwi", description: "Tangy, vitamin-rich, and full of flavor.", image: "/images/kiwi.jpg", price: 20 },
  { title: "Pomegranates", description: "Juicy seeds, loaded with antioxidants.", image: "/images/pomegranate.jpg", price: 18 },
  { title: "Dragon Fruit", description: "Exotic, mildly sweet, and visually stunning.", image: "/images/dragon-fruit.jpg", price: 30 },
  { title: "Lychee", description: "Sweet and aromatic, perfect for desserts and drinks.", image: "/images/lychee.jpg", price: 28 },
  { title: "Guava", description: "Rich in Vitamin C, slightly tangy and sweet.", image: "/images/guava.jpg", price: 18 },
   { title: "Apricots", description: "Sweet and soft, perfect for snacking or jams.", image: "/images/apricots.jpg", price: 22 },
  { title: "Plums", description: "Juicy and sweet with a slight tartness.", image: "/images/plums.jpg", price: 20 },
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
