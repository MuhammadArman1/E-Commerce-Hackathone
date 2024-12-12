import Image from "next/image";
import Link from "next/link";
interface NavbarProps {
    cartCount: number;
  }
  
  const MiddleNavbar: React.FC<NavbarProps> = ({ cartCount }) => {
    return (
      <nav className="flex justify-center items-center h-[84px] gap-[54rem] bg-gray-100  py-2 shadow-sm">
        {/* left */}
        <div className="mn">
          <div className=" p-2">
            <Image src={"/Logoicon.png"} alt="logo" width={50} height={50}></Image>
          </div>
          <Link href="/"><span className="text-3xl font-semibold text-black">Comforty</span></Link>
        </div>
        {/* Right: Cart */}
        <div>
            <button className="py-3 bg-white flex items-center gap-4 px-4 rounded-lg">
              <Link href="/Cart"><span className="ml-2 font-medium text-lg text-gray-800"><i className='bx bx-cart-alt bx-sm'></i> Cart</span></Link>
                {cartCount > 0 && (
              <div className="bg-[#387580] text-white text-sm font-semibold w-6 h-6 flex items-center justify-center rounded-full">
                {cartCount}
              </div>
               )}
            </button>
        </div>
          
      </nav>
    );
  };
  
  export default MiddleNavbar;
  