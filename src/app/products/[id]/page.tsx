'use client';

import Image from 'next/image';
import Link from 'next/link';
import products from '../../data/products.json'; // Adjust the path to your data file
import { useParams } from 'next/navigation'; // Use useParams hook

export default function ProductPage() {
  const { id } = useParams(); // Get the id from the route params

  // Find the product by ID
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  // Get featured products (for this example, using the first 5 products)
  const featuredProducts = products.slice(0, 5);

  // Fallback image in case product.image is undefined
  const productImage = product.image || '/fallback-image.jpg'; // Adjust with your fallback image path

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        {/* Product Image */}
        <div className="flex justify-center w-full h-full">
          <Image
            src={productImage}
            alt={`Image of ${product.name}`}
            width={400}
            height={400}
            className="object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="w-full px-4">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          {/* Price */}
          <p className="text-2xl bg-blue-500 text-white font-semibold rounded-full inline-block px-4 py-1 mb-4">
            {product.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 mb-4 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
            sapien sed ipsum placerat dignissim. Duis posuere magna ac lectus
            pharetra, vel gravida enim vehicula.
          </p>

          {/* Add to Cart Button */}
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            <Image
              src="/Cart.png" // Replace with your cart icon path
              alt="Cart Icon"
              width={16}
              height={16}
              className="mr-2"
            />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="py-8 mt-24">
        <h2
          className="text-2xl font-semibold mb-4 px-52"
          style={{ color: 'rgba(39, 35, 67, 1)' }}
        >
          Featured Products
        </h2>
        <div className="flex justify-center gap-4 px-48">
          {/* Featured Products Cards */}
          {featuredProducts.map((featuredProduct) => (
            <div
              key={featuredProduct.id}
              className="bg-white rounded-lg shadow p-4 min-w-[200px] text-center relative"
            >
              <Link href={`/products/${featuredProduct.id}`}>
                <Image
                  src={featuredProduct.image || '/fallback-image.jpg'} // Fallback image if not found
                  alt={`Image of ${featuredProduct.name}`}
                  width={315}
                  height={315}
                  className="mb-4"
                />
              </Link>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="font-medium text-gray-800">
                    {featuredProduct.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {featuredProduct.price}
                  </p>
                </div>

                <button className="w-8 h-8 bg-gray-200 rounded-md hover:bg-blue-500 flex justify-center items-center">
              <Image
                src="/Cart.png" // Replace with your cart icon path
                alt="Add to Cart"
                width={16}
                height={16}
              />
            </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
