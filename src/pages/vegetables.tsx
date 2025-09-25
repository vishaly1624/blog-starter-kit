import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

const vegetablesData = [
  {
    title: "Fresh Tomatoes",
    description: "Juicy and ripe, perfect for salads and sauces.",
    image: "/images/tomato.jpg",
    price: "$12.00",
  },
  {
    title: "Organic Onions",
    description: "Pungent and flavorful, grown without chemicals.",
    image: "/images/onion.jpg",
    price: "$10.00",
  },
  {
    title: "Green Spinach",
    description: "Leafy and rich in iron, harvested daily.",
    image: "/images/spinach.jpg",
    price: "$8.00",
  },
  {
    title: "Carrots",
    description: "Crunchy and sweet, packed with beta-carotene.",
    image: "/images/carrot.jpg",
    price: "$9.00",
  },
  {
    title: "Bell Peppers",
    description: "Colorful and crisp, great for stir-fries.",
    image: "/images/peppers.jpg",
    price: "$11.00",
  },
  {
    title: "Cauliflower",
    description: "Fresh florets ideal for roasting or curries.",
    image: "/images/cauliflower.jpg",
    price: "$13.00",
  },
];

export default function VegetablesPage() {
  return (
    <main className="min-h-screen bg-white font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <section className="px-6 py-12 bg-green-50">
        <h2 className="text-2xl font-bold text-center mb-8 text-green-900 tracking-wide">
          Our Vegetable Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vegetablesData.map((veg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <img
                src={veg.image}
                alt={veg.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{veg.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{veg.description}</p>
                <span className="block mt-2 text-green-700 font-bold">{veg.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <AboutUs/>
      <Footer/>
    </main>
  );
}