import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-700 shadow-sm">
  <hr />
  {/* Main Content */}
  <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Logo Section */}
    <div className="footer-logo text-center md:text-left">
      <div className="flex items-center justify-center md:justify-start gap-4">
        <Image src={"/logoicon.png"} alt="logo" width={40} height={40}></Image>
        <Link href="/">
          <h1 className="text-2xl font-semibold text-gray-800">Comforty</h1>
        </Link>
      </div>
      <p className="mt-4 text-sm text-[#9A9CAA]">
        Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
        <br />
        Cras egestas purus.
      </p>
      <div className="flex justify-center md:justify-start mt-4 space-x-4 text-gray-500">
        <Link href="/"><i className="bx bxl-facebook-circle bx-sm hover:text-teal-600"></i></Link>
        <Link href="/"><i className="bx bxl-twitter bx-sm hover:text-teal-600"></i></Link>
        <Link href="/"><i className="bx bxl-instagram bx-sm hover:text-teal-600"></i></Link>
        <Link href="/"><i className="bx bxl-pinterest bx-sm hover:text-teal-600"></i></Link>
        <Link href="/"><i className="bx bxl-youtube bx-sm hover:text-teal-600"></i></Link>
      </div>
    </div>

    {/* Category Section */}
    <div className="footer-category text-center md:text-left">
      <h4 className="text-lg text-gray-800 font-semibold mb-2">CATEGORY</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li>Sofa</li>
        <li>Armchair</li>
        <li>Wing Chair</li>
        <li>Desk Chair</li>
        <li>Wooden Chair</li>
        <li>Park Bench</li>
      </ul>
    </div>

    {/* Support Section */}
    <div className="footer-support text-center md:text-left">
      <h4 className="text-lg text-gray-800 font-semibold mb-2">Support</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li>Help & Support</li>
        <li>Terms & Condition</li>
        <li>Privacy Policy</li>
        <li>Help</li>
      </ul>
    </div>

    {/* Newsletter Section */}
    <div className="footer-newsletter text-center md:text-left">
      <h4 className="text-lg text-gray-800 font-semibold mb-4">Newsletter</h4>
      <form className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Your email"
          className="h-11 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500"
          aria-label="Your email address"
          required
        />
        <button
          type="submit"
          className="h-11 bg-[#4EA0AE] text-white px-6 rounded-lg hover:bg-teal-600 transition-all"
        >
          Subscribe
        </button>
      </form>
      <p className="text-sm text-gray-500 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
      </p>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="bg-white text-gray-600 py-4 border-t">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} - Comforty - Designed & Developed by
        <a href="#" className="text-teal-500 hover:underline ml-1">Zakirsoft</a>
      </p>
      <div className="flex justify-center sm:justify-start mt-2 sm:mt-0 space-x-4 text-gray-600">
        <i className="bx bxl-paypal bx-lg"></i>
        <i className="bx bxl-visa bx-lg"></i>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
