"use client"

import ProductDetail from "../../components/ProductDetail";
import RelatedProducts from "../../components/RelatedProducts";

const product = {
  id: 1,
  name: "Thief Alarm Gadget",
  price: "5000 PKR",
  image: "/images/thief-alarm.jpg",
  description: "A smart alarm system for homes and offices integrates advanced sensors, AI, and connectivity to provide real-time security alerts and remote monitoring. It offers customizable features like motion detection, door/window sensors, and mobile app control for enhanced safety. With seamless integration into smart home ecosystems, it ensures peace of mind through proactive threat detection and instant notifications..",
};

const relatedProducts = [
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
  
];

export default function ProductDetails() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetail product={product} />
      <h2 className="text-2xl font-bold mt-8 mb-4">Related Products</h2>
      <RelatedProducts products={relatedProducts} />
    </div>
  );
}