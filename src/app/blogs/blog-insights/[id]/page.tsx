'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface BlogPost {
  id: string;
  title: string;
  content?: string; // Single HTML string
  date: string;
  image?: string;
  contentPath?: string; // Path to external content file
}

const blogData: BlogPost[] = [
  {
    id: '6',
    title: 'AI in Fintech: Top Use Cases & Trends to Watch in 2025',
    contentPath: './blogContents/content6', // Reference to the content file
    date: 'April 16, 2025',
    image: '',
  },
  {
    id: '5',
    title: 'The Role of AI in Gaming: How Artificial Intelligence is Powering the Future of Games',
    contentPath: './blogContents/content5', // Reference to the content file
    date: 'April 12, 2025',
    image: '/pexels-pavel-danilyuk-8438922.jpg',
  },
  {
    id: '4',
    title: 'Ai in Healthcare: Revolutionizing Patient Care',
    contentPath: './blogContents/content4', // Reference to the content file
    date: 'April 9, 2025',
    image: '/pexels-googledeepmind-17483868.jpg',
  },
  {
    id: '3',
    title: 'The Future of AI: Trends to Watch',
    contentPath: './blogContents/content3', // Reference to the content file
    date: 'April 5, 2025',
    image: '',
  },
  {
    id: '2',
    title: 'How AI is Transforming Businesses',
    contentPath: './blogContents/content2', // Reference to the content file
    date: 'March 28, 2025',
    image: '/images/blog1.jpg',
  },
  {
    id: '1',
    title: 'Ethics in AI Development',
    contentPath: './blogContents/content1', // Reference to the content file
    date: 'March 20, 2025',
    image: '',
  },
];

const BlogPage: React.FC = () => {
  const params = useParams();
  const { id } = params;

  const blogPost = blogData.find((post) => post.id === id);

  const [ContentComponent, setContentComponent] = React.useState<React.FC | null>(null);

  React.useEffect(() => {
    if (blogPost?.contentPath) {
      import(`${blogPost.contentPath}`).then((module) => {
        setContentComponent(() => module.default);
      });
    }
  }, [blogPost]);

  if (!blogPost) {
    return <p className="text-center text-gray-500">Blog post not found.</p>;
  }

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Header Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-700">{blogPost.title}</h1>
        <p className="text-sm text-gray-500">{blogPost.date}</p>
      </section>

      {/* Blog Content */}
      <section className="pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto bg-gray-200 rounded-lg shadow-md p-8">
          {blogPost.image && (
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              width={800}
              height={800}
            />
          )}
          {ContentComponent ? (
            <ContentComponent />
          ) : (
            <p className="text-center text-gray-500">Loading content...</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;