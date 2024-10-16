import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";
import { DevMemberWithPosition } from "@/types/member";
import Link from "next/link";

const OurTeam = ({ teamMembers }: { teamMembers: DevMemberWithPosition[] }) => {
  return (
    <div className="container mx-auto py-10 px-5">
      <h3 className="text-[40px] text-center mb-8 font-bold leading-10 text-darkBlue">
        Meet Our Team Members
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader className="flex items-center justify-center p-4">
              <Avatar className="w-24 h-24">
                <AvatarImage
                  src={member.picture.large}
                  alt={member.name.first}
                />
                <AvatarFallback>{member.name.first.charAt(0)}</AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="text-xl font-semibold">
                {member.name.first} {member.name.last}
              </CardTitle>
              <p className="text-gray-500">{member.position}</p>
            </CardContent>
            <CardFooter className="flex justify-center gap-4 p-4">
              <Link href={`mailto:${member.email}`}>
                <Button variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
              </Link>
              <Button variant="outline">
                <LinkedInLogoIcon className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
