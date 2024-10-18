import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-[url('/banner-mobile.png')] sm:bg-[url('/hero-banner.png')] bg-cover md:bg-top lg:bg-[length:100%_auto] lg:bg-center h-screen w-full sm:h-72 md:h-[600px] lg:h-[700px] 2xl:h-[1200px]">
      <div className="container mx-auto h-full flex flex-col justify-center ps-4 md:ps-16 gap-y-4 md:gap-y-5">
        <h4 className="text-lg sm:text-xl md:text-2xl leading-5 text-peachRed font-bold">
          \ We Are Here \
        </h4>
        <h2 className="relative z-20 text-darkBlue text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-[40px] md:leading-[58px] max-w-xs sm:max-w-md font-bold">
          Better Insights For Business Growth
        </h2>
        <div>
          <Button className="py-3 sm:py-4 px-6 sm:px-8 text-lg sm:text-xl font-medium h-12 sm:h-14">
            <Link href={"/services"}>View More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
