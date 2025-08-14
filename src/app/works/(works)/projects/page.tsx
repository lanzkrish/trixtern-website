'use client';

import React from "react";
import Image from "next/image";

// Glassmorphism style utility (copied from home page for consistency)
const glassClass = "bg-[rgba(30,30,30,0.6)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] shadow-xl rounded-2xl";

const projects = [
  {
    title: "Tarutra Robotics Portal",
    description:
      "A robust web platform for Tarutra Robotics & Automation, streamlining their client onboarding, project management, and internal workflows. Enabled real-time collaboration and improved operational efficiency.",
    image: "https://eu0yhcfg0e.ufs.sh/f/rKAT0N5cfFSd5YLY9DikGQBmTUHxVFuZNnR8tKJzlrXWdAEM",
    link: "https://tarutrarobotics.com/",
  },
  {
    title: "Svadhishthana Green Energy Dashboard",
    description:
      "Developed a custom analytics dashboard for Svadhishthana Green Energy, empowering them to monitor energy production, optimize resources, and provide transparent reporting to stakeholders.",
    image: "https://drive.google.com/file/d/1JPEzm4gSL80CxAdZoDXz6vb9wck9wJRy/view?usp=sharing",
    link: "https://svadhishthana.com",
  },
  {
    title: "Retail AI Automation Suite",
    description:
      "Built an AI-powered automation suite for a retail client, automating inventory management, sales analytics, and customer engagement, resulting in significant cost savings and improved customer satisfaction.",
    image: "/project-retailai.jpg",
    link: "#",
  },
  {
    title: "PC Quicker",
    description:
      "PC Quicker offers fast, reliable PC and laptop repair services right at your doorstep. From hardware issues to software troubleshooting, our expert technicians ensure your devices run smoothly, saving you time and hassle with professional, on-site support.",
    image: "https://eu0yhcfg0e.ufs.sh/f/rKAT0N5cfFSdRbWp1GrKhpGVqx1rNJL0WkZPUEDlem6ts4M5",
    link: "https://pcquicker.com/",
  },
  // Add more projects as needed
];

function WorksShowcase() {
  return (
    <div className="bg-white text-gray-100 min-h-screen">
      {/* Intro & Description */}
      <section className="relative flex flex-col items-center justify-center text-center bg-black overflow-hidden p-6 sm:p-12 md:p-20">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/ai-background.svg')] bg-cover bg-center" />
        <div className={`z-10 max-w-4xl mx-auto px-4 sm:px-8 py-10 `}>
          <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-white leading-tight">
            Project Showcase
          </h1>
          <p className="text-lg sm:text-2xl text-gray-300 mb-6">
            At Trixtern, we empower businesses to expand their reach and streamline operations through innovative, scalable technology solutions. Our projects are designed to solve real-world challenges, helping our partners grow faster, operate smarter, and deliver exceptional value to their customers.
          </p>
          <p className="text-base sm:text-lg text-gray-300">
            From AI-driven automation to custom web platforms, our work accelerates digital transformation for companies across industries. Explore some of our recent projects below and see how we help organizations unlock their full potential.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-8 md:px-16 bg-gradient-to-tr from-gray-900 to-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our Impactful Projects
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              Each project is a testament to our commitment to quality, innovation, and client success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-transform hover:scale-105 ${glassClass} p-6 flex flex-col h-full`}
              >
                <div className="mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={340}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 flex-1">{project.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorksShowcase;