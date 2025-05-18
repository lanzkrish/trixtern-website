'use client';

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import "react-calendar/dist/Calendar.css";
import { Globe } from "@/components/magicui/globe";


function Home() {
  return (
    <div className="bg-white text-gray-900 ">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-100 via-white to-purple-100 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/ai-background.svg')] bg-cover bg-center" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 max-w-4xl px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight ">
          Empowering Businesses with Smart, Scalable Tech Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8">
          We help you streamline workflows and grow with cutting-edge software tailored to your vision.
          </p>
          <div className="flex justify-center">
          <Link href="/services">
            <Button className="text-lg px-8 py-4 bg-blue-400 hover:bg-blue-500 text-black rounded-2xl shadow-lg m-4">
              Explore Our Services
            </Button>
          </Link>
          <Link href="/contact-us">
            <Button className="text-lg px-8 py-4 bg-blue-400 hover:bg-blue-500 text-black rounded-2xl shadow-lg m-4">
              Get a Free Consultation
            </Button>
          </Link>
          </div>
        </motion.div>
        <Globe className="top-18 "  />
      </section>
      <section className="hero-section p-16">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
      Who We Are
    </h2>
    <p className="text-lg md:text-xl text-gray-700 mb-8">
      We are a tech startup dedicated to building powerful software solutions that transform businesses. From intuitive web platforms to enterprise-grade tools, we specialize in scalable and future-ready products.
    </p>
    <div>
   
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  max-w-4xl mx-auto sm:rounded-3xl p-8">
      <div className="bg-gray-100 shadow-md rounded-lg p-12 text-center">
        <span className="text-green-500 text-3xl mb-4 inline-block">✅</span>
        <h3 className="text-lg font-semibold text-gray-800">Client-Centric Approach</h3>
      </div>
      <div className="bg-gray-100 shadow-md rounded-lg p-12 text-center">
        <span className="text-green-500 text-3xl mb-4 inline-block">✅</span>
        <h3 className="text-lg font-semibold text-gray-800">Agile Development</h3>
      </div>
      <div className="bg-gray-100 shadow-md rounded-lg p-12 text-center">
        <span className="text-green-500 text-3xl mb-4 inline-block">✅</span>
        <h3 className="text-lg font-semibold text-gray-800">Scalable Architecture</h3>
      </div>
      <div className="bg-gray-100 shadow-md rounded-lg p-12 text-center">
        <span className="text-green-500 text-3xl mb-4 inline-block">✅</span>
        <h3 className="text-lg font-semibold text-gray-800">Premium UI/UX Design</h3>
      </div>
    </div>
  </div>
</section>
<section className="hero-section p-16 bg-gradient-to-br from-white to-blue-50">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
      What We Do
    </h2>
    <p className="text-lg md:text-xl text-gray-700 mb-8">
      Explore our wide range of services designed to empower your business.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <div className="bg-white shadow-md rounded-lg p-12 text-center transform transition-transform hover:scale-105">
        <span className="text-blue-500 text-4xl mb-8 inline-block">💻</span>
        <h3 className="text-xl font-semibold text-gray-800">Custom Web Development</h3>
      </div>
      <div className="bg-white shadow-md rounded-lg p-12 text-center transform transition-transform hover:scale-105">
        <span className="text-blue-500 text-4xl mb-8 inline-block">📱</span>
        <h3 className="text-xl font-semibold text-gray-800">Mobile App Development</h3>
      </div>
      <div className="bg-white shadow-md rounded-lg p-12 text-center transform transition-transform hover:scale-105">
        <span className="text-blue-500 text-4xl mb-8 inline-block">🧠</span>
        <h3 className="text-xl font-semibold text-gray-800">AI & Automation Solutions</h3>
      </div>
      <div className="bg-white shadow-md rounded-lg p-12 text-center transform transition-transform hover:scale-105">
        <span className="text-blue-500 text-4xl mb-8 inline-block">🌐</span>
        <h3 className="text-xl font-semibold text-gray-800">Enterprise Workflow Tools</h3>
      </div>
      <div className="bg-white shadow-md rounded-lg p-12 text-center transform transition-transform hover:scale-105">
        <span className="text-blue-500 text-4xl mb-8 inline-block">📈</span>
        <h3 className="text-xl font-semibold text-gray-800">Business Intelligence & Analytics</h3>
      </div>
      <div className="bg-white shadow-md rounded-lg p-12 text-center transform transition-transform hover:scale-105">
        <span className="text-blue-500 text-4xl mb-8 inline-block">🔐</span>
        <h3 className="text-xl font-semibold text-gray-800">Cybersecurity & Cloud Integration</h3>
      </div>
    </div>
  </div>
</section>
<section className="hero-section p-16 bg-gradient-to-br from-blue-50 to-white">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
      Why Businesses Trust Trixtern
    </h2>
    <p className="text-lg md:text-xl text-gray-700 mb-8">
      Discover why we are the preferred choice for businesses worldwide.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <div className="bg-white shadow-md rounded-lg p-12 text-center transform transition-transform hover:scale-105">
        <span className="text-blue-500 text-4xl mb-4 inline-block">🚀</span>
        <h3 className="text-lg font-semibold text-gray-800">Fast Delivery</h3>
      </div>
      <div className="bg-white shadow-md rounded-lg p-12 text-center transform transition-transform hover:scale-105">
        <span className="text-blue-500 text-4xl mb-4 inline-block">🎨</span>
        <h3 className="text-lg font-semibold text-gray-800">Premium Design</h3>
      </div>
      <div className="bg-white shadow-md rounded-lg p-12 text-center transform transition-transform hover:scale-105">
        <span className="text-blue-500 text-4xl mb-4 inline-block">⚙️</span>
        <h3 className="text-lg font-semibold text-gray-800">Robust Architecture</h3>
      </div>
      <div className="bg-white shadow-md rounded-lg p-12 text-center transform transition-transform hover:scale-105">
        <span className="text-blue-500 text-4xl mb-4 inline-block">🤝</span>
        <h3 className="text-lg font-semibold text-gray-800">Long-Term Support</h3>
      </div>
      <div className="bg-white shadow-md rounded-lg p-12 text-center transform transition-transform hover:scale-105">
        <span className="text-blue-500 text-4xl mb-4 inline-block">📊</span>
        <h3 className="text-lg font-semibold text-gray-800">Transparent Workflow</h3>
      </div>
    </div>
    <blockquote className="mt-12 bg-gray-100 rounded-lg p-6 italic text-gray-700 text-lg max-w-3xl mx-auto">
      “Innovation and trust are at the heart of everything we build.”
    </blockquote>
  </div>
</section>
<section className="hero-section p-16 bg-gradient-to-br from-white to-gray-50">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
      What Our Clients Say
    </h2>
    <p className="text-lg md:text-xl text-gray-700 mb-8">
      Hear from the businesses we&apos;ve helped transform.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <p className="text-yellow-500 text-2xl mb-4">⭐⭐⭐⭐⭐</p>
        <p className="text-gray-700 italic mb-4">
          “Trixtern transformed our entire digital process. Efficient, smart, and always supportive.”
        </p>
        <h3 className="text-lg font-semibold text-gray-800">— Rahul M., CEO, XCorp</h3>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <p className="text-yellow-500 text-2xl mb-4">⭐⭐⭐⭐⭐</p>
        <p className="text-gray-700 italic mb-4">
          “Professional team with brilliant solutions. Highly recommended.”
        </p>
        <h3 className="text-lg font-semibold text-gray-800">— Meena S., Project Manager</h3>
      </div>
    </div>
  </div>
</section>
<section className="hero-section p-16 bg-gradient-to-br from-blue-100 to-purple-100">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
      Ready to Transform Your Business?
    </h2>
    <p className="text-lg md:text-xl text-gray-700 mb-8">
      Let&apos;s build something incredible together. Whether it&apos;s an app, a website, or an enterprise tool – we&apos;ve got your back.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link href="https://calendly.com/lanzkrish/30min">
        <Button className="text-lg px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl shadow-lg">
          Book a Call
        </Button>
      </Link>
      {/* <Link href="/get-started">
        <Button className="text-lg px-8 py-4  bg-blue-500 hover:bg-blue-600 text-white rounded-2xl shadow-lg">
          Get Started
        </Button>
      </Link> */}
      <Link href="/contact-us">
        <Button className="text-lg px-8 py-4  bg-blue-500 hover:bg-blue-600 text-white rounded-2xl shadow-lg">
          Contact Us
        </Button>
      </Link>
    </div>
  </div>
</section>
    </div>
  );
}

export default Home;