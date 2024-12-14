import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-700 shadow-sm "><hr />
      {/* Main Content */}
      <div className="container mx-auto px-28 py-12 grid grid-cols-1 lg:grid-cols-4">
        {/* Logo Section */}
        <div className="footer1">
          <div className="flex items-center gap-4">
            <Image src={"/logoicon.png"} alt="logo" width={50} height={50}></Image>
            <Link href="/"><h1 className="text-3xl font-semibold">Comforty</h1></Link>
          </div>
          <p className="mt-8 text-[#9A9CAA]">Vivamus tristique odio sit amet velit semper,<br /> eu posuere turpis interdum. <br /> Cras egestas purus.</p>
          <div className="flex mt-10">
            <Link href="/"><i className='i bx bxl-facebook-circle bx-sm'></i></Link>
            <Link href="/"><i className='i bx bxl-twitter bx-sm'></i></Link>
            <Link href="/"><i className='i bx bxl-instagram bx-sm' ></i></Link>
            <Link href="/"><i className='i bx bxl-pinterest bx-sm'></i></Link>
            <Link href="/"><i className='i bx bxl-youtube bx-sm'></i></Link>
          </div>
        </div>

        {/* Category Section */}
        <div className="footer1-des">
        <div className="ml-20">
            <h4 className="text-lg text-[#9A9CAA] font-semibold mb-4">CATEGORY</h4>
            <ul className="space-y-2 cursor-pointer">
               <li>Sofa</li>
               <li>Armchair</li>
               <li>Wing Chair</li>
               <li>Desk Chair</li>
               <li>Wooden Chair</li>
               <li>Park Bench</li>
            </ul>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="text-lg text-[#9A9CAA] font-semibold mb-4">Support</h4>
          <ul className="space-y-2 cursor-pointer">
            <li>Help & Support</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
            <li>Help</li>
          </ul>
        </div>
        </div>
        {/* Newsletter Section */}
        <div id="messform">
          <h4 className="text-lg text-[#9A9CAA] font-semibold mb-4">Newsletter</h4>
          <form className="mb-4 flex w-11/12 gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="h-11 px-4 py-2 border border-gray-300 rounded-lg mb-4"
              aria-label="Your email address"
              required
            />
            <button type="submit" className="h-11 bg-[#4EA0AE] text-white px-7 rounded-lg hover:bg-teal-600">Subscribe</button>
          </form>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className=" bg-white text-gray-600 py-2"><hr />
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between mt-2">
          <p>&copy; {new Date().getFullYear()} - Blogy - Designed & Developed by <a href="#" className="text-teal-500 hover:underline">Zakirsoft</
            a></p>
            <div className=" flex space-x-4 mt-4 md:mt-2">
               <i className='bx bxl-paypal bx-lg'></i>
               <i className='bx bxl-visa bx-lg'></i>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
