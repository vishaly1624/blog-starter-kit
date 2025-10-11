"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "PRODUCTS", href: "#products" },
  { label: "ABOUT US", href: "#about" },
  { label: "CONTACT US", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // ✅ Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    alert("Logged out successfully ✅");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="w-10 h-auto">
          <img
            src="/images/logo1.jpg"
            alt="AGROHUB Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-6 text-sm font-medium text-green-800">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              {link.href.startsWith("#") ? (
                <a
                  href={link.href}
                  className="hover:text-green-600 cursor-pointer"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="hover:text-green-600 cursor-pointer"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* User Actions */}
        <div className="hidden lg:flex gap-6 text-sm font-medium text-green-800">
          {isLoggedIn ? (
            <>
              <span
                className="cursor-pointer hover:text-green-600"
                onClick={() => router.push("/cart")}
              >
                CART
              </span>
              <span
                className="cursor-pointer hover:text-green-600"
                onClick={handleLogout}
              >
                LOGOUT
              </span>
            </>
          ) : (
            <>
              <span
                className="cursor-pointer hover:text-green-600"
                onClick={() => router.push("/login")}
              >
                LOGIN/REGISTER
              </span>
            </>
          )}
        </div>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-green-800 text-xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 flex flex-col gap-4 text-sm font-medium text-green-800 lg:hidden">
          {navLinks.map((link, idx) => (
            <div key={idx}>
              {link.href.startsWith("#") ? (
                <a
                  href={link.href}
                  className="hover:text-green-600 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="hover:text-green-600 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          {isLoggedIn ? (
            <span
              className="cursor-pointer"
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
            >
              Logout
            </span>
          ) : (
            <>
              <span
                className="cursor-pointer"
                onClick={() => {
                  router.push("/login");
                  setIsOpen(false);
                }}
              >
                Login
              </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  router.push("/cart");
                  setIsOpen(false);
                }}
              >
                Cart
              </span>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
