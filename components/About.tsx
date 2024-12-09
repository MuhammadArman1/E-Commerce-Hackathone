import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      {/* About Section */}
      <div className="flex gap-6 items-center">
        <div className="bg-[#387580] text-white p-20 shadow-lg w-[672px] h-[478px]">
          <h2 className="text-3xl font-bold mb-4">About Us - Comforty</h2>
          <p className="text-lg mb-6">
            At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
          </p>
          <button className="bg-[#428993] text-white font-semibold mt-11 py-4 px-6 rounded shadow">
            View collection
          </button>
        </div>
        <div className="w-[619px] h-[478px] relative">
          <Image
            src="/product%20img.png"  // Corrected path with URL encoding for space
            alt="About Us"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Brand Difference Section */}
      <div className="mb-16">
        <h3 className="text-center text-2xl font-bold my-20">
          What Makes Our Brand Different
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-teal-600">
          <div className="bg-[#F9F9F9] p-6 rounded-lg text-center shadow-sm hover:shadow-md">
            <h4 className="text-lg font-semibold mb-2">Next day as standard</h4>
            <p>Order before 3pm and get your order the next day as standard.</p>
          </div>
          <div className="bg-[#F9F9F9] p-6 rounded-lg text-center shadow-sm hover:shadow-md">
            <h4 className="text-lg font-semibold mb-2">Made by true artisans</h4>
            <p>Handmade crafted goods made with real passion and craftsmanship.</p>
          </div>
          <div className="bg-[#F9F9F9] p-6 rounded-lg text-center shadow-sm hover:shadow-md">
            <h4 className="text-lg font-semibold mb-2">Unbeatable prices</h4>
            <p>For our materials and quality you won&apos;t find better prices anywhere.</p>
          </div>
          <div className="bg-[#F9F9F9] p-6 rounded-lg text-center shadow-sm hover:shadow-md">
            <h4 className="text-lg font-semibold mb-2">Recycled packaging</h4>
            <p>We use 100% recycled materials to ensure our footprint is more manageable.</p>
          </div>
        </div>
      </div>

      {/* Popular Products Section */}
      <div className="mb-16">
        <h3 className="text-start text-2xl font-bold mb-8">Our Popular Products</h3>
        <div className="flex justify-center gap-6">
          <div className="text-center w-[630px] h-[375px] relative">
            <Image
              src="/product%20img15.jfif"  // Correct path with URL encoding for space
              alt="The Popular suede sofa"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <h4 className="text-lg font-semibold mt-4">
              The Popular suede sofa
            </h4>
            <p className="text-gray-600">$98.00</p>
          </div>
          <div className="text-center w-[305px] h-[375px] relative">
            <Image
              src="/product%20img13.jfif"  // Correct path with URL encoding for space
              alt="The Dandy chair"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <h4 className="text-lg font-semibold mt-4">The Dandy chair</h4>
            <p className="text-gray-600">$39.00</p>
          </div>
          <div className="text-center w-[305px] h-[375px] relative">
            <Image
              src="/product%20img14.jfif"  // Correct path with URL encoding for space
              alt="The Dandy chair"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <h4 className="text-lg font-semibold mt-4">The Dandy chair</h4>
            <p className="text-gray-600">$39.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
