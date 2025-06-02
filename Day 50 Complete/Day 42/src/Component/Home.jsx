import React from "react";

function Home() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-20">

      {/* Ecommerce Products */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Ecommerce Products</h2>
        <p className="text-gray-700 max-w-4xl mb-6 text-lg">
          Discover a curated selection of the latest and best-selling products in the ecommerce market. From smartphones to accessories, these products are designed to enhance your lifestyle with quality and innovation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard 
            title="Smartphone XYZ" 
            price="$499" 
            description="Experience cutting-edge technology with Smartphone XYZ, featuring a stunning display, fast processor, and advanced camera system to capture every moment in perfect detail." 
            img="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80"
          />
          <ProductCard 
            title="Wireless Headphones" 
            price="$199" 
            description="Immerse yourself in high-quality sound with these wireless headphones, offering noise cancellation, comfortable fit, and long-lasting battery life for uninterrupted listening." 
            img="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
          />
          <ProductCard 
            title="Smartwatch Pro" 
            price="$299" 
            description="Stay connected and monitor your health with Smartwatch Pro. Features include heart rate tracking, notifications, and customizable watch faces for your personal style." 
            img="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80"
          />
        </div>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Shop Now
        </button>
      </section>

      {/* Property */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Property</h2>
        <p className="text-gray-700 max-w-4xl mb-6 text-lg">
          Our property listings include residential, commercial, and rental spaces across various cities. We provide detailed descriptions, high-quality photos, and expert advice to help you find your dream home or ideal business location. Whether you want to invest, buy, or rent, we have options tailored to your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PropertyCard
            title="Modern Family Home"
            location="Los Angeles, CA"
            price="$850,000"
            img="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
            description="A spacious 4-bedroom house in a quiet neighborhood featuring a beautiful garden, modern kitchen, and energy-efficient design."
          />
          <PropertyCard
            title="Downtown Apartment"
            location="New York, NY"
            price="$2,500 / month"
            img="https://images.unsplash.com/photo-1572120360610-d971b9c8a363?auto=format&fit=crop&w=400&q=80"
            description="A stylish 2-bedroom apartment in the heart of the city, close to transportation, shopping, and dining options."
          />
          <PropertyCard
            title="Office Space"
            location="Chicago, IL"
            price="$1,200 / month"
            img="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80"
            description="Bright and modern office space suitable for startups and small businesses, with access to meeting rooms and parking."
          />
        </div>
        <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
          View All Properties
        </button>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <p className="text-gray-700 max-w-4xl mb-6 text-lg">
          Empower yourself with our diverse educational programs designed for all levels. Whether you want to learn coding, marketing, design, or business management, we provide online courses, workshops, and resources to help you succeed in your career or personal growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <EducationCard
            title="Web Development Bootcamp"
            duration="12 weeks"
            img="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
            description="Master full-stack web development with practical projects and guidance from experienced instructors."
          />
          <EducationCard
            title="Digital Marketing Essentials"
            duration="6 weeks"
            img="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
            description="Learn the core principles of SEO, social media, and content marketing to grow your business or career."
          />
          <EducationCard
            title="Graphic Design Masterclass"
            duration="8 weeks"
            img="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
            description="Develop your creative skills and learn design software to create stunning visuals and brand assets."
          />
        </div>
        <button className="mt-6 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
          Explore Courses
        </button>
      </section>

      {/* Finance & Establishment */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Finance & Establishment</h2>
        <p className="text-gray-700 max-w-4xl mb-6 text-lg">
          Navigate your financial future with expert advice on investment strategies, personal finance management, and business setup. Whether you are an individual or entrepreneur, we provide resources and tools to help you build and grow your wealth efficiently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FinanceCard
            title="Investment Strategies"
            img="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80"
            description="Explore various investment options such as stocks, bonds, real estate, and mutual funds to diversify and grow your portfolio."
          />
          <FinanceCard
            title="Small Business Setup"
            img="https://images.unsplash.com/photo-1515165562835-c50b6bcbdce9?auto=format&fit=crop&w=400&q=80"
            description="Step-by-step guidance on legally establishing your business, handling finances, marketing, and managing operations."
          />
          <FinanceCard
            title="Personal Finance Management"
            img="https://images.unsplash.com/photo-1499744937866-d9e5d5d6e4a7?auto=format&fit=crop&w=400&q=80"
            description="Effective budgeting, saving, and financial planning tips to achieve your short- and long-term financial goals."
          />
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial
            name="Ayesha Khan"
            role="Entrepreneur"
            feedback="The property service helped me find the perfect office space within my budget. Excellent customer support and detailed listings!"
            img="https://randomuser.me/api/portraits/women/68.jpg"
          />
          <Testimonial
            name="Ali Raza"
            role="Student"
            feedback="I enrolled in the Web Development Bootcamp and it changed my career path completely. The instructors were very supportive and the course was hands-on."
            img="https://randomuser.me/api/portraits/men/75.jpg"
          />
          <Testimonial
            name="Sara Malik"
            role="Shopper"
            feedback="The ecommerce site offers a great variety of products with fast shipping. I always find quality gadgets here."
            img="https://randomuser.me/api/portraits/women/45.jpg"
          />
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-100 p-10 rounded-md text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-6 max-w-xl mx-auto text-gray-700 text-lg">
          Stay updated with the latest offers, new courses, property listings, and expert advice delivered straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* FAQs */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="max-w-4xl space-y-4">
          <FAQ
            question="How can I purchase products from your ecommerce store?"
            answer="Simply browse through the products, add your desired items to the cart, and proceed to checkout. We support multiple payment methods for your convenience."
          />
          <FAQ
            question="Do you offer rental properties?"
            answer="Yes, we have a wide range of rental properties including apartments, houses, and commercial spaces. You can filter listings based on location and price."
          />
          <FAQ
            question="Are your education courses self-paced?"
            answer="Most of our courses are self-paced with flexible deadlines. Some also offer live sessions and instructor support."
          />
        </div>
      </section>

      {/* Social Media Links */}
      <section className="text-center space-x-6 text-2xl">
        <h2 className="text-3xl font-bold mb-6">Follow Us</h2>
        <SocialIcon icon="facebook" />
        <SocialIcon icon="twitter" />
        <SocialIcon icon="instagram" />
        <SocialIcon icon="linkedin" />
      </section>

    </div>
  );
}

function ProductCard({ title, price, description, img }) {
  return (
    <div className="border rounded-md p-4 shadow hover:shadow-lg transition">
      <img src={img} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-yellow-500 font-bold mb-2">{price}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PropertyCard({ title, location, price, description, img }) {
  return (
    <div className="border rounded-md p-4 shadow hover:shadow-lg transition">
      <img src={img} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 italic mb-2">{location}</p>
      <p className="text-green-600 font-bold mb-2">{price}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function EducationCard({ title, duration, description, img }) {
  return (
    <div className="border rounded-md p-4 shadow hover:shadow-lg transition">
      <img src={img} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm italic text-gray-500 mb-2">{duration}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function FinanceCard({ title, description, img }) {
  return (
    <div className="border rounded-md p-4 shadow hover:shadow-lg transition">
      <img src={img} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Testimonial({ name, role, feedback, img }) {
  return (
    <div className="border rounded-md p-6 shadow bg-white">
      <div className="flex items-center mb-4">
        <img
          src={img}
          alt={name}
          className="w-14 h-14 rounded-full mr-4 object-cover"
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{feedback}"</p>
    </div>
  );
}

function FAQ({ question, answer }) {
  return (
    <div className="border rounded-md p-4 shadow bg-white">
      <h4 className="font-semibold mb-2">{question}</h4>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
}

function SocialIcon({ icon }) {
  const icons = {
    facebook: (
      <a href="#" className="text-blue-600 hover:text-blue-800" aria-label="Facebook">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22 12.073C22 6.477 17.523 2 12 2S2 6.477 2 12.073c0 5.025 3.657 9.185 8.438 9.927v-7.028H7.898v-2.9h2.54v-2.21c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.772-1.63 1.562v1.882h2.773l-.443 2.9h-2.33v7.028C18.343 21.258 22 17.098 22 12.073z" />
        </svg>
      </a>
    ),
    twitter: (
      <a href="#" className="text-blue-400 hover:text-blue-600" aria-label="Twitter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M23 3a10.9 10.9 0 0 1-3.14.86 4.48 4.48 0 0 0 1.96-2.46 9.14 9.14 0 0 1-2.9 1.1 4.52 4.52 0 0 0-7.69 4.13A12.9 12.9 0 0 1 1.64 2.15a4.52 4.52 0 0 0 1.4 6.04 4.47 4.47 0 0 1-2.05-.56v.06a4.52 4.52 0 0 0 3.63 4.43 4.49 4.49 0 0 1-2.04.08 4.52 4.52 0 0 0 4.21 3.13A9.05 9.05 0 0 1 2 18.58 12.9 12.9 0 0 0 8.29 20c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.52A8.18 8.18 0 0 0 23 3z" />
        </svg>
      </a>
    ),
    instagram: (
      <a href="#" className="text-pink-600 hover:text-pink-800" aria-label="Instagram">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm4.5-3.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      </a>
    ),
    linkedin: (
      <a href="#" className="text-blue-700 hover:text-blue-900" aria-label="LinkedIn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block w-8 h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.5S3.34 9.5 4.98 9.5 7.96 8.16 7.96 6.5 6.62 3.5 4.98 3.5zM2 21h6v-11H2v11zm7-11h5.5v1.6h.1c.8-1.5 2.75-3.1 5.65-3.1 6 0 7 3.9 7 8.95v10H21v-9c0-2.15-.04-4.9-3-4.9-3 0-3.45 2.3-3.45 4.75v9.15H9v-11z" />
        </svg>
      </a>
    ),
  };

  return icons[icon] || null;
}

export default Home;
