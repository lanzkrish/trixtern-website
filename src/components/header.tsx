'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white z-2">
      <header>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Trixtern</span>
              <Image
                src="/trixtern_full.png"
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
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">
              Home
            </Link>
            <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900">
              Services
            </Link>
            <Link href="/blogs" className="text-sm font-semibold leading-6 text-gray-900">
              Blogs & Insights
            </Link>
            <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
              About
            </Link>
            <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Careers
            </Link>
          </div>

          {/* Contact Us Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Contact Us <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-2 px-6 pb-6">
              <Link href="/" className="block text-sm font-semibold leading-6 text-gray-900">
                Home
              </Link>
              <Link href="/services" className="block text-sm font-semibold leading-6 text-gray-900">
                Services
              </Link>
              <Link href="/blogs" className="block text-sm font-semibold leading-6 text-gray-900">
                Blogs & Insights
              </Link>
              <Link href="#" className="block text-sm font-semibold leading-6 text-gray-900">
                About
              </Link>
              <Link href="#" className="block text-sm font-semibold leading-6 text-gray-900">
                Careers
              </Link>
              <Link href="#" className="block text-sm font-semibold leading-6 text-gray-900">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}