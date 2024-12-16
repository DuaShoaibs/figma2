import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-8 px-40">
      {/* Centered Heading */}
      <h2 className="text-3xl font-bold text-center mb-8">Get In Touch With Us</h2>

      {/* Centered "For More Information" Section */}
      <div className="text-center mb-12">
        <p className="text-gray-600">
          For more information about our products & services, please feel free to drop us an email. Our staff is always here to help you out. Do not hesitate!
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Centered Contact Information */}
        <div className="w-full m-9 md:w-1/2">
          <div className="mb-6 flex items-center">
            <img
              src="ad.png" // Icon URL for Address
              alt="Address Icon"
              className="w-6 h-6 mr-2"
            />
            <div>
              <h3 className="font-semibold text-lg mb-2">Address</h3>
              <p className="text-gray-600">23B 5th Ave, New York, NY 10000, United States</p>
            </div>
          </div>

          <div className="mb-6 flex items-center">
            <img
              src="ca.png" // Icon URL for Phone
              alt="Phone Icon"
              className="w-6 h-6 mr-2"
            />
            <div>
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <p className="text-gray-600">Mobile: +1 (941) 546-6789</p>
              <p className="text-gray-600">Hotline: +1 (941) 456-6789</p>
            </div>
          </div>

          <div className="mb-6 flex items-center">
            <img
              src="time.png" // Icon URL for Working Time
              alt="Clock Icon"
              className="w-6 h-6 mr-2"
            />
            <div>
              <h3 className="font-semibold text-lg mb-2">Working Time</h3>
              <p className="text-gray-600">Monday-Friday: 9:00 - 21:00</p>
              <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 m-3 bg-white p-6 rounded-lg shadow-lg">
          <form action="#" method="POST">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Abc"
              className="w-full p-3 border border-gray-300 rounded-md mb-4"
              required
            />

            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Abc@gmail.com"
              className="w-full p-3 border border-gray-300 rounded-md mb-4"
              required
            />

            <label htmlFor="subject" className="block text-sm font-semibold mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="This is optional"
              className="w-full p-3 border border-gray-300 rounded-md mb-4"
            />

            <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Hi! I'd like to talk about..."
              className="w-full p-3 border border-gray-300 rounded-md mb-4"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 bg-gray-100 text-black py-8">
        <div className="flex justify-around">
          <div className="flex items-center">
            <img
              src="a.png" // Icon URL for High Quality
              alt="High Quality Icon"
              className="w-10 h-15 mr-2"
            />
            <div>
              <h4 className="text-lg font-semibold mb-2">High Quality</h4>
              <p>Crafted from top materials</p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="w.png" // Icon URL for Warranty Protection
              alt="Warranty Protection Icon"
              className="w-10 h-10 mr-2"
            />
            <div>
              <h4 className="text-lg font-semibold mb-2">Warranty Protection</h4>
              <p>Over 2 years</p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="24.png" // Icon URL for 24/7 Support
              alt="24/7 Support Icon"
              className="w-10 h-10 mr-2"
            />
            <div>
              <h4 className="text-lg font-semibold mb-2">24/7 Support</h4>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
