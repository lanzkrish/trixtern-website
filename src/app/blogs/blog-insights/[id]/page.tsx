'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  image?: string;
}

const blogData: BlogPost[] = [
  {
    id: '4',
    title: 'Ai in Healthcare: Revolutionizing Patient Care',
    content: 'Discover how AI is transforming healthcare and improving patient outcomes.',
    date: 'April 9, 2025',
    image: '/pexels-googledeepmind-17483868.jpg',
  },
  {
    id: '3',
    title: 'The Future of AI: Trends to Watch',
    content: 'Artificial Intelligence (AI) is rapidly evolving, and its impact on industries is profound. In this blog, we explore the latest trends shaping the future of AI, including advancements in machine learning, ethical considerations, and the integration of AI into everyday life. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, officiis aperiam. Ad deleniti, inventore aliquam itaque omnis culpa iste dolorem excepturi cumque? Soluta corporis fugit placeat architecto velit? Pariatur, perferendis? .',
    date: 'April 5, 2025',
    image: 'https://github.com/user-attachments/assets/ef7b90b4-43ac-43cf-8fa9-dfd875e0748d',
  },
  {
    id: '2',
    title: 'How AI is Transforming Businesses',
    content: 'AI is revolutionizing industries worldwide by automating processes, enhancing decision-making, and creating new opportunities. This blog dives into how businesses are leveraging AI to stay competitive in a rapidly changing world.',
    date: 'March 28, 2025',
    image: '/images/blog1.jpg',
  },
  {
    id: '1',
    title: 'Ethics in AI Development',
    content: 'As AI continues to grow, ethical considerations become increasingly important. This blog examines the challenges and responsibilities of creating AI systems that are fair, transparent, and beneficial to society.',
    date: 'March 20, 2025',
    image: '/images/blog1.jpg',
  },
];

const BlogPage: React.FC = () => {
  const params = useParams();
  const { id } = params;

  const blogPost = blogData.find((post) => post.id === id);

  if (!blogPost) {
    return <p className="text-center text-gray-500">Blog post not found.</p>;
  }

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Header Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-100 via-white to-purple-100 text-center">
        <h1 className="text-4xl font-bold mb-6 text-purple-700">{blogPost.title}</h1>
        <p className="text-sm text-purple-500">{blogPost.date}</p>
      </section>

      {/* Blog Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
           <Image
                       src={blogPost.image || '/default-image.jpg'}
                       alt={blogPost.title}
                       className="w-full md:w-1/2 object-cover"
                       width={500}
                       height={300}
                     />
          <p className="text-lg leading-relaxed">{blogPost.content}</p>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;