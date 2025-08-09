'use client';

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { jobs } from "../../components/jobs";

// Utility function to render array or string as a bulleted list
function renderList(input: string[] | string | undefined) {
  if (!input) return null;
  if (Array.isArray(input)) {
    return (
      <ul className="list-disc list-inside text-gray-700 mb-6">
        {input.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p className="text-gray-700 mb-6">{input}</p>;
}

export default function JobDescriptionPage() {
  const { id } = useParams(); // Get the dynamic route parameter

  // Find the job based on the id
  const job = jobs.find((job) => job.id === Number(id));

  if (!job) {
    return <p className="text-center text-gray-500">Job not found.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="text-gray-600 mb-2">
        <strong>Location:</strong> {job.location}
      </p>
      <p className="text-gray-700 mb-6">{job.description}</p>
      <h3 className="text-xl font-bold mb-2">Job Overview</h3>
      <p className="text-gray-700 mb-6">{job.joboverview}</p>
      <h3 className="text-xl font-bold mb-2">Key Responsibilities</h3>
      {renderList(job.keyResponsibilities)}
      <h3 className="text-xl font-bold mb-2">Requirements</h3>
      {renderList(job.requirements)}
      <Link href={`/careers/job-description/${id}/apply?job=${encodeURIComponent(job.title)}`}>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
          Apply Now
        </Button>
      </Link>
    </div>
  );
}