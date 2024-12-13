"use client"
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center h-[74px] shadow-sm bg-white gap-[39rem] border-b">
    {/* Navigation Links */}
    <ul className="flex space-x-8 text-base font-medium gap-3">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/">Shop</Link>
      </li>
      <li>
        <Link href="/Product">Product</Link>
      </li>
      <li>
        <Link href="/">Pages</Link>
      </li>
      <li>
        <Link href="/About">About</Link>
      </li>
    </ul>

    {/* Contact Information */}
    <div className="text-base font-medium text-gray-500">
      <Link href="/Contact">
        Contact: <span className="text-black">(808) 555-0111</span>
      </Link>
    </div>
  </nav>
  );
}
