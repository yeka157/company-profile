import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
const Testimonials = () => {
  return (
    <div className="py-24">
      <div className="flex flex-col items-center justify-center gap-y-2.5 mb-10">
        <h4 className="font-bold text-2xl leading-5 text-peachRed">
          \ From our Customers \
        </h4>
        <h2 className="text-[40px] leading-10 font-bold text-darkBlue mt-2.5 mb-10">
          Testimonials
        </h2>
      </div>
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonials;
