"use client";
import Image from "next/image";
import Button from "../ui/Button"; // Ensure the path is correct
import { useRouter } from "next/navigation";

interface ProductProps {
  title: string;
  text: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<ProductProps> = ({ title, text, image, price }) => {
  const router = useRouter();

  const goToProductPage = () => {
    // Navigate to the product detail page using the product's ID
    router.push("/product");
  };

  return (
    <div className="shadow-[0_4px_8px_0_rgba(0,0,0,0.08)] min-h-[369px] md:min-h-[550px] lg:min-h-[456px]">
      <div className="rounded-[5px] mx-auto overflow-hidden">
        <Image
          src={image}
          width={500}
          height={500}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <div>
        <h2 className="font-semibold text-[18px] lg:text-[22px] lg:font-bold leading-[100%] pt-[32px] pb-[16px] text-center">
          {title}
        </h2>
        <p className="font-normal text-[14px] lg:text-[18px] leading-[100%] text-[#000000] pb-[8px] text-center">
          {text}
        </p>
        <p className="text-[18px] lg:text-[20px] font-bold leading-[100%] text-[#000000] text-center pb-[24.5px] lg:pb-[32px]">
          {price}
        </p>
        <div className="flex items-center justify-center">
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
