// Header.tsx
'use client';
import Link from 'next/link';

import { useCart } from '../components/CartContext'; // Import the useCart hook

export default function Header() {
  const { cartCount } = useCart(); // Access cartCount from the context

  return (
    <>
      {/* Your existing header content */}
      <div className="top-header">
        <div className="free-shipping">Free Shipping on Orders Over $50</div>

        <select className="language-dropdown">
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>
        <Link href="/faq" passHref>
          <button className="header-button faq-btn">Faqs</button>
        </Link>
        <Link href="/needhelp" passHref>
          <button className="header-button help-btn">
            <img src="/alert.png" alt="Need Help" className="help-icon" />
            Need Help
          </button>
        </Link>
      </div>

      <div className="second-header flex justify-between items-center py-4 px-6 bg-white shadow-md">
        {/* Logo Container */}
        <div className="logo-container flex items-center">
          <img src="/Logo.png" alt="Comforty Logo" className="logo-image w-12 h-12 mr-3" />
          <div className="logo text-xl font-bold text-gray-800">Comforty</div>
        </div>

        {/* Cart Container */}
        <div className="cart-container">
          <Link href="/Cart" passHref>
            <button className="cart-button flex items-center bg-gray-100 p-2 rounded">
              <img src="/cart.png" alt="Cart" className="cart-icon w-6 h-6 mr-2" />
              <span className="cart-text text-sm font-medium">
                Cart ({cartCount}) {/* Display the cart count */}
              </span>
            </button>
          </Link>
        </div>
      </div>

      <div className="third-header flex justify-between items-center py-4 px-6 bg-gray-100">
        {/* Navigation Buttons on the Right */}
        <div className="nav-buttons flex gap-4">
          <Link href="/">
            <button className="nav-button text-sm font-medium text-gray-700">Home</button>
          </Link>
          <Link href="/shop">
            <button className="nav-button text-sm font-medium text-gray-700">Shop</button>
          </Link>
          <Link href="/product">
            <button className="nav-button text-sm font-medium text-gray-700">Product</button>
          </Link>
          <Link href="/contact" passHref>
            <button className="nav-button text-sm font-medium text-gray-700">Contact us</button>
          </Link>
          <Link href="/about" passHref>
            <button className="nav-button text-sm font-medium text-gray-700">About</button>
          </Link>
        </div>

        {/* Contact Info on the Left */}
        <div className="left-side">
          <span className="contact-info text-sm text-gray-700">Contact: (808) 555-0111</span>
        </div>
      </div>

      {/* Divider Between Header Sections */}
      <div className="header-divider bg-gray-300 h-px my-2"></div>
    </>
  );
}
