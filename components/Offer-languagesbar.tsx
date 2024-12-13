"use client"

import 'boxicons/css/boxicons.min.css';
import Link from 'next/link';
import { useState } from "react";


export default function Offer_languagesbar() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive((prev) => !prev);
  };
  
  return (
    <div>
         <div className='text-white bg-[#272343] h-11 flex justify-center gap-[39rem] items-center '>
            <div className='tracking-wide'> &#10003; Free Shipping On All Orders 0ver $50</div>
            <i className='bx bx-dots-vertical-rounded bx-sm'onClick={toggleNav}></i>
            <div className={`flex gap-12 items-center nav-links${isNavActive ? "active" : ""}`}>
              <div>Eng<i className='bx bx-chevron-down bx-sm'></i></div>
              <Link href="/Faq"><div>Faqs</div></Link>
              <div><i className='bx bx-error-circle'></i> Need Help</div>
            </div>
        </div>
    </div>
  )
}
