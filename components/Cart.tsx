import React from 'react';
import Image from 'next/image';

const Cart: React.FC = () => {
  return (
    <div>
      <div className="flex justify-around p-5 font-sans my-12">
        {/* Bag Section */}
        <div className=" w-[773px]">
          <h2 className="mb-5 text-3xl font-semibold">Bag</h2>

          {/* First Item */}
          <div className="flex w-[933px] mt-16">
            <Image
              src="/product img3.png"
              alt="Library Stool Chair"
              width={150} // Set the width of the image
              height={150} // Set the height of the image
              className="mr-5"
            />
            <div className="flex-1">
              <h4 className="lib">Library Stool Chair</h4>
              <p className="desc">Ashen Slate/Cobalt Bliss</p>
              <div className="flex mx-7 gap-8 text-gray-500">
                <p>Size: <u className="">L</u></p>
                <p>Quantity: <u>1</u></p>
              </div>
              <div className="cursor-pointer mt-4 text-gray-500 ml-7 flex items-center">
                <i className="bx bx-heart bx-sm"></i>
                <button className="ml-7 bg-none border-none ">🗑</button>
              </div>
            </div>
            <p>MRP: $99</p>
          </div>

          {/* Second Item */}
          <div className="flex w-[933px] mt-16">
            <Image
              src="/product img8.png"
              alt="Library Stool Chair"
              width={150} // Set the width of the image
              height={150} // Set the height of the image
              className="mr-5"
            />
            <div className="flex-1">
              <h4 className="lib">Library Stool Chair</h4>
              <p className="desc">Ashen Slate/Cobalt Bliss</p>
              <div className="flex mx-7 gap-8 text-gray-500">
                <p>Size: <u>L</u> </p>
                <p>Quantity: <u>1</u></p>
              </div>
              <div className="cursor-pointer mt-4 ml-7 text-gray-500  flex items-center">
                <i className="bx bx-heart bx-sm"></i>
                <button className="bg-none border-none ml-7">🗑</button>
              </div>
            </div>
            <p>MRP: $99</p>
          </div>
        </div>

        {/* Summary Section */}
        <div className="w-[350px]">
          <h2 className="mb-5 text-3xl font-semibold">Summary</h2>
          <div className="my-5 flex justify-between">
            <p>Subtotal</p>
            <p>$198.00</p>
          </div>
          <div className="my-5 flex justify-between">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="my-5 flex justify-between font-bold">
            <p>Total</p>
            <p>$198.00</p>
          </div>
          <hr />
          <button className="w-[334px] h-14 bg-[#4EA0AE] text-white border-none mt-8 rounded-full cursor-pointer">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
