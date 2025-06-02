function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Tanveer Company</h3>
          <p className="text-gray-400 mb-4">
            Providing quality services and products to our valued customers since 2020. Our mission is to deliver excellence and innovation.
          </p>
          <p className="text-gray-400">
            <strong>Address:</strong> 123 Street, City, Country
          </p>
          <p className="text-gray-400">
            <strong>Phone:</strong> +92 300 1234567
          </p>
          <p className="text-gray-400">
            <strong>Email:</strong> info@tanveercompany.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul>
            <li className="mb-2 hover:text-white cursor-pointer">Home</li>
            <li className="mb-2 hover:text-white cursor-pointer">About Us</li>
            <li className="mb-2 hover:text-white cursor-pointer">Services</li>
            <li className="mb-2 hover:text-white cursor-pointer">Blog</li>
            <li className="mb-2 hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
          <ul>
            <li className="mb-2 hover:text-white cursor-pointer">Help Center</li>
            <li className="mb-2 hover:text-white cursor-pointer">FAQs</li>
            <li className="mb-2 hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="mb-2 hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="mb-2 hover:text-white cursor-pointer">Feedback</li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Subscribe to Newsletter</h4>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-l-md sm:rounded-l-md sm:rounded-r-none border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="submit"
              className="mt-2 sm:mt-0 sm:ml-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-semibold transition"
            >
              Subscribe
            </button>
          </form>

          <div className="flex mt-6 space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12.073C22 6.477 17.523 2 12 2S2 6.477 2 12.073c0 5.025 3.657 9.185 8.438 9.927v-7.028H7.898v-2.9h2.54v-2.21c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.772-1.63 1.562v1.882h2.773l-.443 2.9h-2.33v7.028C18.343 21.258 22 17.098 22 12.073z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-blue-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14.86 4.48 4.48 0 0 0 1.96-2.46 9.14 9.14 0 0 1-2.9 1.1 4.52 4.52 0 0 0-7.69 4.13A12.9 12.9 0 0 1 1.64 2.15a4.52 4.52 0 0 0 1.4 6.04 4.47 4.47 0 0 1-2.05-.56v.06a4.52 4.52 0 0 0 3.63 4.43 4.49 4.49 0 0 1-2.04.08 4.52 4.52 0 0 0 4.21 3.13A9.05 9.05 0 0 1 2 18.58 12.9 12.9 0 0 0 8.29 20c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.52A8.18 8.18 0 0 0 23 3z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm4.5-3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-blue-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.5S3.34 9.5 4.98 9.5 7.96 8.16 7.96 6.5 6.62 3.5 4.98 3.5zM2 21h6v-11H2v11zm7-11h5.5v1.6h.1c.8-1.5 2.75-3.1 5.65-3.1 6 0 7 3.9 7 8.95v10H21v-9c0-2.15-.04-4.9-3-4.9-3 0-3.45 2.3-3.45 4.75v9.15H9v-11z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © 2025 Tanveer Company. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
