import Navbar from "@/pages/Navbar";
import Hero from "@/pages/Hero";
import Link from "next/link";
import Footer from "./Footer";
import AboutUs from "./AboutUs";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-white font-sans scroll-smooth">
            <Navbar />
            <Hero />
            {/* 🥦 Category Grid Section */}
            <section id="products" className="px-6 py-12 bg-white">
                {/* Section Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Products</h2>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* 🌾 Crops */}
                    <Link href="/crops-options">
                        <div className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
                            <img
                                src="/images/cr.jpg"
                                alt="Crops"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-green-900/40 flex flex-col justify-end p-4 text-white">
                                <h3 className="text-lg font-semibold mb-2">Crops</h3>
                                <p className="text-sm leading-snug">
                                    High-quality grains and cereals directly from farms.
                                </p>
                                <span className="mt-2 text-xs font-medium">50 PRODUCTS</span>
                            </div>
                        </div>
                    </Link>

                    {/* 🍅 Vegetables */}
                    <Link href="/vegitable-options">
                        <div className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
                            <img
                                src="/images/veg.jpg"
                                alt="Vegetables"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-green-900/40 flex flex-col justify-end p-4 text-white">
                                <h3 className="text-lg font-semibold mb-2">Vegetables</h3>
                                <p className="text-sm leading-snug">
                                    High-quality vegetables directly from farms.
                                </p>
                                <span className="mt-2 text-xs font-medium">50 PRODUCTS</span>
                            </div>
                        </div>
                    </Link>

                    {/* 🍎 Fruits */}
                    <Link href="/fruits-options">
                        <div className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
                            <img
                                src="/images/fr.jpg"
                                alt="Fruits"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-green-900/40 flex flex-col justify-end p-4 text-white">
                                <h3 className="text-lg font-semibold mb-2">Fruits</h3>
                                <p className="text-sm leading-snug">
                                    High-quality fruits directly from farms.
                                </p>
                                <span className="mt-2 text-xs font-medium">50 PRODUCTS</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* 🔥 Featured Products Section */}
            <section id="products" className="px-6 py-12 bg-green-50">
                <h2 className="text-2xl font-bold text-center mb-8 text-green-900 tracking-wide">
                    Farm Fresh Now
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Product 1 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                        <img
                            src="/images/wheat.jpg"
                            alt="Organic Wheat"
                            className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">Organic Wheat</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Healthy and chemical-free wheat.
                            </p>
                            <span className="block mt-2 text-green-700 font-bold">$30.00</span>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                        <img
                            src="/images/tomato.jpg"
                            alt="Fresh Tomatoes"
                            className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">Fresh Tomatoes</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Juicy and farm-fresh tomatoes.
                            </p>
                            <span className="block mt-2 text-green-700 font-bold">$12.00</span>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                        <img
                            src="/images/fr.jpg"
                            alt="Seasonal Fruits"
                            className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">Seasonal Fruits</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Fresh fruits harvested daily from local farms.
                            </p>
                            <span className="block mt-2 text-green-700 font-bold">$20.00</span>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                        <img
                            src="/images/rice.jpg"
                            alt="Fresh Rice"
                            className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">Rice</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Juicy and farm-fresh Rice.
                            </p>
                            <span className="block mt-2 text-green-700 font-bold">$12.00</span>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                        <img
                            src="/images/onion.jpg"
                            alt="Fresh Onion"
                            className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">Fresh Onions</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Juicy and farm-fresh onions.
                            </p>
                            <span className="block mt-2 text-green-700 font-bold">$12.00</span>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                        <img
                            src="/images/veg.jpg"
                            alt="Fresh Vegitables"
                            className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">Fresh Vegitables</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Juicy and farm-fresh Vegitables.
                            </p>
                            <span className="block mt-2 text-green-700 font-bold">$12.00</span>
                        </div>
                    </div>
                </div>
            </section>
            <AboutUs/>
            <Footer/>
        </main>
    );
}