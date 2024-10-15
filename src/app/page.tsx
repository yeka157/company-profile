import About from "@/components/About/About";
import Hero from "@/components/Home/Hero";
import Tagline from "@/components/Home/Tagline";
import Plan from "@/components/Plan";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Services/Testimonials";
import WhatWeDo from "@/components/Services/WhatWeDo";
import Team from "@/components/Team/Team";
import { Member, MemberWithPosition } from "@/types/member";

export default async function Home() {
  const fetchMembers = async () => {
    const res = await fetch(
      "https://randomuser.me/api/?results=4&inc=name,picture"
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
    <div className="min-h-screen pt-[100px]">
      <Hero />
      <About />
      <Plan />
      <WhatWeDo />
      <Services />
      <Team bgColor="offWhite" members={membersWithPosition} />
      <Testimonials />
      <Tagline />
    </div>
  );
}
