import {FC} from "react";
import Image from "next/image";

interface IconProps {
  direction: "left" | "right";
  className?: string;
  image?:string
}

const Icon: FC<IconProps> = ({ 
  direction, 
  className = "",
  image, 
 
}) => {
  return (
    <div
      className={`flex items-center justify-center absolute ${className}
  `}
    >
      <div className={`w-[22px] h-[22px]  lg:w-[25px] lg:h-[25px] relative `}>
        <Image
          src={image || "/default-image.png"}
          alt={`Spray can pointing ${direction}`}
          width={500}
          height={500}
          className="w-full h-full "
        />
      </div>
    </div>
  );
};

export default Icon;