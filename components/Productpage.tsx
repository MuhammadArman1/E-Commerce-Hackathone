import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductPage: React.FC = () => {
  return (
    <div className="p-8 font-sans">
      {/* Main Product Section */}
      <div className="flex justify-center px-60 my-16 gap-32">
          <Image src={"/product img2.png"} alt='chair' width={675} height={607}></Image>         
        <div className=" pl-8 w-[521px]">
          <h1 className="text-7xl font-bold mb-4">Library Stool <br /> Chair</h1>
          <button className="px-5 py-2 bg-[#4EA0AE] text-white rounded-full hover:bg-teal-600 transition my-8">$20.00 USD</button> <hr />
          <p className="text-gray-700 my-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          <button className="px-7 py-3 bg-[#4EA0AE] text-white rounded-md hover:bg-teal-600 transition"><i className='bx bx-cart-alt bx-sm pr-3'></i>Add To Cart</button>
        </div>
      </div>


<div className='w-[60vw] relative left-96 flex flex-col justify-center mb-10'>
  <div className="flex justify-between items-center my-10 ">
    <h2 className="text-3xl font-bold tracking-[4px]">FEATURED PRODUCTS</h2>
    <Link href="/Product" className="text-lg hover:underline">View all</Link>
  </div>
  <div className="grid grid-cols-5 gap-4">
    {/* Product Item 1 */}
    <div className="text-center">
      <Image
        src={"/Product img6.png"}
        alt="Library Stool Chair"
        width={270} // Adjust the width and height as needed
        height={263}
        className="w-full h-auto rounded-md mb-2"
      />
      <p className="text-sm text-gray-700">Library Stool Chair</p>
      <p className="text-sm font-bold">$99</p>
    </div>

    {/* Product Item 2 */}
    <div className="text-center">
      <Image
        src={"/product img.png"}
        alt="Library Stool Chair"
        width={270}
        height={263}
        className="w-full h-auto rounded-md mb-2"
      />
      <p className="text-sm text-gray-700">Library Stool Chair</p>
      <p className="text-sm font-bold">$99</p>
    </div>

    {/* Product Item 3 */}
    <div className="text-center">
      <Image
        src={"/product img9.png"}
        alt="Library Stool Chair"
        width={270}
        height={263}
        className="w-full h-auto rounded-md mb-2"
      />
      <p className="text-sm text-gray-700">Library Stool Chair</p>
      <p className="text-sm font-bold">$99</p>
    </div>

    {/* Product Item 4 */}
    <div className="text-center">
      <Image
        src={"/product img3.png"}
        alt="Library Stool Chair"
        width={270}
        height={263}
        className="w-full h-auto rounded-md mb-2"
      />
      <p className="text-sm text-gray-700">Library Stool Chair</p>
      <p className="text-sm font-bold">$99</p>
    </div>

    {/* Product Item 5 */}
    <div className="text-center">
      <Image
        src={"/product img8.png" }
        alt="Library Stool Chair"
        width={270}
        height={263}
        className="w-full h-auto rounded-md mb-2"
      />
      <p className="text-sm text-gray-700">Library Stool Chair</p>
      <p className="text-sm font-bold">$99</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default ProductPage;
