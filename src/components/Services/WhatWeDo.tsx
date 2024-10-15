import Image from "next/image";
import React from "react";

const WhatWeDo = () => {
  return (
    <div className="bg-offWhite">
      <div className="container mx-auto flex gap-8 items-center py-24 flex-col lg:flex-row px-5">
        <Image
          src={"/what-we-do.png"}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full lg:w-1/2 h-auto"
        />
        <div className="w-full lg:w-1/2">
          <h4 className="text-peachRed font-bold text-2xl leading-5 mb-2.5">
            \ What We Do \
          </h4>
          <h2 className="text-darkBlue text-[40px] leading-[50px] font-bold mb-8">
            We Develop Product That People Love to Use.
          </h2>
          <p className="font-medium leading-7 text-black mb-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed, Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed
          </p>
          <div className="flex items-center gap-8 flex-col md:flex-row">
            <div className="p-4 flex items-center gap-x-4 bg-white rounded-[10px] w-full md:w-1/2">
              <div className="bg-peachRed/10 p-4 size-[70px] rounded-[10px]">
                <Image
                  src={"/vision.svg"}
                  width={40}
                  height={40}
                  alt=""
                  className="w-[40px] h-[40px]"
                />
              </div>
              <div className="flex flex-col gap-y-2.5">
                <p className="text-peachRed text-lg leading-5 font-bold">
                  Our Vision
                </p>
                <p className="text-darkBlue font-medium leading-5 line-clamp-2">
                  It is a long established fact that
                </p>
              </div>
            </div>
            <div className="p-4 flex items-center gap-x-4 bg-white rounded-[10px] w-full md:w-1/2">
              <div className="bg-peachRed/10 p-4 size-[70px] rounded-[10px]">
                <Image
                  src={"/goal.svg"}
                  width={40}
                  height={40}
                  alt=""
                  className="w-10 h-auto"
                />
              </div>
              <div className="flex flex-col gap-y-2.5">
                <p className="text-peachRed text-lg leading-5 font-bold">
                  Our Goal
                </p>
                <p className="text-darkBlue font-medium leading-5 line-clamp-2">
                  It is a long established fact that
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
