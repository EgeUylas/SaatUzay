'use client';

import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { useState, useEffect } from "react";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

/*const metadata = {
  title: "NOVA TIMEPIECE - Geleceğin Lüks Saatleri",
  description: "Uzayın derinliklerinden ilham alan lüks saat koleksiyonu",
};*/

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-800/50 transition-colors"
      aria-label="Tema değiştir"
    >
      {theme === 'dark' ? (
        <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-xl' : 'bg-transparent'
    } border-b border-white/10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 transition-transform">
            NOVA TIMEPIECE
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/collection" className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 px-3 py-2 text-sm font-medium">
              Koleksiyon
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 px-3 py-2 text-sm font-medium">
              Hakkımızda
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 px-3 py-2 text-sm font-medium">
              İletişim
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={spaceGrotesk.className}>
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
