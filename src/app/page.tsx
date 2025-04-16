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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Future-Ready AI & FinTech Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Empowering businesses with intelligent automation.
          </p>
          <Link href="/contact-us">
            <Button className="text-lg px-8 py-4 bg-blue-400 hover:bg-blue-500 text-black rounded-2xl shadow-lg">
              Get a Free Consultation
            </Button>
          </Link>
        </motion.div>
        <Globe className="top-48 "  />
      </section>
    </div>
  );
}

export default Home;