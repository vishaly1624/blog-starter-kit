"use client";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">AGRIBAZZAR</h2>
          <p className="mt-2 text-gray-300 text-sm leading-relaxed">
            Fresh • Organic • Sustainable <br />
            Connecting farmers to your table.<br/>
            We prioritize quality, sustainability, and transparency.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-white transition">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div id="contact">
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full px-3 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={3}
              className="w-full px-3 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-md transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-4 pt-3 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} AGRIBAZZAR. All rights reserved.
      </div>
    </footer>
  );
}
