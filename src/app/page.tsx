'use client';

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import "react-calendar/dist/Calendar.css";
import { Globe } from "@/components/magicui/globe";
import Image from "next/image";

// Glassmorphism style utility
const glassClass = "bg-[rgba(30,30,30,0.6)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] shadow-xl rounded-2xl";

function Home() {
  return (
    <div className="bg-gray-200 text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden p-6 sm:p-10 md:p-16  bg-gradient-to-br from-gray-900  via-white to-white">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/ai-background.svg')] bg-cover bg-center " />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`z-10 p-10 max-w-4xl px-2 sm:px-6 ${glassClass}`}
        >
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white">
            Empowering Businesses with Smart, Scalable Tech Solutions
          </h1>
          <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-300">
            We help you streamline workflows and grow with cutting-edge software tailored to your vision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full">
            <Link href="/services">
              <Button variant="primary" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-lg w-full sm:w-auto">
                Explore
              </Button>
            </Link>
            <a href="https://calendly.com/lanzkrish/30min" target="_blank" rel="noopener noreferrer" > 
              <Button variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-lg w-full sm:w-auto">
                Consult
              </Button>
            </a>
          </div>
        </motion.div>
        <Globe className="top-18" />
      </section>

      {/* Who We Are */}
      <section className="hero-section min-h-screen flex flex-col items-center justify-center p-6 sm:p-10 md:p-16 bg-black">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 flex flex-col items-center justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 sm:gap-6 items-center">
            <div className={`mb-4 md:mb-0 ${glassClass} p-6`}>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
                Who We Are
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300">
                We are a tech startup dedicated to crafting powerful software solutions that drive business transformation. Our focus is on developing intuitive web platforms, enterprise tools, and scalable architectures that prepare you for the future. With a commitment to excellence, we ensure our solutions align with your unique vision.
              </p>
            </div>
            <div className="mx-auto sm:rounded-3xl w-full max-w-xxxl">
              <Image
                src="/vector_trixter.jpg"
                alt="Vector"
                width={1920}
                height={1080}
                className="mx-auto mb-4 rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="hero-section min-h-screen flex flex-col items-center justify-center p-6 sm:p-10 md:p-16 ">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 text-center flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-black">
              Our Core Values Drive Success and Innovation in Every Project we Undertake
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-2xl text-gray-600 mb-6 sm:mb-8">
            At Trixtern, we believe in the power of innovation, trust, and excellence. Our values shape our approach to every project, ensuring we deliver solutions that not only meet but exceed expectations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className={`${glassClass} p-6 sm:p-10 md:p-12 text-center transform transition-transform hover:scale-105`}>
              <span className="text-blue-400 text-3xl sm:text-4xl mb-4 sm:mb-8 inline-block">🤝</span>
              <h3 className="text-base sm:text-xl font-semibold text-white mb-2 sm:mb-4">
                Why Our Values Matter to Your Business Growth and Efficiency
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">At trixtern, we believe in values that foster collaboration, creativity and excellence.</p>
            </div>
            <div className={`${glassClass} p-6 sm:p-10 md:p-12 text-center transform transition-transform hover:scale-105`}>
              <span className="text-blue-400 text-3xl sm:text-4xl mb-4 sm:mb-8 inline-block">🎯</span>
              <h3 className="text-base sm:text-xl font-semibold text-white mb-2 sm:mb-4">
                Client-Centric Approach: Your Needs Are Our Top Priority in Every Solution
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">We prioritize your goals to ensure tailored solutions that truly resonate.</p>
            </div>
            <div className={`${glassClass} p-6 sm:p-10 md:p-12 text-center transform transition-transform hover:scale-105`}>
              <span className="text-blue-400 text-3xl sm:text-4xl mb-4 sm:mb-8 inline-block">🧠</span>
              <h3 className="text-base sm:text-xl font-semibold text-white mb-2 sm:mb-4">
                Agile Development: Adapting Quickly to Changes for Optimal Results
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">Our agile methodology ensures we stay responsive to your evolving needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="hero-section min-h-screen flex flex-col items-center justify-center p-6 sm:p-10 md:p-16 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 text-center flex flex-col items-center justify-center w-full">
          <div className="flex flex-col items-center justify-center mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-black">
              What We Do
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-2xl text-gray-600 mb-6 sm:mb-8">
            Explore a wide range of services designed to empower your businesses. From web development to enterprise and AI solutions, we have you covered.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className={`${glassClass} p-6 sm:p-10 md:p-12 text-center transform transition-transform hover:scale-105`}>
              <span className="block mb-4 sm:mb-8">
                <Image
                  src={"/Customwebdevelopment.png"}
                  alt="Custom Web Development"
                  width={400}
                  height={225}
                  className="mx-auto mb-2 sm:mb-4 rounded-lg w-full h-auto"
                />
              </span>
              <h3 className="text-base sm:text-xl font-semibold text-white mb-2 sm:mb-4">Custom Web Development</h3>
              <p className="text-xs sm:text-sm text-gray-300">Tailored web solutions to elevate your online presence.</p>
            </div>
            <div className={`${glassClass} p-6 sm:p-10 md:p-12 text-center transform transition-transform hover:scale-105`}>
              <span className="block mb-4 sm:mb-8">
                <Image
                  src={"/Mobileappdevelopment.png"}
                  alt="Mobile App Development"
                  width={400}
                  height={225}
                  className="mx-auto mb-2 sm:mb-4 rounded-lg w-full h-auto"
                />
              </span>
              <h3 className="text-base sm:text-xl font-semibold text-white mb-2 sm:mb-4">Mobile App Development</h3>
              <p className="text-xs sm:text-sm text-gray-300">Innovative mobile applications that engage your users.</p>
            </div>
            <div className={`${glassClass} p-6 sm:p-10 md:p-12 text-center transform transition-transform hover:scale-105`}>
              <span className="block mb-4 sm:mb-8">
                <Image
                  src={"/Ai&Automation.png"}
                  alt="AI & Automation Solutions"
                  width={400}
                  height={225}
                  className="mx-auto mb-2 sm:mb-4 rounded-lg w-full h-auto"
                />
              </span>
              <h3 className="text-base sm:text-xl font-semibold text-white mb-2 sm:mb-4">AI & Automation Solutions</h3>
              <p className="text-xs sm:text-sm text-gray-300">Leverage AI to streamline processes and enhance productivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="hero-section min-h-screen flex flex-col items-center justify-center p-6 sm:p-10 md:p-16 ">
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-2 sm:px-6 text-center lg:text-left items-center justify-center gap-6 w-full">
          <div className={`w-full lg:w-1/2 flex flex-col items-center lg:items-start ${glassClass} p-6`}>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white max-w-xl">
              Why Businesses Trust Trixtern
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
              At Trixtern, we prioritize your success with innovative solutions. Our commitment to quality and transparency sets us apart.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
              <div className={`${glassClass} p-6 sm:p-10 md:p-12 transform transition-transform hover:scale-105 text-center sm:text-left`}>
                <span className="text-blue-400 text-3xl sm:text-4xl mb-2 sm:mb-4 inline-block">🚀</span>
                <h3 className="text-base sm:text-lg font-semibold text-white">Proven Reliability</h3>
                <p className="text-xs sm:text-sm text-gray-300">Our clients appreciate our dedication to delivering results on time and within budget.</p>
              </div>
              <div className={`${glassClass} p-6 sm:p-10 md:p-12 transform transition-transform hover:scale-105 text-center sm:text-left`}>
                <span className="text-blue-400 text-3xl sm:text-4xl mb-2 sm:mb-4 inline-block">💡</span>
                <h3 className="text-base sm:text-lg font-semibold text-white">Expert Support</h3>
                <p className="text-xs sm:text-sm text-gray-300">We provide ongoing assistance to ensure your solutions evolve with your business needs.</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <Image
              src={"/trust.jpg"}
              alt="Trust"
              width={400}
              height={225}
              className="mx-auto mb-4 rounded-lg w-full h-auto max-w-md"
            />
          </div>
        </div>
        <blockquote className={`${glassClass} mt-8 sm:mt-12 rounded-lg p-4 sm:p-6 italic text-gray-200 text-base sm:text-lg max-w-3xl mx-auto`}>
          “Innovation and trust are at the heart of everything we build.”
        </blockquote>
      </section>

      {/* Testimonials */}
      <section className="hero-section min-h-screen flex flex-col items-center justify-center p-6 sm:p-10 md:p-16 bg-white">
        <div className="max-w-5xl mx-auto px-2 sm:px-6 text-center flex flex-col items-center justify-center w-full">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-black">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
            Hear from the businesses we&apos;ve helped transform.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className={`${glassClass} p-6 sm:p-10 md:p-12 text-center`}>
              <p className="text-yellow-400 text-xl sm:text-2xl mb-2 sm:mb-4">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-200 italic mb-2 sm:mb-4 text-sm sm:text-base">
                “Trixtern transformed our entire digital process. Efficient, smart, and always supportive.”
              </p>
              <h3 className="text-base sm:text-lg font-semibold text-white">— Ronak Mohanty, Director, Tarutra Robotics & Automation</h3>
            </div>
            <div className={`${glassClass} p-6 sm:p-10 md:p-12 text-center`}>
              <p className="text-yellow-400 text-xl sm:text-2xl mb-2 sm:mb-4">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-200 italic mb-2 sm:mb-4 text-sm sm:text-base">
                “Professional team with brilliant solutions. Highly recommended.”
              </p>
              <h3 className="text-base sm:text-lg font-semibold text-white">— Siten Sahoo, Director, Svadhishthana Green Energy</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="hero-section max-h-100 flex flex-col items-center justify-center p-6 sm:p-10 md:p-16 bg-gradient-to-tl from-gray-900  via-white to-white">
        <div className={`max-w-7xl mx-auto px-2 sm:px-6 text-center flex flex-col items-center justify-center w-full ${glassClass} p-6`}>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
            Let&apos;s build something incredible together. <br /> Whether it&apos;s an app, a website, or an enterprise tool – we&apos;ve got your back.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full">
          <Link href="https://calendly.com/lanzkrish/30min" target="_blank" rel="noopener noreferrer" > 
              <Button variant="primary" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-lg w-full sm:w-auto">
                Book a Call
              </Button>
            </Link>
            <Link href="/contact-us" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-lg w-full sm:w-auto">
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