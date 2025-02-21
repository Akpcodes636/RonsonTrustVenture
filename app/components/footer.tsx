import React, { useState } from "react";
import Logo from "./ui/Logo";
import Link from "next/link";
import { Instagram, Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <footer className="bg-[#ECECEC] py-12">
      <section className="container mx-auto px-4">
        {/* Grid Layout for Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div className="flex flex-col  mx-auto">
            <Logo />
            <p className="text-sm text-black font-normal max-w-md">
              Ronson Trust Ventures is committed to delivering innovative
              solutions and fostering strong relationships with customers
              worldwide.
            </p>
          </div>

          {/* Navigation Section */}
          <div>
            <h4 className="mb-4 text-black text-lg font-semibold text-center md:text-start lg:text-start">
              Navigation
            </h4>
            <div className="grid gap-3 text-sm">
              <Link
                href="/"
                className="text-black hover:text-[#E72418] text-center md:text-start lg:text-start"
              >
                Home
              </Link>
              <Link
                href="/About"
                className="text-black hover:text-[#E72418] text-center md:text-start lg:text-start"
              >
                About
              </Link>
              <Link
                href="/"
                className="text-black hover:text-[#E72418] text-center md:text-start lg:text-start"
              >
                Services
              </Link>
              <Link
                href="/Contact"
                className="text-black hover:text-[#E72418] text-center md:text-start lg:text-start"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="mb-4 text-black text-lg font-semibold text-center md:text-start lg:text-start">
              Services
            </h4>
            <div className="grid gap-3 text-sm">
              <Link
                href="/Spare"
                className="text-black hover:text-[#E72418] text-center md:text-start lg:text-start"
              >
                Sales of Spare Parts
              </Link>
              <Link
                href="/Spare"
                className="text-black hover:text-[#E72418] text-center md:text-start lg:text-start"
              >
                Manitowoc Parts
              </Link>
              <Link
                href="/Spare"
                className="text-black hover:text-[#E72418] text-center md:text-start lg:text-start"
              >
                Bobcat Parts
              </Link>
              <Link
                href="/Spare"
                className="text-black hover:text-[#E72418] text-center md:text-start lg:text-start"
              >
                Tapco Parts
              </Link>
              <Link
                href="/Contact"
                className="text-black hover:text-[#E72418] text-center md:text-start lg:text-start"
              >
                Repairs and Replacement
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mx-auto text-center md:text-start lg:text-start">
            <h4 className="mb-4 text-black text-lg font-semibold">
              Contact Us
            </h4>
            <div className="grid gap-3 text-sm">
              <Link
                href="#"
                className="text-black hover:text-[#E72418] flex items-center justify-center md:justify-start gap-2"
              >
                <MapPin size={24} color="black" />
                <span>20 Medermott Road Warri.</span>
              </Link>
              <Link
                href="mailto:ralphronsontvnigeria@gmail.com"
                className="text-black hover:text-[#E72418] flex items-center justify-center md:justify-start gap-2"
              >
                <Mail size={24} color="black" />
                <span>ralphronsontvnigeria@gmail.com</span>
              </Link>
              <Link
                href="#"
                className="text-black hover:text-[#E72418] flex items-center justify-center md:justify-start gap-2"
              >
                <Globe size={24} color="black" />
                <span>www.RonsonTrustVenture.com</span>
              </Link>
              <Link
                href="tel:07901039710"
                className="text-black hover:text-[#E72418] flex items-center justify-center md:justify-start gap-2"
              >
                <Phone size={24} color="black" />
                <span>+234 7062470966</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-black pt-4 text-center text-sm text-black">
          Copyright © {currentYear} Ronson Trust Ventures. All Rights Reserved.
        </div>
      </section>
    </footer>
  );
};

export default Footer;
