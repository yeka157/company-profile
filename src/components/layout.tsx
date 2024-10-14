import Image from "next/image";
import React, { ReactNode } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPython,
  FaReact,
  FaWordpress,
  FaXTwitter,
} from "react-icons/fa6";
import { Input } from "./ui/input";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen">
      <nav className="h-[100px] container mx-auto flex items-center justify-between py-[30px]">
        <Link href={"/"}>
          <div className="flex gap-x-3 items-center">
            <Image src="/logo.svg" alt="" width={40} height={40} />
            <h1 className="font-bold text-2xl">Company</h1>
          </div>
        </Link>
        <div className="flex gap-x-12 items-center">
          <div className="flex justify-between text-darkBlue items-center gap-x-8">
            <Link href={"/about"}>
              <span className="font-semibold leading-5 hover:underline">
                About
              </span>
            </Link>
            <Link href={"/about"}>
              <span className="font-semibold leading-5 hover:underline">
                Our Services
              </span>
            </Link>
            <Link href={"/about"}>
              <span className="font-semibold leading-5 hover:underline">
                Portfolio
              </span>
            </Link>
            <Link href={"/about"}>
              <span className="font-semibold leading-5 hover:underline">
                Blog
              </span>
            </Link>
            <Link href={"/about"}>
              <span className="font-semibold leading-5 hover:underline">
                Contact
              </span>
            </Link>
          </div>
          <Button>Get In Touch</Button>
        </div>
      </nav>
      {children}
      <footer className="h-[520px] bg-darkBlue">
        <div className="container mx-auto flex items-center py-24 gap-x-7 justify-between">
          <div className="space-y-5 max-w-[25%]">
            <div className="flex gap-x-3 items-center">
              <Image src="/logo.svg" alt="" width={40} height={40} />
              <h1 className="font-bold text-2xl text-white">Company</h1>
            </div>
            <p className="font-medium leading-8 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="flex gap-x-5 items-center">
              <div className="rounded-xl bg-white hover:bg-white/90 p-4 cursor-pointer">
                <FaLinkedinIn className="size-5 text-peachRed" />
              </div>
              <div className="rounded-xl bg-white hover:bg-white/90 p-4 cursor-pointer">
                <FaInstagram className="size-5 text-peachRed" />
              </div>
              <div className="rounded-xl bg-white hover:bg-white/90 p-4 cursor-pointer">
                <FaFacebookF className="size-5 text-peachRed" />
              </div>
              <div className="rounded-xl bg-white hover:bg-white/90 p-4 cursor-pointer">
                <FaXTwitter className="size-5 text-peachRed" />
              </div>
            </div>
          </div>
          <div className="space-y-5 max-w-[25%] h-80">
            <h3 className="font-bold text-2xl leading-5 text-offWhite">
              Services
            </h3>
            <div className="rounded-[5px] h-1 w-12 bg-peachRed mb-7"></div>
            <div className="flex flex-col gap-y-5">
              <Link href={"/services"}>
                <span className="font-medium text-white">
                  Web Design/Development
                </span>
              </Link>
              <Link href={"/services"}>
                <span className="font-medium text-white">App Development</span>
              </Link>
              <Link href={"/services"}>
                <span className="font-medium text-white">UI/UX Design</span>
              </Link>
              <Link href={"/services"}>
                <span className="font-medium text-white">
                  HubSpot Integration
                </span>
              </Link>
              <Link href={"/services"}>
                <span className="font-medium text-white">Email Marketing</span>
              </Link>
              <Link href={"/services"}>
                <span className="font-medium text-white">
                  Website Migration
                </span>
              </Link>
            </div>
          </div>
          <div className="space-y-5 max-w-[25%] h-80">
            <h3 className="font-bold text-2xl leading-5 text-offWhite">
              Career
            </h3>
            <div className="rounded-[5px] h-1 w-12 bg-peachRed mb-7"></div>
            <div className="flex flex-col gap-y-5">
              <div className="flex gap-x-5 items-center">
                <div className="rounded-xl bg-white p-4">
                  <FaReact className="size-10 text-peachRed" />
                </div>
                <div className="space-y-2.5">
                  <h4 className="text-peachRed leading-6 text-xl font-bold">
                    ReactJS Dev
                  </h4>
                  <p className="leading-6 text-white font-medium">
                    1-5 Years of Exp.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5 items-center">
                <div className="rounded-xl bg-white p-4">
                  <FaWordpress className="size-10 text-peachRed" />
                </div>
                <div className="space-y-2.5">
                  <h4 className="text-peachRed leading-6 text-xl font-bold">
                    Wordpress Dev
                  </h4>
                  <p className="leading-6 text-white font-medium">
                    1-5 Years of Exp.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5 items-center">
                <div className="rounded-xl bg-white p-4">
                  <FaPython className="size-10 text-peachRed" />
                </div>
                <div className="space-y-2.5">
                  <h4 className="text-peachRed leading-6 text-xl font-bold">
                    Python Dev
                  </h4>
                  <p className="leading-6 text-white font-medium">
                    1-5 Years of Exp.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-5 max-w-[25%] h-80">
            <h3 className="font-bold text-2xl leading-5 text-offWhite">
              Subscribe Us
            </h3>
            <div className="rounded-[5px] h-1 w-12 bg-peachRed mb-7"></div>
            <p className="font-medium leading-8 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <Input className="bg-white" placeholder="Email" />
            <Button className="float-end">Subscribe</Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
