"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-4 divide-y dark:bg-gray-100 dark:text-gray-800 bg-gradient-to-br from-blue-100 via-white to-purple-100 overflow-hidden">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        {/* Logo and Description */}
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <Image
              src="/trixtern_full.png"
              alt="Trixtern Technologies"
              width={180}
              height={38}
              priority
            />
          </a>
          <p className="max-w-xs py-2 mx-auto text-sm text-center text-gray-500 dark:text-gray-600 lg:mx-0 lg:text-left">
          Trixtern Technologies helps businesses streamline workflows and grow with innovative tech solutions.
          </p>
          
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          {[
            {
              title: "Product",
              links: [
                // { name: "Interncify", href: "https://interncify.com" },
                { name: "Features", href: "#" },
                { name: "Integrations", href: "#" },
                { name: "Pricing", href: "#" },
                { name: "FAQ", href: "#" },
              ],
            },
            {
              title: "Company",
              links: [
                { name: "Privacy", href: "/privacy&policy" },
                { name: "Terms of Service", href: "/terms-of-service" },
              ],
            },
            {
              title: "Developers",
              links: [
                { name: "Public API", href: "#" },
                { name: "Documentation", href: "#" },
                { name: "Guides", href: "#" },
              ],
            },
            {
              title: "Social Media",
              links: [
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/company/trixtern/",
                  icon: (
                    <Image
                      src="/linkedin.svg"
                      alt="LinkedIn logo"
                      width={20}
                      height={20}
                    />
                  ),
                },
                // { name: "Facebook", href: "#" },
                // { name: "Twitter", href: "#" },
                // { name: "Instagram", href: "#" },
              ],
              icons: true,
            },
          ].map((section, index) => (
            <div key={index} className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-900">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    {section.icons ? (
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={link.href}
                        title={link.name}
                        className="flex items-center p-1"
                      >
                        {link.icon ? link.icon : link.name}
                      </a>
                    ) : (
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={link.href}
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-600">
        © 2025 Trixtern Tech. All rights reserved.
      </div>
    </footer>
  );
}
