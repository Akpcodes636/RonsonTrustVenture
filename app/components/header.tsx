"use client";
import { useState } from "react";
import Logo from "./ui/Logo";
import { NavLinks } from "./utilis/contents/HomePage.content";
import Link from "next/link";
import Button from "./ui/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-[30px] md:top-[50px] lg:top-[70px] bg-[#FFFFFF50] backdrop-blur-xl h-[96px] w-[95%] md:w-[90%] lg:w-[1240px] mx-auto rounded-full z-50">
        <div className="flex items-center justify-between container-sm mx-auto h-full px-6 md:px-10">
          <Logo />
          
          {/* Mobile menu button */}
          <button 
            className="block lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-x-[40px] xl:gap-x-[100px] text-[16px] font-bold">
              {NavLinks?.map((l, i) => (
                <li key={i}>
                  <Link href={l.router} className="text-white text-[16px] font-normal hover:text-[#B81A14] transition-all ease-in-out">
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Desktop Button */}
          <div className="hidden lg:block">
            <Button style="primary" css="w-[120px] md:w-[150px] lg:w-[182px] h-[40px] md:h-[48px] rounded-[5px]">
              Order Now
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-[96px] left-0 right-0 bg-black/90 backdrop-blur-xl rounded-b-2xl py-6 px-6 z-50">
            <ul className="flex flex-col items-center gap-y-6 text-[16px] font-bold">
              {NavLinks?.map((l, i) => (
                <li key={i}>
                  <Link href={l.router} className="text-white text-[16px] font-normal hover:text-[#B81A14] transition-all ease-in-out">
                    {l.title}
                  </Link>
                </li>
              ))}
              <li className="mt-4 w-full">
                <Button style="primary" css="w-full h-[48px] rounded-[5px]">
                  Order Now
                </Button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;