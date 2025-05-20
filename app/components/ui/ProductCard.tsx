"use client";
import Image from "next/image";
import Button from "../ui/Button"; // Ensure the path is correct
import { useRouter } from "next/navigation";
// import products from "../../data/caterpillar.json"; // Adjust the path as needed

interface ProductProps {
  title: string;
  text: string;
  price: string;
  image: string;
  description?: string;
  slug: string;
}

const ProductCard: React.FC<ProductProps> = ({ title, text, image, price,slug }) => {
  console.log(slug);
  const router = useRouter();

  const goToProductPage = () => {
    // Navigate to the product detail page using the product's ID
    router.push(`/products/${slug}`);
  };

  return (
  <div className="shadow-[0_4px_8px_0_rgba(0,0,0,0.08)] min-h-[369px] md:min-h-[550px] lg:min-h-[456px] rounded-[8px] overflow-hidden">
  {/* Image section */}
  <div className="h-[144px] md:h-[200px] lg:h-[200px] bg-white  flex items-center justify-center">
    <Image
      src={image}
      width={500}
      height={500}
      alt={title}
      className="w-full h-full object-contain"
    />
  </div>

  {/* Content section with subtle separation */}
  <div className="bg-white/80 backdrop-blur-sm px-4 lg:px-6 pt-6 pb-8 ">
    <h2 className="font-semibold text-[18px] lg:text-[22px] lg:font-bold leading-[100%] text-center mb-4">
      {title}
    </h2>
    <p className="font-normal text-[14px] lg:text-[18px] leading-[100%] text-center text-gray-800 mb-2">
      {text}
    </p>
    <p className="text-[18px] lg:text-[20px] font-bold leading-[100%] text-center text-gray-900 mb-6">
      {price}
    </p>
    <div className="flex justify-center">
      <Button
        style="primary"
        css="w-[134px] h-[48px] lg:w-[182px] lg:h-[48px]"
        type="button"
        fn={goToProductPage}
      >
        Buy Now
      </Button>
    </div>
  </div>
</div>  
  );
};

export default ProductCard;
