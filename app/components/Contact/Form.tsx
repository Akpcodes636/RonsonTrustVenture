"use client";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import Button from "../ui/Button";
import Icon from "../ui/Icon";

export default function ContactForm() {
  return (
    <section className="min-h-screen  relative">
      <Icon
        image="/image/Bolt.svg"
        direction="left"
        className="right-0 top-0 hidden lg:block"
      />
      <div className="container-sm mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-[96px] items-center -mt-52 lg:-mt-28 2xl:-mt-52 mb-[96px] lg:mb-[160px]">
          {/* Contact Information Section */}

          <div className="w-full h-full order-1 shadow-[0px_4px_16px_1px_#00000014]">
            <Icon
              image="/image/Bolt.svg"
              direction="left"
              className="right-0 top-[60%] lg:top-[40%]"
            />
            <div className="w-full min-h-[400px] lg:h-full p-[41px] lg:p-[80px_50px_214px] bg-[#F8E8E8] rounded-[5px]">
              <div>
                <div className="mb-[16px] text-center lg:text-start">
                  <h2 className="heading text-[24px] lg:text-[26px] leading-[130%] mb-[8px] text-[#B81A14]">
                    Get in Touch
                  </h2>
                  <p className="body-text text-[16px] text-[#727272] leading-[24px] lg:leading-[150%]">
                    We&apos;re here to answer your questions and assist you.
                  </p>
                </div>

                <div className="mt-[40px]">
                  {/* Address */}
                  <Link href="/" className="flex items-center gap-2 mb-[48px]">
                    <div className="border-[1px] border-[#B81A14] rounded-full w-[48px] h-[48px] lg:w-[56px] lg:h-[56px] flex items-center justify-center bg-[#ECECEC]">
                      <MapPin size={26} color="#E72418" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="font-medium text-[18px] leading-[150%] text-[#000000] heading">
                        Head Office
                      </h2>
                      <p className="font-normal text-[14px] lg:text-[16px] leading-[150%] text-[#727272] ">
                        20 Medermott Road Warri
                      </p>
                    </div>
                  </Link>

                  {/* Phone */}
                  <Link href="/" className="flex items-center gap-2 mb-[48px]">
                    <div className="border-[1px] border-[#B81A14] rounded-full w-[48px] h-[48px] lg:w-[56px] lg:h-[56px] flex items-center justify-center bg-[#ECECEC]">
                      <Phone size={26} color="#E72418" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="font-medium text-[20px] leading-[30px] text-[#000000]">
                        Call Us
                      </h2>
                      <p className="font-normal text-[14px] lg:text-[16px] leading-[150%] text-[#727272]">
                        07062470966
                      </p>
                    </div>
                  </Link>

                  {/* Email */}
                  <Link href="/" className="flex items-center gap-2">
                    <div className="border-[1px] border-[#B81A14] rounded-full w-[48px] h-[48px] lg:w-[56px] lg:h-[56px] flex items-center justify-center bg-[#ECECEC]">
                      <Mail size={26} color="#E72418" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="font-medium text-[18px] leading-[100%] text-[#000000]">
                        Email Us
                      </h2>
                      <p className="font-normal text-[14px] lg:text-[16px] leading-[150%] text-[#727272]">
                        ralphronsontvnigeria@gmail.com
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full bg-white  shadow-[0px_4px_16px_1px_#00000014]">
            <div className="w-full h-full rounded-[5px]">
              <div className="py-[40px] px-[25px] lg:py-[53px] lg:px-[52px]">
                <h2 className="font-semibold text-[24px] leading-[36px] text-center mb-[24px] text-[#1E2A38]">
                  Send a Message
                </h2>

                <form>
                  <div className="mb-[32px]">
                    <label
                      htmlFor="name"
                      className="font-medium text-[16px] leading-[24px] text-[#1E2A38]"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full h-[50px] lg:h-[52px] bg-[#EFEFEF] rounded-[5px] px-4 focus:outline-none"
                    />
                  </div>

                  <div className="mb-[32px]">
                    <label
                      htmlFor="email"
                      className="font-medium text-[16px] leading-[24px] text-[#1E2A38]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full h-[50px] lg:h-[52px] bg-[#EFEFEF] rounded-[5px] px-4 focus:outline-none"
                    />
                  </div>

                  <div className="mb-[32px]">
                    <label
                      htmlFor="message"
                      className="font-medium text-[16px] leading-[24px] text-[#1E2A38]"
                    >
                      Message
                    </label>
                    <textarea className="w-full h-[144px] lg:h-[152px] bg-[#EFEFEF] rounded-[5px] resize-none p-4 focus:border-[#E72418] focus:outline-none"></textarea>
                  </div>

                  <div className="flex justify-center md:justify-start lg:justify-start">
                    <Button
                      type="button"
                      css="w-[182px] h-[48px] flex items-center justify-center bg-[#B81A14] text-white text-[16px]"
                      style="primary"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Form Section */}
        </div>
      </div>
    </section>
  );
}
