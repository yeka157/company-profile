import About from "@/components/About/About";
import History from "@/components/About/History";
import Banner from "@/components/Banner";
import Tagline from "@/components/Home/Tagline";
import Team from "@/components/Team/Team";
import { Member, MemberWithPosition } from "@/types/member";
import React from "react";

const Page = async () => {
  const fetchMembers = async () => {
    const res = await fetch(
      "https://randomuser.me/api/?results=8&inc=name,picture"
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
        position:
          index > 3 ? position[index % position.length] : position[index],
      };
    }
  );
  return (
    <div className="min-h-screen pt-[100px]">
      <Banner page="About" />
      <About />
      <History />
      <Team bgColor="white" members={membersWithPosition} />
      <Tagline />
    </div>
  );
};

export default Page;
