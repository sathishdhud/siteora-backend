import React, { useEffect, useState } from 'react';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

 // Blogs.js
useEffect(() => {
  fetch('http://localhost:5000/api/blogs')
    .then(res => res.json())
    .then(data => {
      console.log("Fetched blogs:", data);
      setBlogs(data);
    })
    .catch(error => {
      console.error("Error fetching blogs:", error);
    });
}, []);


  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={blog.cover_image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <p className="text-sm text-gray-500 mb-1">
                {new Date(blog.published_at).toLocaleDateString()}
              </p>
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
              <a
                href={`/blog/${blog.slug}`}
                className="text-indigo-600 font-medium hover:underline text-sm"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
