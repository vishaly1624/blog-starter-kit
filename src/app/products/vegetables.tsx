"use client";

import Image from "next/image";
import Navbar from "../../pages/Navbar";
import Hero from "@/pages/Hero";
import Footer from "../../pages/Footer";
import AboutUs from "../../pages/AboutUs";
import { useCart, CartItem } from "@/app/context/CartContext";

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
