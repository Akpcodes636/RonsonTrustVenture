import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";


const Logo: FC = () => {
    return (
        <Link href="/" className="">
             <div className="">
        <Image
          src="/image/logo1.png"
          height={200}
          width={200}
          alt="logo"
          className="h-[100px] w-[100px] object-contain"
        />
      </div>
        </Link>
    );
};

export default Logo;
