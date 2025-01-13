import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-4 bg-white border-b border-gray-200">
          <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
              <Image src="/icon.png" alt="Logo" width={40} height={40} />
            </Link>
            <ul className="flex space-x-8 text-m font-medium">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </nav>
        </header>

        {/* Main content grows to push footer down */}
        <main className="flex-grow flex items-center justify-center">
          {children}
        </main>

        {/* Footer at bottom if content is short; otherwise scrolls into view */}
        <footer className="p-4 bg-gray-100 border-t border-gray-200 text-center">
          <div className="text-gray-500">
            © 2025 Isabell Philipp. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
