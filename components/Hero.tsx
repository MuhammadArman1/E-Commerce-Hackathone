import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
    <section className="bg-[#F0F2F3] flex items-center justify-between w-[1200px] h-[680px] rounded-bl-[50px] px-20">
      {/* Text Section */}
      <div className='w-2/4 '>
        <p className="text-lg text-gray-500">WELCOME TO CHAIRY</p>
        <h1 className="text-6xl  font-bold text-gray-800 my-4">Best Furniture <br /> Collection For Your Interior.</h1>
        <button className="bg-[#58B4BF] text-white py-4 px-8 rounded-xl mt-8 text-lg font-medium hover:bg-teal-600 transition">Shop Now →</button>
      </div>
      {/* Image Section */}
      <div className='w-2/4'>
        <Image src={"/BG.png"} alt="chair" width={900} height={"900"}></Image>
      </div>
    </section>

    <div className='flex items-center justify-center gap-20 h-60'>
      <Image src={"/Logo1.png"} alt="" width={100} height={100}></Image>
      <Image src={"/Logo2.png"} alt="" width={100} height={100}></Image>
      <Image src={"/Logo 3.png"} alt="" width={100} height={100}></Image>
      <Image src={"/Logo 4.png"} alt="" width={100} height={100}></Image>
      <Image src={"/Logo 5.png"} alt="" width={100} height={100}></Image>
      <Image src={"/Logo6.png"} alt="" width={100} height={100}></Image>
      <Image src={"/Logo7.png"} alt="" width={100} height={100}></Image>
    </div>
    </div>
  );
};

export default Hero;
