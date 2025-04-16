'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/ui/page-header";
import { jobs } from "@/app/careers/components/jobs";
import Link from "next/link";

export default function CareersPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Page Header */}
      <PageHeader
        title="Careers at Trixtern Technologies"
        description="Join us in shaping the future of technology. We are a team of innovators, thinkers, and doers, dedicated to pushing the boundaries of what's possible."
      />

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden text-white text-center">
        <video poster="/videos/preview/3254011-uhd_1280_720_still.png"
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/3254011-uhd_1280_720_25fps.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col justify-center items-center h-full bg-black/50">
          <h2 className="text-4xl font-bold mb-4">Be a part of the next Revolution</h2>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-14">Open Positions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {jobs.map((position, idx) => (
            <Card key={idx} className="rounded-xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{position.location}</p>
                <p className="text-gray-600 mb-6">{position.description}</p>
                <Link href={`/careers/job-description/${position.id}`}>
                  <Button variant="outline" className="w-full">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}