"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from './ui/Logo';
import { NavLinks } from './utilis/contents/HomePage.content';
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from 'react-icons/ci';
import Button from './ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-current fixed w-full top-0 z-50">
      {/* Top Contact Info - Hidden on Mobile */}
      <div className="hidden md:block">
        <div className="container mx-auto p-3">
          <div className="flex items-center justify-between h-12">
            <Logo />
            <div className="flex items-center gap-8">
              {/* Phone Contact */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 border rounded-full flex items-center justify-center border-[#0B024B]">
                  <FaPhoneAlt size={18} color='#243443' />
                </div>
                <a href="tel:+2347062470966" className="text-[#243443]">
                  +234 7062470966
                </a>
              </div>
              {/* Email Contact */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 border rounded-full flex items-center justify-center border-[#0B024B]">
                  <CiMail size={18} color='#243443' />
                </div>
                <a href="mailto:ralphronsontvnigeria@gmail.com" className="text-[#243443]">
                  ralphronsontvnigeria@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white border-t border-gray-300 shadow-lg">
        <div className="container mx-auto flex items-center justify-between h-20 md:h-14 lg:h-14">
          {/* Logo */}
          <div className="block md:hidden lg:hidden">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex items-center space-x-6">
              {NavLinks.map((link, index) => (
                <li key={index} className="relative">
                  <Link
                    href={link.router}
                    className="text-[#243443] body-text px-4 py-[18px] transition-all duration-300 ease-in-out relative 
                               after:content-[''] after:absolute after:left-2 after:bottom-0 
                               after:w-full after:h-[2px] after:bg-[#E72418] after:scale-x-0 
                               after:origin-left after:transition-transform after:duration-300 
                               hover:after:scale-x-100"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Request Quote Button - Hidden on Mobile */}
          <div className="hidden md:block">
            <Button style="primary" css="w-[200px] h-[56px] text-[13px] text-white hover:text-black cursor-pointer uppercase tracking-[2px] leading-[1.5rem] text-center appearance-none transition-transform duration-500 transform translate-x-0">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu - Slides from Top */}
        <div
          className={`absolute top-20 left-0 w-full  bg-white shadow-lg transition-all duration-300 ease-in-out z-50 ${
            isMenuOpen ? "block" : "hidden"
          } md:hidden`}
        >
          <ul className="flex flex-col gap-4 px-6">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.router}
                  className="text-[#243443] body-text font-medium text-lg hover:text-[#0073E5] transition-all duration-300 ease-in-out block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Request Quote Button - Visible in Mobile Menu */}
          <div className="mt-4">
            <Button style="primary" css="w-full h-[56px]  text-white">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;