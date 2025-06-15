// pages/Home.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Blog } from '../types/Blog';

const Home = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`https://gnews.io/api/v4/search?q=technology&token=a73eba6b2c2783ba65bd9e24abbb942c`)
      .then((res) => setBlogs(res.data.articles))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">GNews Blog Articles</h1>
      {blogs.map((blog, idx) => (
        <div key={idx} className="border p-4 mb-4 rounded shadow">
          <h2 className="text-xl font-semibold">{blog.title}</h2>
          <p>{blog.description}</p>
          <a href={blog.url} target="_blank" className="text-blue-500">
            Read More →
          </a>
        </div>
      ))}
    </div>
  );
};

export default Home;
