// filepath: /Users/dhananjaysahoo/Startup/trixtern-website/src/app/contact-us/thank-you/page.tsx
'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ThankYou: React.FC = () => {
  const [countdown, setCountdown] = useState(5); // Countdown timer starts at 5 seconds
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000); // Decrement every 1 second (1000ms)

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      router.push("/"); // Redirect to the home page when countdown reaches 0
    }
  }, [countdown, router]);

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Header Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-100 via-white to-blue-100 text-center">
        <h1 className="text-4xl font-bold text-blue-700">Thank You!</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
          Your message has been successfully sent. We will get back to you as soon as possible.
        </p>
        <p className="mt-4 text-sm text-gray-500">
            Redirecting to the home page in <span className="font-bold">{countdown}</span> seconds...
          </p>
      </section>

      {/* Illustration Section */}
      <section className="py-12 px-6">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/pexels-googledeepmind-17485657.jpg" // Replace with your illustration path
            alt="Thank You Illustration"
            className="w-50 md:w-1/4 object-cover rounded-lg shadow-lg mb-6"
            width={800}
            height={500}
          />
          <p className="text-gray-600 text-center">
            In the meantime, feel free to explore our website or check out our latest blogs for more insights.
          </p>
          
          <a
            href="/blogs"
            className="mt-6 px-6 py-3 bg-gray-100 text-blue-600 border-blue-600 font-medium rounded-md shadow-md ring-2 ring-blue-500 hover:bg-blue-600 hover:text-gray-100 hover:ring-blue-700 focus:outline-blue-700 focus:ring-2 focus:ring-blue-900"
          >
            Go to Blogs
          </a>
          
        </div>
      </section>
    </div>
  );
};

export default ThankYou;