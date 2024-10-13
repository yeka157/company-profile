import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-[url('/hero-banner.png')] bg-cover bg-center h-screen w-full sm:h-72 md:h-96 lg:h-[700px]">
      {/* Add your content here */}
      <div className="container mx-auto h-full flex flex-col justify-center ps-16 gap-y-5">
        <h4 className="text-2xl leading-5 text-peachRed font-bold">
          \ We Are Here \
        </h4>
        <h2 className="text-darkBlue text-5xl leading-[58px] max-w-md font-bold">
          Better Insights For Business Growth
        </h2>
        <div>
          <Button className="py-4 px-8 text-xl font-medium h-14">
            <Link href={"/services"}>View More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
