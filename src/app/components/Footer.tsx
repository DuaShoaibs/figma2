const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 px-8 py-12">
      <div className="container mx-auto flex flex-wrap justify-between px-48 gap-0">
        {/* Left Section: Logo and Description */}
        <div className="w-full md:w-1/4 flex flex-col items-start">
          {/* Logo */}
          <img
            src="/Logo.png"
            alt="Comforty Logo"
            className="w-8 h-8 mb-4"
          />
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">Comforty</h3>
          <p className="text-sm leading-relaxed">
            Vivamus tristique odio sit amet velit semper, <br />
            eu posuere turpis interdum. <br />
            Cras egestas purus.
          </p>
        </div>

        {/* Categories Section */}
        <div className="w-full md:w-1/4">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">CATEGORY</h4>
          <ul className="space-y-2 text-sm">
            <li>Sofa</li>
            <li>Armchair</li>
            <li>Wing Chair</li>
            <li>Desk Chair</li>
            <li>Wooden Chair</li>
            <li>Park Bench</li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="w-full md:w-1/4">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">SUPPORT</h4>
          <ul className="space-y-2 text-sm">
            <li>Help & Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Help</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="w-full md:w-1/4">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">NEWSLETTER</h4>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
          </p>
        </div>
      </div>

      {/* Social Media and Bottom Footer */}
      <div className="container mx-auto mt-8 border-t border-gray-300 pt-4 flex justify-between items-center">
        <p className="text-sm">&copy; 2021 - Blogy ~ Designed & Developed by <a href="#" className="text-blue-500">Zokisoft</a></p>
        <div className="flex space-x-4">
          <span>🔒 PayPal</span>
          <span>💳 VISA</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
