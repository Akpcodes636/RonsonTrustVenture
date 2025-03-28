"use client";
import { useState } from "react";
import Logo from "./ui/Logo";
import { NavLinks } from "./utilis/contents/HomePage.content";
import Link from "next/link";
import Button from "./ui/Button";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="container-sm mx-auto">
        <div className="px-10">
          <div className="flex items-center justify-between bg-[#00000069] backdrop-blur-xl max-w-[90%] md:max-w-[700px] lg:max-w-[1240px] h-[56px] lg:h-[96px] rounded-full fixed inset-x-0 top-[30px] mx-auto px-5 lg:px-14 z-50">
            <div>
              <Logo />
            </div>
            <div
              className="block lg:hidden cursor-pointer"
              onClick={toggleMenu}
            >
              <GiHamburgerMenu color="white" size={24} />
            </div>
            <nav className="hidden translate-x-0 duration-150 lg:block">
              <ul className="my-auto flex flex-col items-center gap-x-[100px] text-[16px] font-bold lg:flex-row">
                {NavLinks?.map((l, i) => (
                  <li key={i} className="text-white">
                    <Link href={l.router}>{l.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden lg:block">
              <Button
                type="button"
                style="primary"
                css="w-[182px] h-[48px] bg-[#B81A14] rounded-[5px]"
              >
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-transform duration-500 ease-in-out hide-scroll  ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end items-end p-7">
          <button onClick={toggleMenu} className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <nav className="px-7 pt-10">
          <ul className="flex flex-col items-start gap-y-[40px] text-[20px] font-bold ">
            {NavLinks?.map((l, i) => (
              <li key={i} className="text-black">
                <Link href={l.router} onClick={toggleMenu}>
                  {l.title}
                </Link>
              </li>
            ))}
            <li className="">
              <Button
                type="button"
                style="primary"
                css="w-[182px] h-[48px] bg-[#B81A14] rounded-[5px]"
              >
                Order Now
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
