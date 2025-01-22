// app/components/Navbar.tsx
"use client"; // Ensure this is a client component for interactivity
import Link from "next/link";
import { useState } from "react";

// const notifications = [
//   { id: 1, message: "Your order has been shipped." },
//   { id: 2, message: "New product available: Smart Home Automation Kit." },
// ];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          ANiot
        </Link>

        {/* Hamburger Menu Icon (Always Visible on Small Screens) */}
        <button
          onClick={toggleMenu} // Toggle menu on click
          className="md:hidden focus:outline-none z-20" // Ensure icon stays on top
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Nav Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-4 absolute md:static bg-gray-800 w-full md:w-auto left-0 top-16 md:top-0 p-4 md:p-0 z-10`} // Adjust top position and z-index
        >
          <Link href="/" className="block hover:text-gray-400 py-2 md:py-0">
            Home
          </Link>
          <Link
            href="/products"
            className="block hover:text-gray-400 py-2 md:py-0"
          >
            Products
          </Link>
          <Link
            href="/profile"
            className="block hover:text-gray-400 py-2 md:py-0"
          >
            Profile
          </Link>
          <Link
            href="/dashboard"
            className="block hover:text-gray-400 py-2 md:py-0"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}