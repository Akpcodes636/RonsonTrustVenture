"use client";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import Button from "../ui/Button";

const SectionComponent = () => {
  return (
    <section className="pt-52 bg-[#1E2A38]">
      <div className="container mx-auto min-h-screen">
        <div className="mb-[80px]">
          <h1 className="text-center font-semibold text-[30px] leading-[45px] mb-[16px] text-white">
            Contact Us
          </h1>
          <p className="text-center font-normal text-[20px] leading-[30px] px-4 text-[#C8CED2]">
            Have questions or need assistance? We&apos;re here to help! Reach out to
            us, and our team will get back to you promptly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center px-4 py-[50px]">
          <div className="w-full h-full order-2 md:order-2 lg:order-1 py-[80px]">
            <div>
              <div>
                <h1 className="heading text-[24px] leading-[36px] mb-[16px] text-white">
                  Get in Touch
                </h1>
                <p className="body-text max-w-[513px] text-[18px] leading-[30px] text-[#C8CED2]">
                  We&apos;re here to help! Whether you have questions, or need more
                  information, feel free to reach out to our team anytime.
                </p>
              </div>
              <div>
                <div className="mt-[40px]">
                  {/* Address */}
                  <Link href="/" className="flex items-center gap-2 mb-[48px]">
                    <div className="border-[1px] border-[#E72418] rounded-full w-[56px] h-[56px] flex items-center justify-center bg-[#ECECEC]">
                      <MapPin size={32} color="#E72418" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="font-medium text-[20px] leading-[30px] text-white">
                        Address
                      </h2>
                      <p className="font-normal text-[16px] leading-[24px] text-[#C8CED2]">
                        20 Medermott Road Warri
                      </p>
                    </div>
                  </Link>
                  {/* Phone */}
                  <Link href="/" className="flex items-center gap-2 mb-[48px]">
                    <div className="border-[1px] border-[#E72418] rounded-full w-[56px] h-[56px] flex items-center justify-center bg-[#ECECEC]">
                      <Phone size={32} color="#E72418" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="font-medium text-[20px] leading-[30px] text-white">
                        Phone Number
                      </h2>
                      <p className="font-normal text-[16px] leading-[24px] text-[#C8CED2]">
                        07062470966
                      </p>
                    </div>
                  </Link>
                  {/* Email */}
                  <Link href="/" className="flex items-center gap-2">
                    <div className="border-[1px] border-[#E72418] rounded-full w-[56px] h-[56px] flex items-center justify-center bg-[#ECECEC]">
                      <Mail size={32} color="#E72418" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="font-medium text-[20px] leading-[30px] text-white">
                        Email
                      </h2>
                      <p className="font-normal text-[16px] leading-[24px] text-[#C8CED2]">
                        ralphronsontvnigeria@gmail.com
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-[#ECECEC] border-[1px] border-[#70707066] order-1 md:order-1 lg:order-2 rounded-[5px]">
            <div className="py-[50px] px-[54px]">
              <h2 className="font-semibold text-[24px] leading-[36px] text-center mb-[24px] text-[#1E2A38]">
                Send a Message
              </h2>
              <form>
                <div className="mb-[40px]">
                  <label
                    htmlFor="name"
                    className="font-medium text-[16px] leading-[24px] text-[#1E2A38]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full h-[48px] bg-white border-[1px] border-[#70707066] rounded-[5px] px-4 focus:border-[#E72418] focus:outline-none"
                  />
                </div>
                <div className="mb-[40px]">
                  <label
                    htmlFor="email"
                    className="font-medium text-[16px] leading-[24px] text-[#1E2A38]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full h-[48px] bg-white border-[1px] border-[#70707066] rounded-[5px] px-4 focus:border-[#E72418] focus:outline-none"
                  />
                </div>
                <div className="mb-[40px]">
                  <label
                    htmlFor="message"
                    className="font-medium text-[16px] leading-[24px] text-[#1E2A38]"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full h-[128px] rounded-[5px] bg-white border-[1px] border-[#70707066] resize-none p-4 focus:border-[#E72418] focus:outline-none"
                  ></textarea>
                </div>
                <div className="flex justify-center md:justify-start lg:justify-start">
                  <Button
                   type="button"
                    css="w-[288px] h-[56px] flex items-center justify-center bg-[#E72418] hover:bg-[#E72418]/90 text-white"
                    style="primary"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionComponent;