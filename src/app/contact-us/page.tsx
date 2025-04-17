"use client";

import PageHeader from "@/components/ui/page-header";

function ContactUs() {
  return (
    <div className="bg-white text-gray-900 mx-4 sm:mx-6 md:mx-12">
      {/* Header Section */}
      <PageHeader
        title="Contact Us"
        description="Have questions or need assistance? Fill out the form below, and we&apos;ll get back to you as soon as possible."
      />

      {/* Contact Form Section */}
      <section className="px-4 sm:px-6 md:px-16 pb-16">
        <div className="flex flex-col items-center justify-center rounded-lg p-6 sm:p-8 bg-gray-100">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="w-full mt-6"
          >
            <input
              type="hidden"
              name="from_name"
              value="Contact from Trixtern"
            />
            <input
              type="hidden"
              name="access_key"
              value="46707c4f-71eb-43aa-89aa-91beb82e79e7"
            />
            <input
              type="hidden"
              name="subject"
              value="New Message from Trixtern tech. Web(Contact Us)"
            />
            <input
              type="hidden"
              name="redirect"
              value="https://new.trixtern.com/contact-us/thank-you"
            />
            <input type="checkbox" name="botcheck" style={{ display: "none" }} />
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
                htmlFor="message"
                className="block text-sm text-gray-600 dark:text-gray-800 mb-2"
              >
                Your Message
              </label>
              <textarea
                rows={5}
                name="message"
                id="message"
                placeholder="Your message"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;