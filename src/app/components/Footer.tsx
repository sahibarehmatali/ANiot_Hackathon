// app/components/Footer.tsx
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold">ANiot</h3>
            <p className="mt-2">Automate Now with IoT</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="mt-2">
              <li>
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-gray-400">
                  Products
                </a>
              </li>
              <li>
                <a href="/dashboard" className="hover:text-gray-400">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Follow Us</h4>
            <div className="flex gap-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/facebook.svg" alt="Facebook"  width={35} height={35} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/twitter.svg" alt="Twitter" width={35} height={35} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/instagram.svg" alt="Instagram" width={35} height={35} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} ANiot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}