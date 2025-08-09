'use client';

import React from "react";
import CustomLink from "../../../components/link";

export default function Header() {

  return (
    <div className="z-2 bg-gray-50 flex justify-center items-center h-16">
      <div className="flex gap-x-12">
        <CustomLink href="/about/journey">Journey</CustomLink>
        <CustomLink href="/about/foundation">Foundation</CustomLink>
        <CustomLink href="/about/vision">Vision</CustomLink>
        <CustomLink href="/about/ambition">Ambition</CustomLink>
      </div>
    </div>
  );
}