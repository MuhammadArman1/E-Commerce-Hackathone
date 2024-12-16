import Image from "next/image";
import Link from "next/link";
interface NavbarProps {
  cartCount: number;
}

const MiddleNavbar: React.FC<NavbarProps> = ({ cartCount }) => {
  return (
    <nav
    className="flex justify-center gap-[58rem] items-center px-4 py-2 bg-gray-100 shadow-sm flex-wrap"
    id="mn"
  >
    {/* Left Section */}
    <div className="flex items-center">
      <div className="p-1">
        <Image
          src={"/Logoicon.png"}
          alt="logo"
          width={40} // Adjust for smaller screen
          height={40}
        />
      </div>
      <Link href="/">
        <span className="text-xl font-semibold text-black whitespace-nowrap">
          Comforty
        </span>
      </Link>
    </div>
  
    {/* Right Section: Cart */}
    <div className="mncart mt-2 sm:mt-0">
      <button className="py-2 bg-white flex items-center gap-2 px-3 rounded-lg w-full sm:w-auto">
        <Link href="/Cart">
          <span className="ml-1 font-medium text-base text-gray-800 flex items-center">
            <i className="bx bx-cart-alt bx-sm"></i> Cart
          </span>
        </Link>
        {cartCount > 0 && (
          <div className="bg-[#387580] text-white text-sm font-semibold w-5 h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </div>
        )}
      </button>
    </div>
  </nav>
  
  );
};

export default MiddleNavbar;
