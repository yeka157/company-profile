import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="bg-offWhite">
      <div className="container mx-auto flex gap-x-8 items-center py-24 lg:px-5">
        <Image
          src={"/about.png"}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-1/2 h-auto"
        />
        <div className="w-1/2">
          <h4 className="text-peachRed font-bold text-2xl leading-5 mb-2.5">
            \ About us \
          </h4>
          <h2 className="text-darkBlue text-[40px] leading-[50px] font-bold mb-8">
            One of the Fastest Way to Business Growth
          </h2>
          <p className="font-medium leading-7 text-black mb-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters
          </p>
          <div className="bg-white rounded-[10px] p-4 flex gap-x-4 items-center">
            <div className="size-[70px] bg-offWhite rounded-[10px] flex items-center justify-center">
              <Image
                src={"/customer-support.svg"}
                alt=""
                width={40}
                height={40}
              />
            </div>
            <div className="space-y-2.5">
              <h6 className="text-xl text-darkBlue leading-5 font-bold">
                Get Instant Professional Advice
              </h6>
              <p className="leading-4 font-medium">
                Ready to Help :{" "}
                <Link
                  href={"tel:+13566787896"}
                  className="text-peachRed font-bold ms-2.5"
                >
                  +1 356 678 7897
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
