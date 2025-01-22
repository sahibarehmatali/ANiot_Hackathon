"use client"
import ProductListing from "./components/ProductListing";
import SearchBar from "./components/SearchBar";

const products = [
  {
    id: 1,
    name: "Thief Alarm Gadget",
    price: "5000 PKR",
    image: "/images/thief-alarm.jpg",
  },
  {
    id: 2,
    name: "Defense Watch with Knife Mode",
    price: "3000 PKR",
    image: "/images/defense-watch.jpg",
  },
  {
    id: 3,
    name: "Automatic Vehicle Brake System",
    price: "10000 PKR",
    image: "/images/vehicle-brake.jpg",
  },
  {
    id: 4,
    name: "Thumb-Based Vehicle On/Off System",
    price: "7000 PKR",
    image: "/images/thumb-vehicle.jpg",
  },
  {
    id: 5,
    name: "Smart Home Automation Kit",
    price: "12000 PKR",
    image: "/images/home-automation.jpg",
  },
];

export default function Home() {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
    // Add logic to filter products based on the query
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to ANiot</h1>
      <p className="text-xl text-gray-600 text-center mb-8">
        Automate Now with IoT
      </p>
      <SearchBar onSearch={handleSearch} />
      <ProductListing products={products} />
    </div>
  );
}