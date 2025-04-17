'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { jobs } from '@/app/careers/components/jobs';

export default function JobApplicationPage() {
  const { id } = useParams(); // Get the dynamic route parameter

  // Find the job based on the id
  const job = jobs.find((job) => job.id === Number(id));

  if (!job) {
    return <p className="text-center text-gray-500">Job not found.</p>;
  }

  return (
    <div className="bg-gray-50 text-gray-900 mx-4 sm:mx-6 md:mx-12">
      {/* Header Section */}
      <div className="text-center py-6 sm:py-10">
        <h1 className="text-2xl sm:text-3xl font-bold">{`Apply for ${job.title}`}</h1>
        <p className="text-gray-600 text-sm sm:text-base">{job.description}</p>
      </div>

      {/* Job Application Form Section */}
      <section className="px-4 sm:px-6 md:px-16 pb-16">
        <div className="flex flex-col items-center justify-center rounded-lg p-6 sm:p-8 bg-gray-50">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="w-full mt-6"
          >
            <input
              type="hidden"
              name="from_name"
              value={`Application for ${job.title}`}
            />
            <input
              type="hidden"
              name="access_key"
              value="46707c4f-71eb-43aa-89aa-91beb82e79e7"
            />
            <input
              type="hidden"
              name="subject"
              value={`New Job Application for ${job.title}`}
            />
            <input
              type="hidden"
              name="redirect"
              value="https://new.trixtern.com/careers/job-description/thank-you"
            />
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm text-gray-600 dark:text-gray-600 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="First Name"
                  id="first_name"
                  placeholder="First name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="lname"
                  className="block text-sm text-gray-600 dark:text-gray-800 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="Last Name"
                  id="lname"
                  placeholder="Last name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-600 dark:text-gray-800 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm text-gray-600 dark:text-gray-800 mb-2"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+91...."
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="linkedin"
                className="block text-sm text-gray-600 dark:text-gray-800 mb-2"
              >
                Linkedin Profile link
              </label>
              <input
                type="text"
                name="linkedin"
                id="linkedin"
                placeholder="https://www.linkedin.com/..."
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="otherlink"
                className="block text-sm text-gray-600 dark:text-gray-800 mb-2"
              >
                Other Link
              </label>
              <input
                type="text"
                name="otherlink"
                id="otherlink"
                placeholder="Any other link (GitHub, Portfolio, etc.)"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="coverletter"
                className="block text-sm text-gray-600 dark:text-gray-800 mb-2"
              >
                Cover Letter
              </label>
              <textarea
                rows={5}
                name="Cover Letter"
                id="coverletter"
                placeholder="Your cover letter"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
