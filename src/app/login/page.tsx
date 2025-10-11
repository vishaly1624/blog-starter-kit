"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // toggle login/register
  const [role, setRole] = useState<"customer" | "seller">("customer"); // role selector
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (newRole: "customer" | "seller") => {
    setRole(newRole);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const endpoint = isLogin
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/register";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, role }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Something went wrong");
        return;
      }

      if (isLogin) {
        alert("Login successful ✅");
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", role); // ✅ Added this line
        router.push(role === "customer" ? "/" : "/seller");
      } else {
        alert("Registration successful ✅ Now you can login");
        setIsLogin(true);
      }
    } catch (err) {
      console.error(err);
      alert("Server error, please try again later");
    }
  };


  return (
    <div
      className="flex justify-center items-center min-h-screen px-4 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative bg-white shadow-lg rounded-xl p-8 w-full max-w-md z-10">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>

        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => handleRoleChange("customer")}
            className={`px-4 py-2 rounded-md font-medium transition ${role === "customer" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
          >
            Customer
          </button>
          <button
            onClick={() => handleRoleChange("seller")}
            className={`px-4 py-2 rounded-md font-medium transition ${role === "seller" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
          >
            Seller
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Your Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-md transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setIsLogin(false)}
                className="text-green-700 font-semibold cursor-pointer"
              >
                Register here
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setIsLogin(true)}
                className="text-green-700 font-semibold cursor-pointer"
              >
                Login here
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
