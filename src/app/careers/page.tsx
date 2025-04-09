'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* About Our Company */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-100 via-white to-purple-100 text-center">
        <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
        <p className="text-lg max-w-3xl mx-auto">
          At Trixtern Technologies, we are committed to innovation, collaboration, and excellence. 
          Join a team of passionate individuals who are shaping the future of AI, FinTech, and beyond.
        </p>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-14">Open Positions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Software Engineer",
              location: "Remote",
              description: "Build and maintain scalable software solutions.",
            },
            {
              title: "Data Scientist",
              location: "San Francisco, CA",
              description: "Analyze complex datasets to drive business decisions.",
            },
            {
              title: "Product Manager",
              location: "New York, NY",
              description: "Lead product development and strategy.",
            },
            {
              title: "UI/UX Designer",
              location: "Remote",
              description: "Design intuitive user experiences for our products.",
            },
            {
              title: "DevOps Engineer",
              location: "Austin, TX",
              description: "Ensure smooth deployment and infrastructure management.",
            },
            {
              title: "Marketing Specialist",
              location: "Remote",
              description: "Develop and execute marketing campaigns.",
            },
          ].map((position, idx) => (
            <Card key={idx} className="rounded-xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{position.location}</p>
                <p className="text-gray-600 mb-6">{position.description}</p>
                <Button variant="outline" className="w-full">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}