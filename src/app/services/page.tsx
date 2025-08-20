'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import PageHeader from "@/components/ui/page-header";
import TechWeUse from "@/components/TechWeUse";
// import { Globe } from "@/registry/magicui/globe";

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <PageHeader 
        title="Our Services" 
        description="Empowering businesses with cutting-edge technology solutions." 
      />

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-950">
        <h2 className="text-3xl font-bold text-center mb-14 text-gray-100">
          What We Offer
        </h2>
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
            <Card 
              key={idx} 
              className="rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="bg-white text-gray-100">
      <div className="py-20 px-6 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-7 text-gray-200">
          What We Use
        </h2>

        <div className="text-center text-gray-100 mb-12">

          We utilize cutting-edge technologies like AI, Blockchain, and Cloud Computing to deliver exceptional results.
        </div>
        <TechWeUse/>
      </div>
      </section>
    </div>
  );
};

export default ServicesPage;