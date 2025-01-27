"use client"

import { useState } from "react"
import "./globals.css"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
          <nav className="container mx-auto flex justify-between items-center p-4">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold flex items-center">
              <Image src="/icon.png" alt="Logo" width={40} height={40} />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8 text-m font-medium">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>

            {/* Mobile Hamburger Menu */}
            <button className="md:hidden" onClick={toggleMobileMenu} aria-label="Toggle navigation">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 p-4">
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link href="/" onClick={toggleMobileMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" onClick={toggleMobileMenu}>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={toggleMobileMenu}>
                    About
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-grow flex justify-center mt-28 sm:mt-32 px-4">{children}</main>

        {/* Footer */}
        <footer className="sticky bottom-0 left-0 w-full bg-gray-100 border-t border-gray-200 z-50">
          <div className="container mx-auto text-center p-4 text-gray-500">
            © 2025 Isabell Philipp. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}

