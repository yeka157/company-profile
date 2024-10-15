import Image from "next/image";
import React from "react";

const Services = () => {
  const services = [
    {
      icon: "web-dev.svg",
      title: "Web Design / Development",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
    },
    {
      icon: "ux-design.svg",
      title: "UI/UX Design",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
    },
    {
      icon: "web-migration.svg",
      title: "Website Migration",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
    },
    {
      icon: "mobile-app.svg",
      title: "App Development",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
    },
    {
      icon: "hubspot.svg",
      title: "Hubspot Integration",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
    },
    {
      icon: "email-marketing.svg",
      title: "Email Marketing",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout",
    },
  ];
  return (
    <div className="container mx-auto py-24">
      <div className="flex flex-col items-center justify-center gap-y-2.5">
        <h4 className="font-bold text-2xl leading-5 text-peachRed">
          \ Services \
        </h4>
        <h2 className="text-[40px] leading-10 font-bold text-darkBlue mb-10">
          Our Expertise
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-5">
        {services.map((service, index) => (
          <div key={index} className="bg-offWhite p-8 rounded-[10px]">
            <div className="flex flex-col gap-y-5">
              <div className="bg-white rounded-[10px] p-4 size-20">
                <Image
                  src={service.icon}
                  alt=""
                  width={50}
                  height={50}
                  className="w-[50px] h-auto"
                />
              </div>
              <h4 className="font-extrabold text-xl leading-6 text-darkBlue">
                {service.title}
              </h4>
              <div className="flex items-center gap-x-2.5">
                <div className="w-14 h-1.5 bg-peachRed rounded-[6px]"></div>
                <div className="w-5 h-1.5 bg-peachRed rounded-[6px]"></div>
              </div>
              <p className="leading-6">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
