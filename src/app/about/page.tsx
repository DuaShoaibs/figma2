'use client';

import React from "react";
import Link from "next/link"; // Import Link for navigation

// Brand Features Data
const brandFeatures = [
  {
    icon: "/Vector3.png", // Path to your custom icon
    title: "Next day as standard",
    text: "Order before 3pm and get your order the next day as standard.",
  },
  {
    icon: "/Vector2.png", // Path to your custom icon
    title: "Made by true artisans",
    text: "Handmade crafted goods made with real passion and craftsmanship.",
  },
  {
    icon: "/Vector4.png", // Path to your custom icon
    title: "Unbeatable prices",
    text: "For our materials and quality, you won't find better prices anywhere.",
  },
  {
    icon: "/Vector1.png", // Path to your custom icon
    title: "Recycled packaging",
    text: "We use 100% recycled to ensure our footprint is more manageable.",
  },
];

// Popular Products Data
const popularProducts = [
  {
    id: "13", // Unique ID for the product
    image: "/Parent.png",
    title: "The Poplar suede sofa",
    price: "$90.00",
  },
  {
    id: "14",
    image: "/Photo.png",
    title: "The Dandy chair",
    price: "$50.00",
  },
  {
    id: "15",
    image: "/Parent.png",
    title: "The Dandy chair",
    price: "$50.00",
  },
];

const AboutPage = () => {
  return (
    <div className="font-sans text-gray-800 py-48 px-40">
      {/* About Us Section */}
      <div className="flex flex-col md:flex-row justify-between items-stretch mb-16">
        <div className="flex-1 mr-5 bg-teal-800 text-white p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">About Us - Comforty</h1>
          <p className="text-lg mb-5">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
          <button className="bg-white text-teal-800 py-3 px-6 rounded-lg font-semibold">
            View Collection
          </button>
        </div>
        <div className="flex-1">
          <Link href="/products/4">
            <img
              src="/products/product4.png"
              alt="Chair"
              className="w-full h-50 object-cover rounded-lg transform transition duration-300 hover:scale-105"
            />
          </Link>
        </div>
      </div>

      {/* Brand Difference Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          What Makes Our Brand Different
        </h2>
        <div className="flex flex-wrap justify-between gap-0">
          {brandFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg text-center w-1/5"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="text-3xl mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-teal-800">
                {feature.title}
              </h3>
              <p className="text-sm text-teal-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Products Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Our Popular Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {popularProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="text-center bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-11/12 rounded-lg mb-4 hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-500">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
