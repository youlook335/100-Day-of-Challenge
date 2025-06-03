import React from 'react';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 text-gray-800 py-16 px-6 sm:px-12 lg:px-24">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-indigo-700 mb-12">Contact Us</h1>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">Call Us</h2>
          <p>+92 300 1234567</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">Email</h2>
          <p>info@yourwebsite.com</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-indigo-600 mb-2">Location</h2>
          <p>Lahore, Pakistan</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">Send Us a Message</h2>
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 px-8 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map - Optional */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Find Us on Map</h2>
        <iframe
          className="w-full h-80 rounded-xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27224.062809296885!2d74.31051026485948!3d31.520369600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483c29edc29%3A0xa6125f4fcbd3853b!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1717332341234"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
