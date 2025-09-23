import Navbar from "./Navbar";
import Hero from "./Hero";

const fruitsData = [
  {
    title: "Red Apples",
    description: "Crisp and sweet, packed with natural goodness.",
    image: "/images/apple.jpg",
    price: "$15.00",
  },
  {
    title: "Bananas",
    description: "Rich in potassium, perfect for quick energy.",
    image: "/images/banana.jpg",
    price: "$10.00",
  },
  {
    title: "Oranges",
    description: "Juicy and tangy, loaded with Vitamin C.",
    image: "/images/orange.jpg",
    price: "$12.00",
  },
  {
    title: "Mangoes",
    description: "Sweet and tropical, the king of fruits.",
    image: "/images/mango.jpg",
    price: "$20.00",
  },
  {
    title: "Grapes",
    description: "Fresh clusters, ideal for snacking or juices.",
    image: "/images/grapes.jpg",
    price: "$14.00",
  },
  {
    title: "Strawberries",
    description: "Bright red and juicy, perfect for desserts.",
    image: "/images/strawberry.jpg",
    price: "$18.00",
  },
];

export default function FruitsPage() {
  return (
    <main className="min-h-screen bg-white font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <section className="px-6 py-12 bg-red-50">
        <h2 className="text-2xl font-bold text-center mb-8 text-red-900 tracking-wide">
          Our Fruit Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fruitsData.map((fruit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <img
                src={fruit.image}
                alt={fruit.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{fruit.title}</h3>
                <p className="text-sm text-gray-600 mt-1">
                  {fruit.description}
                </p>
                <span className="block mt-2 text-red-700 font-bold">
                  {fruit.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
