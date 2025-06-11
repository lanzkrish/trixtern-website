'use client';

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import "react-calendar/dist/Calendar.css";
import { Globe } from "@/components/magicui/globe";
import Image from "next/image";


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
              Explore
            </Button>
          </Link>
          <Link href="/contact-us">
            <Button variant="outline" className="outline text-lg px-8 py-4 text-blue-400 hover:text-blue-500  border-2 border-blue-500 rounded-2xl shadow-lg m-4" >
              Consult
            </Button>
          </Link>
          </div>
        </motion.div>
        <Globe className="top-18 "  />
      </section>
      <section className="hero-section p-16">
  <div className="max-w-7xl mx-auto px-6 text-space-between ">
    <div className="grid place-content-between grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <div className="flex-initial m-3 y-5 mr-12">
        {/* <p>Innovate</p> */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 flex-initial">
        Who We Are
      </h2>
      </div>
    <p className="text-lg md:text-xl text-gray-700 mb-8 flex-auto max-w-xl">
      We are a tech startup dedicated to crafting powerful software solutions that drive business transformation. Our focus is on developing intuitive web platforms, enterprise tools, and scalable architectures that prepare you for the future. With a commitment to excellence, we ensure our solutions align with your unique vision.
    </p>
    </div>
    <div>
   
    </div>
    <div className=" mx-auto sm:rounded-3xl">
    <Image src="/vector_trixter.jpg" 
    alt="Vector" 
    width={1280} 
    height={723} 
    className="mx-auto mb-6 rounded-2xl" />
      
    </div>
  </div>
</section>
<section className="hero-section p-16 bg-gradient-to-br from-white to-blue-50">
  <div className="max-w-7xl mx-auto px-6 text-center items-center">
    <div className="items-center flex justify-center mb-6">
      <h2 className="text-4xl max-w-5xl md:text-5xl font-bold mb-6 text-gray-900 ">
      Our Core Values Drive Success and Innovation in Every Project we Undertake
    </h2>
    </div>
    <p className="text-lg md:text-xl text-gray-700 mb-8">
      At Trixtern, we believe in the power of innovation, trust, and excellence. Our values shape our approach to every project, ensuring we deliver solutions that not only meet but exceed expectations.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
      <div className="bg-white shadow-md rounded-lg p-12 text-center transform transition-transform hover:scale-105">
        <span className="text-blue-500 text-4xl mb-8 inline-block">🤝</span>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Our Values Matter to Your Business Growth and Efficiency</h3>
        <p className="text-sm">At trixtern, we belive in values that foster collaboration, creativity and excellence.</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-12 text-center transform transition-transform hover:scale-105">
        <span className="text-blue-500 text-4xl mb-8 inline-block">🎯</span>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Client-Centric Approach: Your Needs Are Our Top Priority in Every Solution</h3>
        <p>We Prioritize your goals to ensure tailored solutions that truly resonate.</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-12 text-center transform transition-transform hover:scale-105">
        <span className="text-blue-500 text-4xl mb-8 inline-block">🧠</span>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Agile Developement: Adapting Quickly to Changes for optimal Results</h3>
        <p>Our agile methodology ensures we stay responsive to your evolving needs.</p>
      </div>
      
    </div>
  </div>
</section>
<section className="hero-section p-16 bg-gradient-to-br from-white to-blue-50">
  <div className="max-w-7xl mx-auto px-6 text-center items-center">
    {/* <p className="mb-8 font-semibold">Services</p> */}
    <div className="items-center flex justify-center mb-6">
      <h2 className="text-4xl max-w-5xl md:text-5xl font-bold mb-6 text-gray-900 ">
      What We Do
    </h2>
    </div>
    <p className="text-lg md:text-xl text-gray-700 mb-8">
      Explore a weide range of services designed to empower your businesses. From web development to enterprise and AI solutions, we have you covered.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
      <div className="bg-white shadow-md rounded-lg p-12 text-center transform transition-transform hover:scale-105">
        <span className="text-blue-500 text-4xl mb-8 inline-block">
          <Image
        src={"/Customwebdevelopment.png"}
        alt="Custom Web Development"
        width={1280} 
        height={723} 
        className="mx-auto mb-4 rounded-lg"
        />
        </span>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Custom web Development</h3>
        <p className="text-sm">
          Tailored web solutions to elevate your online presence.
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-12 text-center transform transition-transform hover:scale-105">
        <span className="text-blue-500 text-4xl mb-8 inline-block">
          <Image
        src={"/Mobileappdevelopment.png"}
        alt="Custom Web Development"
        width={1280} 
        height={723} 
        className="mx-auto mb-4 rounded-lg"
        />
        </span>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Mobile App Development</h3>
        <p>Innovative mobiles applications that engage your users.</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-12 text-center transform transition-transform hover:scale-105">
        <span className="text-blue-500 text-4xl mb-8 inline-block">
          <Image
        src={"/Ai&Automation.png"}
        alt="Custom Web Development"
        width={1280} 
        height={723} 
        className="mx-auto mb-4 rounded-lg"
        />
        </span>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">AI & Automation Solutions</h3>
        <p>Leverage AI to streamline processes and enhance productivity.</p>
      </div>
      
    </div>
  </div>
</section>

<section className="hero-section p-16 bg-gradient-to-br from-blue-50 to-white flex-col items-center justify-center">
  <div className="flex flex-row max-w-7xl mx-auto px-6 text-center items-center justify-between">
    <div className=" max-w-9xl mx-auto px-6 text-left flex-col items-center justify-center">
    <div>
      <h2 className="text-4xl max-w-xl md:text-5xl font-bold mb-6 text-gray-900">
      Why Businesses Trust Trixtern
    </h2>
    <p className="text-lg md:text-xl text-gray-700 mb-8">
      At Trixtern, we prioritize your success with innovative solitions. Our commitment to quality and transparency sets us apart.
    </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto flex-col items-center justify-center text-left">
      <div className="bg-white shadow-md rounded-lg p-12 transform transition-transform hover:scale-105">
        <span className="text-blue-500 text-4xl mb-4 inline-block">🚀</span>
        <h3 className="text-lg font-semibold text-gray-800">Proven Reliability</h3>
        <p>Our clients appreciate our dedication to delivering results on time and within budget.</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-12  transform transition-transform hover:scale-105">
        <span className="text-blue-500 text-4xl mb-4 inline-block">💡</span>
        <h3 className="text-lg font-semibold text-gray-800">Expert Support</h3>
        <p>We provide ongoing assistance to ensure your solutions evolve with your business needs.</p>
      </div>
    </div>
    
  </div>
    <div className="basis-150 mx-auto px-6 text-center">
      <Image
        src={"/trust.jpg"}
        alt="Custom Web Development"
        width={1280} 
        height={723} 
        className="mx-auto mb-4 rounded-lg"
        />
    </div>
  </div>
  <blockquote className="mt-12 bg-gray-100 rounded-lg p-6 italic text-gray-700 text-lg max-w-3xl mx-auto">
      “Innovation and trust are at the heart of everything we build.”
    </blockquote>
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
  <div className="max-w-7xl mx-auto px-6 text-center flex justify-around items-center">
    <div className="max-w-5xl mx-auto px-6 text-left">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
      Ready to Transform Your Business?
    </h2>
    <p className="text-lg md:text-xl text-gray-700 mb-8">
      Let&apos;s build something incredible together. <br></br> Whether it&apos;s an app, a website, or an enterprise tool – we&apos;ve got your back.
    </p>
    
  </div>
  <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link href="https://calendly.com/lanzkrish/30min">
        <Button className="text-lg px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl shadow-lg">
          Book a Call
        </Button>
      </Link>
      <Link href="/contact-us">
        <Button variant="outline" className="text-lg px-8 py-4   hover:text-blue-500 text-blue-400 rounded-2xl shadow-lg">
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