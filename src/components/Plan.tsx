import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "./ui/carousel";

const Plan = () => {
  const plans = [
    {
      icon: "step-1.svg",
      title: "Research",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page.",
    },
    {
      icon: "step-2.svg",
      title: "Design",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page.",
    },
    {
      icon: "step-3.svg",
      title: "Develop",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page.",
    },
    {
      icon: "step-4.svg",
      title: "Test",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page.",
    },
  ];
  return (
    <div className="container mx-auto py-24">
      <div className="flex flex-col items-center justify-center">
        <h4 className="font-bold text-2xl leading-5 text-peachRed">
          \ Planning \
        </h4>
        <h2 className="text-[40px] leading-10 font-bold text-darkBlue mt-2.5 mb-10">
          Our Process
        </h2>
        <div className="flex justify-center gap-x-8">
          <Carousel
            opts={{
              loop: false,
              align: "center",
              containScroll: false,
              breakpoints: {
                "(min-width: 1024px)": { containScroll: "keepSnaps" },
              },
            }}
          >
            <CarouselContent className="space-x-8">
              {plans.map((plan, index) => {
                const formattedIndex =
                  index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;
                return (
                  <CarouselItem
                    key={index}
                    className="relative bg-offWhite p-8 flex flex-col gap-y-5 rounded-[10px] max-w-[350px]"
                  >
                    <div className="bg-white size-20 flex items-center justify-center rounded-[10px]">
                      <Image src={plan?.icon} alt="" width={50} height={50} />
                    </div>
                    <h4 className="font-extrabold text-xl leading-6 text-darkBlue">
                      {plan?.title}
                    </h4>
                    <div className="flex items-center gap-x-2.5">
                      <div className="w-14 h-1.5 bg-peachRed rounded-[6px]"></div>
                      <div className="w-5 h-1.5 bg-peachRed rounded-[6px]"></div>
                    </div>
                    <p className="leading-6">{plan?.description}</p>
                    <div className="absolute top-2.5 right-2.5 opacity-10 text-5xl leading-[50px] text-darkBlue font-extrabold">
                      {formattedIndex}
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="m-0 p-0 lg:hidden">
              <CarouselDots />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Plan;
