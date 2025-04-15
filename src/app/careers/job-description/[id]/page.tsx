'use client';

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { jobs } from "../../components/jobs";

export default function JobDescriptionPage() {
  const { id } = useParams(); // Get the dynamic route parameter

  // Find the job based on the id
  const job = jobs.find((job) => job.id === Number(id));

  if (!job) {
    return <p className="text-center text-gray-500">Job not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="text-gray-600 mb-2">
        <strong>Location:</strong> {job.location}
      </p>
      <p className="text-gray-700 mb-6">{job.description}</p>
      <Link href={`/careers/job-description/${id}/apply?job=${encodeURIComponent(job.title)}`}>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
          Apply Now
        </Button>
      </Link>
    </div>
  );
}