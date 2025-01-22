"use client"
import ProductListing from "../components/ProductListing";
import Category from "../components/Category";
import FilterPanel from "../components/FilterPanel";



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
    description:"Defense Watch with Knife Mode is a cutting-edge wearable designed for personal safety, combining a sleek smartwatch with a discreet, retractable knife for emergency situations. It features advanced GPS tracking, SOS alerts, and real-time notifications to keep you connected and secure. Ideal for outdoor enthusiasts and safety-conscious individuals, it seamlessly blends functionality with self-defense capabilities."
  },
  {
    id: 3,
    name: "Automatic Vehicle Brake System",
    price: "10000 PKR",
    image: "/images/vehicle-brake.jpg",
    description:"The Automatic Vehicle Brake System is an advanced safety feature designed to prevent collisions by automatically applying brakes when it detects an imminent obstacle. Utilizing sensors, cameras, and AI, it monitors the road in real-time, ensuring quick response to potential hazards. This system enhances driver and pedestrian safety, reducing accidents and providing peace of mind on the road."
  },
  // Add other products here
];

const categories = ["Security", "Home Automation", "Wearables", "Vehicles"];

export default function ProductsPage() {
  const handleCategorySelect = (category: string) => {
    console.log("Selected category:", category);
    // Add logic to filter products by category
  };

  const handleFilterChange = (filters: unknown) => {
    console.log("Filters:", filters);
    // Add logic to filter products based on filters
  };

  // Call the function

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <Category categories={categories} onSelectCategory={handleCategorySelect} />
          <FilterPanel onFilterChange={handleFilterChange} />
        </div>
        <div className="lg:col-span-3">
          <ProductListing products={products} />
        </div>
      </div>
    </div>
  );
}