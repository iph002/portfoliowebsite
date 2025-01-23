import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
          <nav className="container mx-auto flex justify-between items-center p-4">
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
        <main className="flex-grow flex justify-center m-20">
          {children}
        </main>

        {/* Fixed Footer */}
        <footer className="fixed bottom-0 left-0 w-full bg-gray-100 border-t border-gray-200 z-50">
          <div className="container mx-auto text-center p-4 text-gray-500">
            © 2025 Isabell Philipp. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
