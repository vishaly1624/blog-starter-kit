"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "PRODUCTS", href: "#products" },
  { label: "ABOUT US", href: "#about" },
  { label: "CONTACT US", href: "#contact" }, // ✅ New Contact Us link
];

const userActions = [
  { label: "Login", onClick: () => (window.location.href = "/login") },
   { label: "Cart", onClick: () => (window.location.href = "/cart") },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="hidden lg:flex gap-4 text-sm text-green-800">
          {userActions.map((action, idx) => (
            <span
              key={idx}
              className="cursor-pointer"
              onClick={action.onClick}
            >
              {action.label}
            </span>
          ))}
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
                  onClick={() => setIsOpen(false)} // ✅ close menu after click
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="hover:text-green-600 cursor-pointer"
                  onClick={() => setIsOpen(false)} // ✅ close menu after click
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          {userActions.map((action, idx) => (
            <span
              key={idx}
              className="cursor-pointer"
              onClick={() => {
                action.onClick();
                setIsOpen(false);
              }}
            >
              {action.label}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
}
