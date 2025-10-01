"use client";

import { useState } from "react";

interface Product {
  id: number;
  category: keyof typeof productOptions;
  name: string;
  price: number;
  stock: number; // in kg
}

// Expanded product options
const productOptions = {
  Crops: ["Wheat", "Rice", "Maize", "Barley", "Oats", "Sorghum", "Millet", "Rye"],
  Vegetables: ["Tomato", "Onion", "Spinach", "Carrot", "Cabbage", "Cauliflower", "Potato", "Bell Pepper", "Lettuce"],
  Fruits: ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple", "Strawberry", "Papaya", "Watermelon", "Blueberry"],
};

export default function SellerDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState({
    category: "Crops" as keyof typeof productOptions,
    name: productOptions["Crops"][0],
    price: "",
    stock: "",
  });

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value as keyof typeof productOptions;
    setFormData({
      ...formData,
      category,
      name: productOptions[category][0], // default first product
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const { category, name, price, stock } = formData;

    if (!name || !price || !stock) {
      alert("Please fill all fields");
      return;
    }

    const newProduct: Product = {
      id: products.length + 1,
      category,
      name,
      price: parseFloat(price),
      stock: parseFloat(stock),
    };

    setProducts([...products, newProduct]);
    setFormData({
      category,
      name: productOptions[category][0],
      price: "",
      stock: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white shadow-md flex flex-col md:h-screen">
        <div className="p-6 text-2xl font-bold text-green-700 border-b">Seller Panel</div>
        <nav className="flex-1 p-4 space-y-2">
          <button className="block px-4 py-2 rounded-md hover:bg-green-100 w-full text-left">
            Dashboard
          </button>
          <button className="block px-4 py-2 rounded-md hover:bg-green-100 w-full text-left">
            Add Product
          </button>
          <button className="block px-4 py-2 rounded-md hover:bg-green-100 w-full text-left">
            My Products
          </button>
          <button className="block px-4 py-2 rounded-md hover:bg-green-100 w-full text-left">
            Orders
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 md:p-8 overflow-x-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, Seller!</h1>

        {/* Add Product Form */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-8 w-full overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" onSubmit={handleAddProduct}>
            {/* Category Dropdown */}
            <select
              name="category"
              value={formData.category}
              onChange={handleCategoryChange}
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            >
              {Object.keys(productOptions).map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Product Name Dropdown */}
            <select
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            >
              {productOptions[formData.category].map((prod) => (
                <option key={prod} value={prod}>
                  {prod}
                </option>
              ))}
            </select>

            {/* Price Input */}
            <input
              type="number"
              name="price"
              placeholder="Price ($)"
              value={formData.price}
              onChange={handleChange}
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
            />

            {/* Stock Input with kg */}
            <div className="relative">
              <input
                type="number"
                name="stock"
                placeholder="Stock"
                value={formData.stock}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-12"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">kg</span>
            </div>

            <button
              type="submit"
              className="sm:col-span-2 md:col-span-4 bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-md transition"
            >
              Add Product
            </button>
          </form>
        </div>

        {/* My Products Table */}
        <div className="bg-white shadow-md rounded-xl p-6 overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-4">My Products</h2>
          {products.length === 0 ? (
            <p className="text-gray-600">No products added yet.</p>
          ) : (
            <table className="w-full table-auto border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-green-100">
                  <th className="border px-4 py-2 text-left">ID</th>
                  <th className="border px-4 py-2 text-left">Category</th>
                  <th className="border px-4 py-2 text-left">Name</th>
                  <th className="border px-4 py-2 text-left">Price ($)</th>
                  <th className="border px-4 py-2 text-left">Stock</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-green-50">
                    <td className="border px-4 py-2">{product.id}</td>
                    <td className="border px-4 py-2">{product.category}</td>
                    <td className="border px-4 py-2">{product.name}</td>
                    <td className="border px-4 py-2">{product.price.toFixed(2)}</td>
                    <td className="border px-4 py-2">{product.stock} kg</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}
