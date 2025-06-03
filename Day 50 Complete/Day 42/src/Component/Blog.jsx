import React from 'react';

const blogs = [
  {
    title: 'The Future of E-commerce in Pakistan',
    author: 'Admin',
    date: 'June 1, 2025',
    image: 'https://source.unsplash.com/800x400/?ecommerce',
    summary: 'Explore how digital stores and online payment methods are changing the shopping experience in Pakistan.',
  },
  {
    title: 'Understanding Cryptocurrency & Blockchain',
    author: 'Crypto Expert',
    date: 'May 25, 2025',
    image: 'https://source.unsplash.com/800x400/?cryptocurrency',
    summary: 'A beginner-friendly guide to how cryptocurrency works and how to get started with crypto investing.',
  },
  {
    title: 'Top 5 Tips to Prepare for ICS Exams',
    author: 'Education Team',
    date: 'May 15, 2025',
    image: 'https://source.unsplash.com/800x400/?education',
    summary: 'Learn the best strategies to prepare for intermediate exams with study tips, tools, and planning advice.',
  },
  {
    title: 'Smart Investment Strategies for Beginners',
    author: 'Finance Coach',
    date: 'April 30, 2025',
    image: 'https://source.unsplash.com/800x400/?finance,investment',
    summary: 'This article helps you understand safe and effective ways to start investing even with a small amount.',
  },
];

export default function Blog() {
  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24 min-h-screen">
      <h1 className="text-5xl font-bold text-center text-indigo-700 mb-16">Our Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
        {blogs.map((blog, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-indigo-600 mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-500 mb-4">By {blog.author} • {blog.date}</p>
              <p className="text-gray-700 mb-4">{blog.summary}</p>
              <button className="mt-2 inline-block text-indigo-600 font-semibold hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
