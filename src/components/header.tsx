'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomLink from "./link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 z-20">
      <header>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="../" className="-m-1.5 p-1.5">
              <span className="sr-only">Trixtern</span>
              <Image
                src="/trixtern-red-nbg.png"
                alt="Trixtern Technologies"
                width={160}
                height={35}
                priority
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 
                text-gray-700 dark:text-gray-200 
                hover:bg-gray-100 dark:hover:bg-gray-800 
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            <CustomLink href="/Home">Home</CustomLink>
            <CustomLink href="/services">Services</CustomLink>
            <CustomLink href="/works">Projects</CustomLink>
            <CustomLink href="/blogs">Blogs & Insights</CustomLink>
            <CustomLink href="/about">About</CustomLink>
            <CustomLink href="/careers">Careers</CustomLink>
          </div>

          {/* Contact Us Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact-us"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
            >
              Contact Us <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-2 px-6 pb-6">
              {[
                { name: "Home", href: "/Home" },
                { name: "Services", href: "/services" },
                { name: "Projects", href: "/works" },
                { name: "Blogs & Insights", href: "/blogs" },
                { name: "About", href: "/about" },
                { name: "Careers", href: "/careers" },
                { name: "Contact Us", href: "/contact-us" },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
