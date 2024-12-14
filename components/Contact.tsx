import React from 'react';
import Image from 'next/image';

const Contact: React.FC = () => {
  return (
    <div className="px-6 mx-auto flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mt-16">Get In Touch With Us</h1>
        <p className="text-gray-500 mt-4">
          For more information about our product & services, please feel free to drop us <br /> an email.
          Our staff is always here to help you out. Do not hesitate!
        </p>
      </div>

      {/* Contact Form and Details */}
      <div className="flex justify-center my-16 gap-72" id='contactdes'>
        {/* Contact Details */}
        <div className="space-y-8" id='cd'>
          <div className="flex items-start space-x-4">
            <Image src="/locationicon.png" width={25} height={25} alt="Location Icon" />
            <div>
              <h3 className="font-semibold text-xl">Address</h3>
              <p className="text-gray-600">
                236 5th SE Avenue, New York <br /> NY10000, United States
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Image src="/phoneicon.png" width={20} height={20} alt="Phone Icon" />
            <div>
              <h3 className="font-semibold text-xl">Phone</h3>
              <p className="text-gray-600">Mobile: (+84) 546-6789</p>
              <p className="text-gray-600">Hotline: (+84) 456-6789</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <i className="bx bxs-alarm bx-sm"></i>
            <div>
              <h3 className="font-semibold text-xl">Working Time</h3>
              <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form className="space-y-6 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-4" htmlFor="name">
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="w-[530px] border border-gray-300 rounded h-[75px] px-4"
                placeholder="Abc"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-5" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-[530px] border border-gray-300 rounded h-[75px] px-4"
                placeholder="Abc@def.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-5" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-[530px] border border-gray-300 rounded h-[75px] px-4"
                placeholder="This is an optional"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-5" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-[530px] border border-gray-300 rounded px-4 py-2"
                placeholder="Hi! I'd like to ask about"
              />
            </div>
            <button type="submit" className="bg-teal-600 text-white py-4 px-20 rounded-lg shadow hover:bg-teal-700 transition">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex justify-evenly items-center gap-16 w-[1300px] h-[270px] bg-[#F4F4F4]" id='contacticon'>
        <div className="flex flex-row gap-4 items-center">
          <Image src="/trophy 1.png" width={50} height={50} alt="High Quality" />
          <h4 className="text-lg font-semibold mt-2">
            High Quality<p className="text-gray-600">Crafted from top materials</p>
          </h4>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Image src="/guarantee.png" width={50} height={50} alt="Warranty Protection" />
          <h4 className="text-lg font-semibold mt-2">
            Warranty Protection<p className="text-gray-600">Over 2 years</p>
          </h4>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/Frame 4.png" width={200} height={200} alt="Feature Image" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
