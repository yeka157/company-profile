import React from "react";

interface BannerProps {
  page: string;
}

const Banner = ({ page }: BannerProps) => {
  return (
    <div className="bg-darkBlue w-full py-24">
      <div className="flex items-center justify-center flex-col gap-y-2.5">
        <h1 className="text-peachRed text-5xl leading-[58px] font-bold">
          {page}
        </h1>
        <p className="text-white text-2xl leading-5 font-medium">
          Home / {page}
        </p>
      </div>
    </div>
  );
};

export default Banner;
