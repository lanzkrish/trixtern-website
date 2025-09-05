'use client';

import React from "react";
import Image from "next/image";

// Glassmorphism style utility (copied from home page for consistency)
const glassClass = "bg-[rgba(30,30,30,0.6)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] shadow-xl rounded-2xl";

const projects = [
  {
    title: "Tarutra Robotics",
    description:
      "Tarutra Robotics delivers customized automation, conveyor systems, underwater robots, and R&D solutions, enhancing efficiency, productivity, and business growth.",
    image: "https://eu0yhcfg0e.ufs.sh/f/rKAT0N5cfFSdfWnqyVHX6ZWTu1rgVohDOblnBGcz9tNjUKQ3",
    link: "https://tarutrarobotics.com/",
  },
  {
    title: "PC Quicker",
    description:
      "PC Quicker offers fast, reliable PC and laptop repair services right at your doorstep. From hardware issues to software troubleshooting, our expert technicians ensure your devices run smoothly, saving you time and hassle with professional, on-site support.",
    image: "https://eu0yhcfg0e.ufs.sh/f/rKAT0N5cfFSdKzIMu9lHcSwb1zemn8g7XJP6a3290hOuIxrk",
    link: "https://pcquicker.com/",
  },
  {
    title: "Svadhishthana Green Energy",
    description:
      "Svadhishthana Green Energy provides renewable energy solutions like solar panels, hybrid harvesters, and storage systems. Focused on sustainability, innovation, and education, it delivers reliable, affordable, and customizable products to promote a cleaner, brighter future.",
    image: "https://eu0yhcfg0e.ufs.sh/f/rKAT0N5cfFSderFSyVEOyPV901jHK78Rzw6423fANCIqthUb",
    link: "https://svadhishthana.com",
  },

  {
    title: "Tooros",
    description:
      "Tooros, a leading self-drive car and bike rental service in Odisha, offers well-maintained vehicles at fair prices. With 5 years of trust, it ensures reliability, on-time delivery, and roadside assistance.",
    image: "https://eu0yhcfg0e.ufs.sh/f/rKAT0N5cfFSdN7Xp5328MlohEkjYq7CwXfmQVPb6sGciz09W",
    link: "https://apps.apple.com/in/app/tooros-self-drive-car-rental/id6557049825",
  },
  {
    title: "MOVEHAWK",
    description:
      "MOVEHAWK delivers advanced telematics solutions with real-time tracking, analytics, and insights to optimize fleet management and ensure maximum efficiency.",
    image: "https://eu0yhcfg0e.ufs.sh/f/rKAT0N5cfFSd2zzZcNI3AXvWige0pzkncFb4QBZMwqxR9DYN",
    link: "https://apps.apple.com/in/app/tooros-self-drive-car-rental/id6557049825",
  },
  {
    title: "Kamya Foods",
    description:
      "Founded in 1965, Mahakali Attakala is a trusted Odia kitchen brand, known for quality products, finest ingredients, careful processing, and strong customer loyalty built through word-of-mouth.",
    image: "https://eu0yhcfg0e.ufs.sh/f/rKAT0N5cfFSdj4TunkSrdb2N6D4zYUheqXyBliK8WpaLJQ1f",
    link: "https://play.google.com/store/apps/details?id=kamya.app&pcampaignid=web_share",
  },
  {
    title: "Drivo",
    description:
      "Drivo offers affordable self-drive car rentals in Bhubaneswar and at the airport, providing comfort, flexibility, and reliability for trips, getaways, business travel, and airport pickups across Odisha.",
    image: "https://eu0yhcfg0e.ufs.sh/f/rKAT0N5cfFSdiXj384x37NpskaPHg9YKATLnrCU8czIuBS2E",
    link: "https://drivo.in/",
  },
  // {
  //   title: "Retail AI Automation Suite",
  //   description:
  //     "Built an AI-powered automation suite for a retail client, automating inventory management, sales analytics, and customer engagement, resulting in significant cost savings and improved customer satisfaction.",
  //   image: "https://eu0yhcfg0e.ufs.sh/f/rKAT0N5cfFSd5IgNpFikGQBmTUHxVFuZNnR8tKJzlrXWdAEM",
  //   link: "#",
  // },
  {
    title: "Havana Club",
    description:
      "PC Quicker offers fast, reliable PC and laptop repair services right at your doorstep. From hardware issues to software troubleshooting, our expert technicians ensure your devices run smoothly, saving you time and hassle with professional, on-site support.",
    image: "https://eu0yhcfg0e.ufs.sh/f/rKAT0N5cfFSdLr2nDNerJhEVl34f7b1pMKtnuSWodYw652Xz",
    link: "https://havana-club.com/en/",
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
              Our Impactful Projects & Clients
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