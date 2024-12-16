"use client";

import React, { useState } from "react";

export default function CartPage() {
  // Initial state with products
  const initialProducts = [
    {
      id: 1,
      name: "Library Stool Chair",
      image: "/path-to-product1.jpg", // Replace with your product image path
      price: 99,
      size: "L",
      quantity: 1,
      isFavorited: false, // Track if the item is favorited
    },
    {
      id: 2,
      name: "Library Stool Chair",
      image: "/path-to-product2.jpg", // Replace with your product image path
      price: 59,
      size: "L",
      quantity: 1,
      isFavorited: false,
    },
  ];

  // State to manage cart products and favorite status
  const [products, setProducts] = useState(initialProducts);

  // Toggle favorite (heart icon click handler)
  const toggleFavorite = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, isFavorited: !product.isFavorited } : product
      )
    );
  };

  // Remove product (bin icon click handler)
  const removeProduct = (id: number) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  // Calculate the subtotal and total
  const subtotal = products.reduce((sum, product) => sum + product.price * product.quantity, 0);
  const total = subtotal; // Add tax/shipping if needed

  return (
    <div className="container mx-auto py-8 px-48 flex flex-col lg:flex-row gap-8">
      {/* Bag Section */}
      <div className="w-full lg:w-2/3 bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Bag</h2>
        <div className="divide-y">
          {/* Product Item */}
          {products.map((product) => (
            <div key={product.id} className="flex flex-col md:flex-row items-start md:items-center py-4">
              {/* Product Image */}
              <div className="w-full md:w-1/4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-24 object-cover rounded"
                />
              </div>
              {/* Product Details */}
              <div className="flex-1 px-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-500">Ashen Stain/Cobalt Bliss</p>
                <p className="text-sm">Size: {product.size}</p>
                <p className="text-sm">Quantity: {product.quantity}</p>
              </div>
              {/* Product Price */}
              <div className="text-right md:text-left">
                <p className="text-lg font-medium">MRP: ${product.price}</p>
              </div>
              {/* Action Buttons */}
              <div className="flex justify-start items-center mt-4 md:mt-0">
                {/* Heart Icon */}
                <button
                  className={`p-2 border rounded-full hover:bg-gray-100 flex items-center mr-2 ${
                    product.isFavorited ? "text-red-500" : "text-gray-500"
                  }`}
                  onClick={() => toggleFavorite(product.id)}
                >
                  <img
                    src="heart.png" // Replace with your heart icon URL
                    alt="Heart Icon"
                    className="w-5 h-5"
                  />
                </button>
                {/* Bin Icon */}
                <button
                  className="p-2 border rounded-full hover:bg-gray-100 flex items-center"
                  onClick={() => removeProduct(product.id)}
                >
                  <img
                    src="/bin-icon-url-here.png" // Replace with your bin icon URL
                    alt="Bin Icon"
                    className="w-5 h-5"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Section */}
      <div className="w-full lg:w-1/3 bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between font-semibold text-lg">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
        <button className="w-full mt-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600">
           Checkout
        </button>
      </div>
    </div>
  );
}
