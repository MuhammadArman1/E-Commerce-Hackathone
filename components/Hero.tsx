import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className='flex justify-center flex-col items-center'>
    <section className="bg-[#F0F2F3] flex items-center justify-between w-[1200px] h-[680px] rounded-bl-[50px] hdiv1 ">
      {/* Text Section */}
      <div className='pl-20 w-[557px] hdes'>
        <p className="text-lg text-gray-500">WELCOME TO CHAIRY</p>
        <h1 className="text-6xl  font-bold text-gray-800 hh1">Best Furniture Collection For Your <br /> Interior.</h1>
        <button className="bg-[#58B4BF] text-white py-4 px-8 rounded-xl mt-8 text-lg font-medium hover:bg-teal-600 transition">Shop Now →</button>
      </div>
      {/* Image Section */}
        <Image src={"/BG.png"} alt="chair" width={800} height={900} className='hi'></Image>
    </section>

    <div className="hci flex items-center gap-20 h-auto p-4">
  {/* First Row of Logos */}
  <div className="hci1 flex flex-wrap gap-20 justify-center">
    <Image id="logo1" src={"/Logo1.png"} alt="Logo 1" width={80} height={80} />
    <Image id="logo1" src={"/Logo2.png"} alt="Logo 2" width={80} height={80} />
    <Image id="logo1" src={"/Logo 3.png"} alt="Logo 3" width={80} height={80} />
    <Image id="logo1" src={"/Logo 4.png"} alt="Logo 4" width={80} height={80} />
  </div>

  {/* Second Row of Logos */}
  <div className="hci2 flex flex-wrap gap-20 justify-center">
    <Image id="logo1" src={"/Logo 5.png"} alt="Logo 5" width={80} height={80} />
    <Image id="logo1" src={"/Logo6.png"} alt="Logo 6" width={80} height={80} />
    <Image id="logo1" src={"/Logo7.png"} alt="Logo 7" width={80} height={80} />
  </div>
</div>

    </div>
  );
};

export default Hero;
