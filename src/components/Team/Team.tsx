import { MemberWithPosition } from "@/types/member";
import Image from "next/image";
import React from "react";

interface TeamProps {
  members?: MemberWithPosition[];
  bgColor?: string;
}

const Team: React.FC<TeamProps> = ({ members, bgColor }) => {
  return (
    <div className={`bg-${bgColor} py-24`}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-y-2.5">
          <h4 className="text-peachRed text-2xl leading-5 font-bold">
            \ Team \
          </h4>
          <h3 className="font-bold text-[40px] leading-10 text-darkBlue">
            Our Leaders
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {members?.map((member, index) => (
            <div key={index} className="flex flex-col items-center gap-y-4">
              <Image
                src={member.picture.large}
                alt={`${member.name.first} ${member.name.last}`}
                width={250}
                height={300}
                quality={100}
                className="rounded-[10px]"
              />
              <div className="flex flex-col items-center gap-y-1">
                <h4 className="font-bold text-xl text-peachRed leading-5">
                  {member.name.first} {member.name.last}
                </h4>
                <p className="leading-5 font-medium text-darkBlue">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
