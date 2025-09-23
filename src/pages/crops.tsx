import Navbar from "./Navbar";
import Hero from "./Hero";

const cropsData = [
  {
    title: "Organic Wheat",
    description: "Rich in nutrients and grown without chemicals.",
    image: "/images/wheat.jpg",
    price: "$30.00",
  },
  {
    title: "Basmati Rice",
    description: "Aromatic long-grain rice from northern farms.",
    image: "/images/rice.jpg",
    price: "$25.00",
  },
  {
    title: "Maize",
    description: "Golden corn perfect for flour and feed.",
    image: "/images/maize.jpg",
    price: "$18.00",
  },
  {
    title: "Barley",
    description: "Ideal for brewing and health foods.",
    image: "/images/barley.jpg",
    price: "$22.00",
  },
];

export default function CropsPage() {
  return (
    <main className="min-h-screen bg-white font-sans scroll-smooth">
      <Navbar />
      <Hero />

      <section className="px-6 py-12 bg-green-50">
        <h2 className="text-2xl font-bold text-center mb-8 text-green-900 tracking-wide">
          Our Crops Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cropsData.map((crop, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <img
                src={crop.image}
                alt={crop.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{crop.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{crop.description}</p>
                <span className="block mt-2 text-green-700 font-bold">{crop.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}