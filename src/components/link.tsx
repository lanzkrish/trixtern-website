'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function CustomLink({ href, children }: CustomLinkProps) {
  const pathname = usePathname(); // Get the current path

  // Check if the current path starts with the href
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`text-sm leading-6 hover:text-blue-500 ${
        isActive ? "text-red-400 font-semibold" : "font-light"
      } text-gray-900`}
    >
      {children}
    </Link>
  );
}