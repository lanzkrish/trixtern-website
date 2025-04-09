'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
}

const blogs: BlogPost[] = [
  {
    id: '4',
    title: 'Ai in Healthcare: Revolutionizing Patient Care',
    description: 'Discover how AI is transforming healthcare and improving patient outcomes.',
    image: '/pexels-googledeepmind-17483868.jpg',
    date: 'April 9, 2025',
  },
  {
    id: '3',
    title: 'The Future of AI: Trends to Watch',
    description: 'Explore the latest trends shaping the future of artificial intelligence.',
    image: '/images/blog1.jpg',
    date: 'April 5, 2025',
  },
  {
    id: '2',
    title: 'How AI is Transforming Businesses',
    description: 'Discover how AI is revolutionizing industries worldwide.',
    image: '/images/blog2.jpg',
    date: 'March 28, 2025',
  },
  {
    id: '1',
    title: 'Ethics in AI Development',
    description: 'A deep dive into the ethical considerations of AI development.',
    image: '/images/blog3.jpg',
    date: 'March 20, 2025',
  },
];

const BlogsPage: React.FC = () => {
  // Sort blogs by id in descending order
  const sortedBlogs = [...blogs].sort((a, b) => Number(b.id) - Number(a.id));
  const latestPost = sortedBlogs[0];
  const olderPosts = sortedBlogs.slice(1);

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Header Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-100 via-white to-blue-100 text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-700">Blogs & Insights</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Stay updated with the latest trends, insights, and innovations in AI, FinTech, and beyond.
        </p>
      </section>

      {/* Latest Post */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Blog</h2>
        <Link
          href={`/blogs/blog-insights/${latestPost.id}`}
          className="flex flex-col md:flex-row border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 bg-white max-w-5xl mx-auto"
        >
          <Image
            src={latestPost.image}
            alt={latestPost.title}
            className="w-full md:w-1/2 object-cover"
            width={500}
            height={300}
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">{latestPost.title}</h2>
            <p className="text-gray-600 mb-4">{latestPost.description}</p>
            <p className="text-sm text-gray-500">{latestPost.date}</p>
          </div>
        </Link>
      </section>

      {/* Older Posts */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Older Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {olderPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blogs/blog-insights/${post.id}`}
              className="flex flex-col border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 bg-white"
            >
              <Image
                src={post.image}
                alt={post.title}
                className="w-full object-cover"
                width={400}
                height={250}
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;