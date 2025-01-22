"use client"; // Enable client-side rendering
import Image from "next/image"
import { useEffect, useState } from "react";

// Define the type for the product data
type Product = {
  id: number;
  product_title: string;
  product_description: string;
  product_price: number;
  product_image: string;
};

const FetchDataComponent = () => {
  // State to store the fetched data
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://najafali14.pythonanywhere.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Product[] = await response.json(); // Parse JSON response
        setProducts(data); // Store the fetched data in the state
      } catch (error) {
        setError(error instanceof Error ? error.message : "An unknown error occurred");
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (loading) {
    return <div>Loading...</div>; // Display loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error state
  }

  return (
    <div>
      <h1>Fetched Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.product_title}</h2>
            <p>{product.product_description}</p>
            <p>Price: {product.product_price} PKR</p>
            <Image src={product.product_image} alt={product.product_title} width={100} height={100} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataComponent;