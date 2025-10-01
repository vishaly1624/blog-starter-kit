
import "./globals.css";
import { Inter } from "next/font/google";
import { CartProvider } from "./context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AGRI-BAZZAR",
  description: "A Dynamic Ecommerce Website for Agricultural Products",
  icons: {
    icon: "/images/logo1.jpg", // path to your favicon or main icon
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* ✅ Wrap entire app with CartProvider */}
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
