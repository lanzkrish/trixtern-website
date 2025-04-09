'use client'

import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
// import { Calendar } from "react-calendar";
// import { Search } from "lucide-react";
import "react-calendar/dist/Calendar.css";
// import "./App.css";

function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-100 via-white to-purple-100 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/ai-background.svg')] bg-cover bg-center" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="z-10 max-w-4xl px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Future-Ready AI & FinTech Solutions</h1>
          <p className="text-xl md:text-2xl mb-8">Empowering businesses with intelligent automation.</p>
          <Button className="text-lg px-8 py-4 bg-blue-400 hover:bg-blue-500 text-black rounded-2xl shadow-lg">Get a Free Consultation</Button>
        </motion.div>
      </section>

      {/* Trusted Clients */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-6">Trusted by Industry Leaders</h2>
        <div className="flex justify-center flex-wrap gap-8">
          {[1, 2, 3, 4, 5].map((id) => (
            <div key={id} className="h-12 w-32 bg-gray-200 rounded shadow-sm"></div>
          ))}
        </div>
      </section>

      {/* Key Services Overview */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-14">Our Core Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { title: "AI Automation", desc: "Boost productivity through smart workflows." },
            { title: "FinTech Security", desc: "Safeguard digital assets with cutting-edge security." },
            { title: "Smart Data Analytics", desc: "Unlock insights from complex data sets." },
            { title: "Blockchain Integration", desc: "Empower your business with secure decentralized solutions." },
          ].map((service, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }}>
              <Card className="rounded-2xl shadow-md">
                <CardContent className="p-6">
                  <div className="h-12 w-12 mb-4 bg-blue-200 rounded-full" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <Button variant="outline">Learn More</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[1, 2, 3].map((id) => (
            <Card key={id} className="rounded-xl shadow-md overflow-hidden">
              <CardContent className="p-6 bg-white h-48 flex items-center justify-center">
                <p className="text-gray-600">Project {id} Case Study</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-14">Client Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[1, 2, 3].map((id) => (
            <Card key={id} className="rounded-2xl p-6 shadow-md">
              <div className="mb-4 h-14 w-14 bg-gray-300 rounded-full mx-auto"></div>
              <p className="italic text-center">“Exceptional results, seamless experience!”</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center ">
        <h2 className="text-3xl font-semibold mb-6">Lets Discuss Your Project</h2>
        <Button className="bg-black text-white px-8 py-4 rounded-2xl text-lg">Contact Us</Button>
      </section>
    </div>
  );
}

  
  export default Home;