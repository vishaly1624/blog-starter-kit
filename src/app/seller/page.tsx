"use client";

import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export default function SellerDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [formData, setFormData] = useState({ name: "", price: "", stock: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, price, stock } = formData;

    if (!name || !price || !stock) {
      alert("Please fill all fields");
      return;
    }

    const newProduct: Product = {
      id: products.length + 1,
      name,
      price: parseFloat(price),
      stock: parseInt(stock),
    };

    setProducts([...products, newProduct]);
    setFormData({ name: "", price: "", stock: "" });
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
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
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, Seller!</h1>

        {/* Add Product Form */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
          <form className="grid grid-cols-1 sm:grid-cols-3 gap-4" onSubmit={handleAddProduct}>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleChange}
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="number"
              name="price"
              placeholder="Price ($)"
              value={formData.price}
              onChange={handleChange}
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={formData.stock}
              onChange={handleChange}
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="sm:col-span-3 bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-md transition"
            >
              Add Product
            </button>
          </form>
        </div>

        {/* My Products Table */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">My Products</h2>
          {products.length === 0 ? (
            <p className="text-gray-600">No products added yet.</p>
          ) : (
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-green-100">
                  <th className="border px-4 py-2 text-left">ID</th>
                  <th className="border px-4 py-2 text-left">Name</th>
                  <th className="border px-4 py-2 text-left">Price ($)</th>
                  <th className="border px-4 py-2 text-left">Stock</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-green-50">
                    <td className="border px-4 py-2">{product.id}</td>
                    <td className="border px-4 py-2">{product.name}</td>
                    <td className="border px-4 py-2">{product.price.toFixed(2)}</td>
                    <td className="border px-4 py-2">{product.stock}</td>
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
