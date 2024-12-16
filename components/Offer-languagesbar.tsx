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
    <div className="bg-[#272343] text-white">
      {/* Top Bar */}
      <div
        className="h-11 flex justify-center gap-[42rem] items-center px-4 md:px-8 lg:px-16"
      >
        {/* Left Content */}
        <div className="tracking-wide text-sm text-center">
          &#10003; Free Shipping On All Orders Over $50
        </div>

        {/* Toggle Icon */}
        <button
          onClick={toggleNav}
          className="focus:outline-none md:hidden mr-[16%]"
          aria-label="Toggle Menu"
        >
          <i
            className={`bx ${
              isNavActive ? "hidden" : "bx-dots-vertical-rounded"
            } text-2xl`}
          ></i>
        </button>

        {/* Navigation Links */}
        <div
          className={`flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-12 absolute md:static bg-[#272343] top-11 left-0 w-full md:w-auto md:flex ${
            isNavActive ? "block" : "hidden"
          }`}
        >
          {/* Close Button for Mobile */}
          <button
            onClick={toggleNav}
            className="focus:outline-none md:hidden self-end px-4"
            aria-label="Close Menu"
          >
            <i className="bx bx-x text-2xl"></i>
          </button>
          {/* <hr className="md:hidden w-full border-gray-500" /> */}

          {/* Language Dropdown */}
          <div className="flex items-center gap-1 cursor-pointer px-4 md:px-0">
            Eng
            <i className="bx bx-chevron-down"></i>
          </div>

          {/* FAQs Link */}
          <Link href="/Faq">
            <div className="cursor-pointer px-4 md:px-0">Faqs</div>
          </Link>

          {/* Help Section */}
          <div className="flex items-center gap-1 px-4 md:px-0">
            <i className="bx bx-error-circle"></i>
            <span>Need Help</span>
          </div>
        </div>
      </div>
    </div>
  );
}



// "use client";

// import 'boxicons/css/boxicons.min.css';
// import Link from 'next/link';
// import { useState } from "react";

// export default function OfferLanguagesBar() {
//   const [isNavActive, setIsNavActive] = useState(false);

//   const toggleNav = () => {
//     setIsNavActive((prev) => !prev);
//   };

//   return (
//     <div className="bg-[#272343] text-white" id='1'>
//       {/* Top Bar */}
//       <div className="h-11 flex justify-center items-center gap-[38rem]" id='maindivoffer'>
//         <div className="tracking-wide text-sm">&#10003; Free Shipping On All Orders Over $50</div>

//         {/* Toggle Icon */}
//         <button id='doticon'
//           onClick={toggleNav}
//           className="focus:outline-none"
//           aria-label="Toggle Menu"
//         >
//           <i className={`bx ${isNavActive ? "hidden" : "bx-dots-vertical-rounded "} text-2xl`}></i>
//         </button>
//         {/* <i className='bx bx-x' id='x' onClick={toggleNav}></i> */}

//         {/* Navigation Links */}
//         <div id='nav-links'
//           className={`flex-col md:flex-row gap-4 md:gap-12 items-center md:flex transition-all duration-300 ease-in-out ${
//             isNavActive ? "flex" : "hidden"
//           } md:flex`}
//         >
//            <button
//             onClick={toggleNav}
//             className="focus:outline-none"
//             aria-label="Close Menu"
//           >
//             <i className="bx bx-x bx-md " id='x' ></i>
//             <hr />
//           </button>
//           <div className="flex items-center gap-1">
//             Eng
//             <i className="bx bx-chevron-down bx-sm"></i>
//           </div>
//           <Link href="/Faq">
//             <div className="cursor-pointer">Faqs</div>
//           </Link>
//           <div className="flex items-center gap-1">
//             <i className="bx bx-error-circle"></i>
//             Need Help
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }