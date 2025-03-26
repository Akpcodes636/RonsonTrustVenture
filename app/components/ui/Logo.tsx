import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";


const Logo: FC = () => {
    return (
        <Link href="/" className="">
             <div className="">
        <Image
          src="/image/logo1.png"
          height={50}
          width={50}
          alt="logo"
          className="h-[49px]  w-[45px] lg:h-[76px] lg:w-[71px] object-contain"
        />
      </div>
        </Link>
    );
};

export default Logo;
