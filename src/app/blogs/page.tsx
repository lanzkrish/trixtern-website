'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { div } from 'framer-motion/client';

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
    image: '/images/blog1.jpg',
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
     <div className="p-8 max-w-6xl mx-auto  text-gray-800">
      <h1 className="text-center text-4xl font-bold mb-8 text-blue-700">Blogs & Insights</h1>

      {/* Latest Post */}
      <div className="mb-12">
        <Link href={`/blogs/blog-insights/${latestPost.id}`} className="flex flex-col md:flex-row border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1 bg-gray-100">
          <Image src={latestPost.image} alt={latestPost.title} className="w-full md:w-1/2 object-cover" width={90}
              height={90} />
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">{latestPost.title}</h2>
            <p className="text-gray-700 mb-4">{latestPost.description}</p>
            <p className="text-sm text-gray-500">{latestPost.date}</p>
          </div>
        </Link>
      </div>

      {/* Older Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {olderPosts.map((post) => (
          <Link key={post.id} href={`/blogs/blog-insights/${post.id}`} className="flex flex-col border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1 bg-gray-100">
            <Image src={post.image} alt={post.title} className="w-full object-cover" width={20}
              height={20} />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BlogsPage;