import About from "@/components/About/About";
import Hero from "@/components/Home/Hero";
import Plan from "@/components/Plan";
import Testimonials from "@/components/Services/Testimonials";
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
    <div className="min-h-screen">
      <Hero />
      <About />
      <Plan />
      <Team bgColor="offWhite" members={membersWithPosition} />
      <Testimonials />
    </div>
  );
}
