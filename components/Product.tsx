import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice: number | null;
  tag: string | null;
  status: null | string;
  imageUrl: string;
};

const products: Product[] = [
  { id: 1, name: "Library Stool Chair", price: 20, originalPrice: null, tag: null, status: null, imageUrl: "/product img.png" },
  { id: 2, name: "Library Stool Chair", price: 20, originalPrice: 30, tag: null, status: "Sales", imageUrl: "/product img2.png" },
  { id: 3, name: "Library Stool Chair", price: 20, originalPrice: null, tag: null, status: null, imageUrl: "/product img3.png" },
  { id: 4, name: "Library Stool Chair", price: 20, originalPrice: null, tag: "New", status: null, imageUrl: "/product img4.png" },
  { id: 5, name: "Library Stool Chair", price: 20, originalPrice: null, tag: "New", status: null, imageUrl: "/product img5.png" },
  { id: 6, name: "Library Stool Chair", price: 20, originalPrice: 30, tag: null, status: "Sales", imageUrl: "/product img6.png" },
  { id: 7, name: "Library Stool Chair", price: 20, originalPrice: null, tag: null, status: null, imageUrl: "/product img 7.png" },
  { id: 8, name: "Library Stool Chair", price: 20, originalPrice: null, tag: null, status: null, imageUrl: "/product img.png" },
  { id: 9, name: "Library Stool Chair", price: 20, originalPrice: null, tag: "New", status: null, imageUrl: "/product img8.png" },
  { id: 10, name: "Library Stool Chair", price: 20, originalPrice: 30, tag: null, status: "Sales", imageUrl: "/product img2.png" },
  { id: 11, name: "Library Stool Chair", price: 20, originalPrice: null, tag: null, status: null, imageUrl: "/product img3.png" },
  { id: 12, name: "Library Stool Chair", price: 20, originalPrice: null, tag: null, status: null, imageUrl: "/product img9.png" },

];

type ProductCardProps = { product: Product };

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-[300px] h-[400px] rounded-lg ">
      {/* Product Image */}
      <div className="relative w-[300px] h-[300px] mb-4">
        <Image
          src={product.imageUrl}
          alt={product.name}
          layout="fill"
          className="rounded-lg object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg hover:text-[#029fae]">{product.name}</p>
          <p className="text-base font-semibold text-gray-500">
            {product.originalPrice && (
              <span className="line-through mr-2">${product.originalPrice}</span>
            )}
            <span className="text-black">${product.price}</span>
          </p>
        </div>
        <button aria-label="Add to Cart" className="btn px-3 py-2 bg-[#F0F2F3] rounded-lg">
          <i className="bx bx-cart-alt bx-sm"></i>
        </button>
      </div>

      {/* Tag */}
      {product.tag && (
        <span className=" spn text-xs bg-teal-500 text-white px-4 py-2 rounded-lg relative bottom-[350px] ml-4">
          {product.tag}
        </span>
      )}
       {product.status && (
        <span className=" spn text-xs bg-[#F58138] text-white px-4 py-2 rounded-lg relative bottom-[350px] ml-4">
          {product.status}
        </span>
      )}
    </div>
  );
};

export default function Product() {
  return (
    <div>
      <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold py-16 relative right-[600px]">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* <Link href="/Productpage"> */}
          {products.map((product, index) => (
            <div key={index}>  <Link href="/Productpage">
            <ProductCard key={product.id} product={product} />
            </Link>
          </div>
          ))}
        {/* </Link> */}
      </div>
      </div>



    
      <div className="h-[754px] bg-[#F3F4F4] mt-32 flex justify-center items-center flex-col" id="pb">
        <h1 className="text-5xl font-semibold ph1">Or Subscribe To The Newsletter</h1>
        <div className="flex justify-between flex-row gap-10 h-8 mt-20">
            <input type="text" placeholder="Email Address..." className=" inp w-[643px] px-4 pb-2"/>
            <button className="button px-3 pb-1">SUBMIT</button>
        </div>
       <h1 className="mt-20 text-5xl font-semibold ph2">Follow Products And Discounts On Instagram</h1>
       <div className="flex rounded gap-6 items-center justify-center mt-14" id="pi">
        <Image src={"/product img5.png"} alt="product" width={186} height={186}></Image>
        <Image src={"/product img8.png"} alt="product" width={186} height={186}></Image>
        <Image src={"/product img2.png"} alt="product" width={186} height={186}></Image>
        <Image src={"/product img.png"} alt="product" width={186} height={186}></Image>
        <Image src={"/product img3.png"} alt="product" width={186} height={186}></Image>
        <Image src={"/product img9.png"} alt="product" width={186} height={186}></Image>
       </div>
    </div>
    </div>
  );
}
