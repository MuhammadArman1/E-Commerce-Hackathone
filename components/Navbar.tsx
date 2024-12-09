"use client"
// import FC from "react";
import { FC, useState } from "react";
import Link from "next/link";
import 'boxicons/css/boxicons.min.css';


const Navbar: FC = () => {
  return (
    <nav className="flex justify-between items-center h-[74px] shadow-sm bg-white px-96 border-b">

      <ul className="flex space-x-8 text-base font-medium gap-3 cursor-pointer">
        <Link href="/"><li>Home</li></Link>
        <Link href="/"><li>Shop</li></Link>
        <Link href="/Product"><li>Product</li></Link>
        <Link href="/"><li>Pages</li></Link>
        <Link href="/About"><li>About</li></Link>
      </ul>

      <div className="text-base font-medium text-gray-500">
        <Link href='/Contact'>Contact: <span className="text-black">(808) 555-0111</span></Link>
      </div>

    </nav>
  );
};

export default Navbar;
