import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "../ui/carousel";
import Image from "next/image";
import { Member, MemberWithPosition } from "@/types/member";
const Testimonials = async () => {
  const fetchMembers = async () => {
    const res = await fetch(
      "https://randomuser.me/api/?results=5&inc=name,picture"
    );
    const data = await res.json();
    return data;
  };

  const members = await fetchMembers();
  const position = ["CEO", "CTO", "COO", "CFO"];

  const membersWithPosition: MemberWithPosition[] = members.results.map(
    (member: Member, index: number) => {
      return {
        ...member,
        position: position[index],
      };
    }
  );
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
      <Carousel opts={{ loop: false }}>
        <CarouselContent>
          {membersWithPosition.map((val, index) => (
            <CarouselItem key={index} className="max-w-[750px]">
              <div className="p-8 rounded-[10px] bg-offWhite">
                <div className="flex justify-between">
                  {/* <div className="size-20 rounded-full bg-black"></div> */}
                  <Image
                    src={val.picture.large}
                    alt=""
                    width={80}
                    height={80}
                    className="w-20 h-auto rounded-full"
                  />
                  <Image
                    src={"/quote.svg"}
                    alt=""
                    width={60}
                    height={60}
                    className="w-[60px] h-auto"
                  />
                </div>
                <p className="font-medium leading-7 text-blackShade mt-10 mb-8">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed.
                </p>
                <div>
                  <p className="leading-5 text-peachRed font-bold">
                    Samuel Karl
                  </p>
                  <p>CEO</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots />
      </Carousel>
    </div>
  );
};

export default Testimonials;
