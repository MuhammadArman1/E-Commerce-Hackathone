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
  {
    id: 1,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: null,
    tag: "New",
    status: null,
    imageUrl: "/product img.png",
  },
  {
    id: 2,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: 30,
    tag: null,
    status: "Sales",
    imageUrl: "/product img2.png",
  },
  {
    id: 3,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: null,
    tag: null,
    status: null,
    imageUrl: "/product img3.png",
  },
  {
    id: 4,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: null,
    tag: null,
    status: null,
    imageUrl: "/product img4.png",
  },
  {
    id: 5,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: null,
    tag: "New",
    status: null,
    imageUrl: "/product img5.png",
  },
  {
    id: 6,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: 30,
    tag: null,
    status: "Sales",
    imageUrl: "/product img6.png",
  },
  {
    id: 7,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: null,
    tag: null,
    status: null,
    imageUrl: "/product img 7.png",
  },
  {
    id: 8,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: null,
    tag: null,
    status: null,
    imageUrl: "/product img.png",
  },
  {
    id: 9,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: null,
    tag: "New",
    status: null,
    imageUrl: "/product img8.png",
  },
  {
    id: 10,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: 30,
    tag: null,
    status: "Sales",
    imageUrl: "/product img2.png",
  },
  {
    id: 11,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: null,
    tag: null,
    status: null,
    imageUrl: "/product img3.png",
  },
  {
    id: 12,
    name: "Library Stool Chair",
    price: 20,
    originalPrice: null,
    tag: null,
    status: null,
    imageUrl: "/product img9.png",
  },
];

type ProductCardProps = { product: Product };

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-[300px] h-[377px] rounded-lg ">
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
              <span className="line-through mr-2">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-black">${product.price}</span>
          </p>
        </div>
        <button
          aria-label="Add to Cart"
          className="btn px-3 py-2 bg-[#F0F2F3] rounded-lg"
        >
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

export default function HomeProduct1() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold py-16 relative right-[470px]">
          Featured products
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {products.slice(0, 4).map((product) => (
            <Link href="/Productpage" key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>

      <section className="mb-16">
  <h2 className="hph1 text-3xl font-bold mt-16 text-start px-6 ml-48">
    Top Categories
  </h2>
  <div className="hp1 flex flex-wrap justify-center gap-6 sm:gap-12 my-20 px-4 sm:px-16">
    {/* Wing Chair */}
    <div className="text-center">
      <div className="relative mx-auto w-[250px] h-[250px] sm:w-[350px] sm:h-[350px]">
        <Image
          src={"/Product img8.png"}
          alt="Wing Chair"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="hp-des relative bottom-8 sm:bottom-20 bg-black opacity-80 text-white h-[60px] sm:h-[85px] flex flex-col items-center">
        <h3 className="text-base sm:text-lg font-semibold mt-2 sm:mt-4">
          Wing Chair
        </h3>
        <p className="text-gray-400 text-sm">2,041 Products</p>
      </div>
    </div>

    {/* Wooden Chair */}
    <div className="text-center">
      <div className="relative mx-auto w-[250px] h-[250px] sm:w-[350px] sm:h-[350px]">
        <Image
          src={"/product img4.png"}
          alt="Wooden Chair"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="hp-des relative bottom-8 sm:bottom-20 bg-black opacity-80 text-white h-[60px] sm:h-[85px] flex flex-col items-center">
        <h3 className="text-base sm:text-lg font-semibold mt-2 sm:mt-4">
          Wooden Chair
        </h3>
        <p className="text-gray-400 text-sm">157 Products</p>
      </div>
    </div>

    {/* Desk Chair */}
    <div className="text-center">
      <div className="relative mx-auto w-[250px] h-[250px] sm:w-[350px] sm:h-[350px]">
        <Image
          src={"/product img9.png"}
          alt="Desk Chair"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="hp-des relative bottom-8 sm:bottom-20 bg-black opacity-80 text-white h-[60px] sm:h-[85px] flex flex-col items-center">
        <h3 className="text-base sm:text-lg font-semibold mt-2 sm:mt-4">
          Desk Chair
        </h3>
        <p className="text-gray-400 text-sm">154 Products</p>
      </div>
    </div>
  </div>
</section>


      {/* Explore New Styles Section */}
      <section className="hpi1 mb-16">
      <h2 className="relative right-[600px] bottom-[270px]  transform -rotate-90 text-3xl font-bold text-gray-800">
    Explore New and Popular Styles
  </h2>
      <div className="flex justify-center gap-5">
        {/* Large Featured Image */}
        <div>
        <div className="relative col-span-1 lg:col-span-2 row-span-2 w-[548px] h-[565px] mx-auto">
          <Image
            src={"/product img3.png"}
            alt="Orange Chair"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        </div>
        {/* Smaller Grid Items */}
        <div className="grid grid-cols-2 gap-5">
        <div className="relative w-[270px] h-[270px]">
          <Image
            src={"/product img4.png"}
            alt="White Chair 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative w-[270px] h-[270px]">
          <Image
            src={"/product img.png"}
            alt="White Chair 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative w-[270px] h-[270px]">
          <Image
            src={"/product img6.png"}
            alt="Gray Chair"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative w-[270px] h-[270px]">
          <Image
            src={"/product img.png"}
            alt="White Chair 3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export function HomeProduct2() {
  return(
    <div>
        <div className="flex flex-col items-center mb-20">
        <h1 className="text-3xl font-bold text-center py-16">
          Our Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.slice(0, 8).map((product) => (
            <Link href="/Productpage" key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
