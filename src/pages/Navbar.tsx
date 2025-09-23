import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
            <div className="w-10 h-auto">
                <img src="/images/logo1.jpg" alt="AGROHUB Logo" className="w-full h-auto object-contain" />
            </div>
            <ul className="hidden lg:flex gap-6 text-sm font-medium text-green-800">
                <li>
                    <Link href="/" className="hover:text-green-600 cursor-pointer">HOME</Link>
                </li>
                <li>
                    <a href="#products" className="hover:text-green-600 cursor-pointer">PRODUCTS</a>
                </li>
                <li>
                    <a href="#about" className="hover:text-green-600 cursor-pointer">ABOUT US</a>
                </li>
            </ul>

            <div className="flex gap-4 text-sm text-green-800">
                <span className="cursor-pointer">Login</span>
                <span className="cursor-pointer">Register</span>
                <span className="cursor-pointer">🛒 (1)</span>
            </div>
        </nav>
    );
}