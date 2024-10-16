import Banner from "@/components/Banner";
import Tagline from "@/components/Home/Tagline";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Services/Testimonials";
import WhatWeDo from "@/components/Services/WhatWeDo";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen pt-[100px]">
      <Banner page="Services" />
      <WhatWeDo />
      <Services />
      <Testimonials />
      <Tagline />
    </div>
  );
};

export default Page;
