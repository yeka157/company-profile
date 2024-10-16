import Banner from "@/components/Banner";
import Tagline from "@/components/Home/Tagline";
import OurTeam from "@/components/Team/OurTeam";
import Team from "@/components/Team/Team";
import {
  DevMember,
  DevMemberWithPosition,
  Member,
  MemberWithPosition,
} from "@/types/member";
import React from "react";

const Page = async () => {
  const fetchMembers = async () => {
    try {
      const res = await fetch(
        "https://randomuser.me/api/?results=4&inc=name,picture"
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching team members", error);
    }
  };

  const fetchDev = async () => {
    try {
      const res = await fetch(
        "https://randomuser.me/api/?results=12&inc=name,picture,email"
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching dev team members", error);
    }
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

  const devTeam = await fetchDev();
  const devPosition = [
    "Frontend Developer",
    "Backend Developer",
    "Fullstack Developer",
    "DevOps Engineer",
  ];

  const devMembersWithPosition: DevMemberWithPosition[] = devTeam.results.map(
    (dev: DevMember, index: number) => {
      return {
        ...dev,
        position:
          index > 3
            ? devPosition[index % devPosition.length]
            : devPosition[index],
      };
    }
  );

  return (
    <div className="min-h-screen pt-[100px]">
      <Banner page="Meet Our Team" />
      <Team members={membersWithPosition} bgColor="offWhite" />
      <OurTeam teamMembers={devMembersWithPosition} />
      <Tagline />
    </div>
  );
};

export default Page;
