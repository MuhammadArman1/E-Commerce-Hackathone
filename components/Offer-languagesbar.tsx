"use client";

import 'boxicons/css/boxicons.min.css';
import Link from 'next/link';
import { useState } from "react";

export default function OfferLanguagesBar() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive((prev) => !prev);
  };

  return (
    <div className="bg-[#272343] text-white" id='1'>
      {/* Top Bar */}
      <div className="h-11 flex justify-center items-center gap-[38rem]" id='maindivoffer'>
        <div className="tracking-wide text-sm">&#10003; Free Shipping On All Orders Over $50</div>

        {/* Toggle Icon */}
        <button id='doticon'
          onClick={toggleNav}
          className="focus:outline-none"
          aria-label="Toggle Menu"
        >
          <i className={`bx ${isNavActive ? "hidden" : "bx-dots-vertical-rounded "} text-2xl`}></i>
        </button>
        {/* <i className='bx bx-x' id='x' onClick={toggleNav}></i> */}

        {/* Navigation Links */}
        <div id='nav-links'
          className={`flex-col md:flex-row gap-4 md:gap-12 items-center md:flex transition-all duration-300 ease-in-out ${
            isNavActive ? "flex" : "hidden"
          } md:flex`}
        >
           <button
            onClick={toggleNav}
            className="focus:outline-none"
            aria-label="Close Menu"
          >
            <i className="bx bx-x bx-md " id='x' ></i>
            <hr />
          </button>
          <div className="flex items-center gap-1">
            Eng
            <i className="bx bx-chevron-down bx-sm"></i>
          </div>
          <Link href="/Faq">
            <div className="cursor-pointer">Faqs</div>
          </Link>
          <div className="flex items-center gap-1">
            <i className="bx bx-error-circle"></i>
            Need Help
          </div>
        </div>
      </div>
    </div>
  );
}