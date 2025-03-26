import React, { useState, useEffect } from "react";
import Logo from "./ui/Logo";
import Link from "next/link";
import {
  Instagram,
  Mail,
  Phone,
  MapPin,
  Globe,
  ChevronDown,
} from "lucide-react";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";

import { ReactNode } from "react";
import Image from "next/image";

const FooterSection = ({
  title,
  children,
  isMobile,
}: {
  title: string;
  children: ReactNode;
  isMobile: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="mb-8">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleSection}
      >
        <h4 className="text-black text-[18px] font-semibold">{title}</h4>
        {isMobile && (
          <ChevronDown
            size={24}
            color="black"
            className={`transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </div>
      <div
        className={`
          ${
            isMobile
              ? `overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[50vh]" : "max-h-0"
                }`
              : "block"
          }
          ${isMobile ? "px-4" : ""}
        `}
      >
        <div
          className={`flex flex-col gap-[24px] text-[14px] ${
            isMobile ? "mt-4" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    // Check initial screen size
    checkScreenSize();

    // Add event listener for resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Navigation Links Component
  const NavigationLinks = () => (
    <>
      <Link href="/" className="text-black">
        Home
      </Link>
      <Link href="/about" className="text-black">
        Products
      </Link>
      <Link href="/service" className="text-black">
        About Us
      </Link>
      <Link href="/contact" className="text-black">
        Contact
      </Link>
    </>
  );

  const SoloDiamond = () => {
    return (
      <div>
        <p className="mt-6 text-[14px] w-full md:w-full lg:max-w-[248px] leading-[24px] font-normal text-black">
          Ronson Trust Ventures is committed to delivering innovative solutions
          and fostering strong relationships with customers worldwide.
        </p>
      </div>
    );
  };

  // Services Links Component
  const ServicesLinks = () => (
    <>
      <Link href="/booking" className="text-[#000000]">
        Mawitoma 4100
      </Link>
      <Link href="/booking" className="text-[#000000]">
        Mawitoma 4200
      </Link>
    </>
  );

  // Contact Info Component
  const ContactInfo = () => (
    <>
      <Link href="/contact" className="text-[#000000] flex items-center gap-2 ">
        <MapPin size={24} color="black" />
        <span className="text-[16px] text-[#000000]">20 Medermott Road Warri</span>
      </Link>
      <Link
        href="mailto:info@solediamondltd.com"
        className="text-black flex items-center gap-2"
      >
        <Mail size={24} color="black" />
        <span className="text-[16px] text-[#000000]">ralphronsontvnigeria@gmail.com</span>
      </Link>
      <Link href="/contact" className="text-black flex items-center gap-2">
        <Globe size={24} color="black" />
        <span className="text-[16px] text-[#000000]">www.RonsonTrustVenture.com</span>
      </Link>
      <Link
        href="tel:07901039710"
        className="text-black flex items-center gap-2"
      >
        <Phone size={24} color="black" />
        <span className="text-[16px] text-[#000000]">+2347062470966</span>
      </Link>
    </>
  );

  return (
    <footer className="bg-[#E8E6E6]">
      <section className="pt-[40px] px-[16px] md:px-[32px] pb-[60px] lg:px-[40px] md:pt-[50px] md:pb-[90px] lg:pt-[80px] lg:pb-[95px]">
        <div className="container-sm mx-auto">
          <div
            className={`
            grid mb-[88px]
            ${
              isMobile
                ? "grid-cols-1"
                : isTablet
                ? "grid-cols-2 gap-x-[124px] gap-y-[64px]"
                : "grid-cols-4 gap-x-[98px]"
            } 

          `}
          >
            {/* Logo Section - Full width in mobile, first column in tablet/desktop */}
            <div
              className={`
              ${isTablet ? "col-span-2" : ""} 
              flex flex-col w-[285px] md:w-full
            `}
            >
              {/* <Logo /> */}
              <div className="w-[93px] h-[86px] hidden lg:block">
                <Image src="/image/logo1.png" width={500} height={500} alt="footer logo" />
              </div>
              <p className="hidden md:block lg:block mt-6 text-[16px] w-full md:w-full lg:max-w-[248px] leading-[24px] font-normal text-[#000000]">
                Ronson Trust Ventures is committed to delivering innovative
                solutions and fostering strong relationships with customers
                worldwide.
              </p>
            </div>

            {/* Tablet and Desktop Specific Layout */}
            {!isMobile && (
              <>
                {/* Navigation Column */}
                <div className="w-[124px]">
                  <h4 className="mb-3 text-black text-[20px] font-semibold leading-[150%]">
                    Navigation
                  </h4>
                  <div className="flex flex-col gap-[24px] text-[16px]">
                    <NavigationLinks />
                  </div>
                </div>

                {/* Services Column */}
                <div className="w-[264px]">
                  <h4 className="mb-3 text-black text-[20px] font-semibold leading-[150%]">
                    Services
                  </h4>
                  <div className="flex flex-col gap-[24px] text-[16px]">
                    <ServicesLinks />
                  </div>
                </div>

                {/* Contact and Follow Us Column */}
                <div className="w-[264px]">
                  <div className="mb-8">
                    <h4 className="mb-3 text-black text-[20px] font-semibold leading-[150%]">
                      Contact Us
                    </h4>
                    <div className="flex flex-col gap-[24px] text-[14px]">
                      <ContactInfo />
                    </div>
                  </div>
                  {/* Follow Us Section */}
                </div>
              </>
            )}

            {/* Mobile Layout */}
            {isMobile && (
              <>
                <FooterSection title="Ronson Trust" isMobile={isMobile}>
                  <SoloDiamond />
                </FooterSection>
                <FooterSection title="Navigation" isMobile={isMobile}>
                  <NavigationLinks />
                </FooterSection>

                <FooterSection title="Services" isMobile={isMobile}>
                  <ServicesLinks />
                </FooterSection>

                <FooterSection title="Contact Us" isMobile={isMobile}>
                  <ContactInfo />
                </FooterSection>
              </>
            )}
          </div>

          <div className="mt-[22.5px] border-t border-t-[#000000] pt-6">
            <div className="w-full flex justify-center">
              <div className="text-black text-[14px] text-center">
                Copyright © {currentYear} Ronson Trust Ventures. All Rights
                Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
