'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-100 via-white to-purple-100 text-center">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Empowering businesses with cutting-edge technology solutions.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-14">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "AI-driven Automation",
              description: "Streamline your operations with intelligent automation solutions powered by AI.",
            },
            {
              title: "FinTech Solutions & Smart Trading Systems",
              description: "Revolutionize financial services with innovative FinTech solutions and trading systems.",
            },
            {
              title: "AI-powered Data Analytics & Insights",
              description: "Unlock actionable insights with advanced AI-driven data analytics.",
            },
            {
              title: "Cybersecurity & Compliance",
              description: "Protect your business with robust cybersecurity and compliance solutions.",
            },
            {
              title: "Cloud & Blockchain Integration for FinTech",
              description: "Leverage the power of cloud and blockchain for secure and scalable FinTech applications.",
            },
            {
              title: "Custom Software Development",
              description: "Build tailored software solutions to meet your unique business needs.",
            },
          ].map((service, idx) => (
            <Card key={idx} className="rounded-xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;