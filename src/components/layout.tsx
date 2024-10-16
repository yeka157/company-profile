"use client";
import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";
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
import { IoClose, IoMenu } from "react-icons/io5";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll behavior
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);

      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsScrollingDown(true);
      } else {
        // Scrolling up
        setIsScrollingDown(false);
      }

      lastScrollY = window.scrollY;

      // Show navbar again after 500ms of no scrolling
      const timeout = setTimeout(() => {
        setIsScrollingDown(false);
      }, 500);
      setScrollTimeout(timeout);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [scrollTimeout]);
  return (
    <div className="min-h-screen">
      <nav
        className={`fixed bg-white z-50 top-0 left-0 w-full h-[100px] transition-transform duration-300 ${
          isScrollingDown && !isOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-[30px] lg:px-5">
          <Link href="/">
            <div className="flex gap-x-3 items-center ps-5 lg:ps-0">
              <Image
                src="/logo.svg"
                alt="Company Logo"
                width={40}
                height={40}
              />
              <h1 className="font-bold text-xl lg:text-2xl">Company</h1>
            </div>
          </Link>

          <div className="md:hidden pe-5 md:pe-0">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
            </button>
          </div>

          <div className="hidden md:flex gap-x-8 lg:gap-x-12 items-center px-4 lg:px-0">
            <div className="flex justify-between text-darkBlue items-center gap-x-6 lg:gap-x-8">
              <Link href="/about">
                <span className="font-semibold text-base lg:text-lg leading-5 hover:underline">
                  About
                </span>
              </Link>
              <Link href="/services">
                <span className="font-semibold text-base lg:text-lg leading-5 hover:underline">
                  Our Services
                </span>
              </Link>
              <Link href="/team">
                <span className="font-semibold text-base lg:text-lg leading-5 hover:underline">
                  Our Teams
                </span>
              </Link>
              <Link href="/">
                <span className="font-semibold text-base lg:text-lg leading-5 hover:underline">
                  Blog
                </span>
              </Link>
              <Link href="/">
                <span className="font-semibold text-base lg:text-lg leading-5 hover:underline">
                  Contact
                </span>
              </Link>
            </div>
            <Button className="text-sm lg:text-base px-3 lg:px-4 py-2">
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[100px] left-0 w-full bg-white shadow-lg md:hidden">
            <div className="flex flex-col gap-y-6 py-4 px-6 text-darkBlue">
              <Link href="/about">
                <span
                  className="font-semibold leading-5 hover:underline"
                  onClick={toggleMenu}
                >
                  About
                </span>
              </Link>
              <Link href="/services">
                <span
                  className="font-semibold leading-5 hover:underline"
                  onClick={toggleMenu}
                >
                  Our Services
                </span>
              </Link>
              <Link href="/team">
                <span
                  className="font-semibold leading-5 hover:underline"
                  onClick={toggleMenu}
                >
                  Our teams
                </span>
              </Link>
              <Link href="/">
                <span
                  className="font-semibold leading-5 hover:underline"
                  onClick={toggleMenu}
                >
                  Blog
                </span>
              </Link>
              <Link href="/">
                <span
                  className="font-semibold leading-5 hover:underline"
                  onClick={toggleMenu}
                >
                  Contact
                </span>
              </Link>
              <Button>Get In Touch</Button>
            </div>
          </div>
        )}
      </nav>
      {children}
      <footer className="bg-darkBlue">
        <div className="container mx-auto py-12 md:py-24 px-6 lg:px-5 md:px-10">
          <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-y-12 gap-x-7 justify-between">
            <div className="space-y-5 max-w-full lg:max-w-[25%]">
              <div className="flex gap-x-3 items-center">
                <Image src="/logo.svg" alt="" width={40} height={40} />
                <h1 className="font-bold text-2xl text-white">Company</h1>
              </div>
              <p className="font-medium leading-8 text-white">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
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

            <div className="space-y-5 max-w-full">
              <h3 className="font-bold text-2xl leading-5 text-offWhite">
                Services
              </h3>
              <div className="rounded-[5px] h-1 w-28 lg:w-12 bg-peachRed mb-7"></div>
              <div className="flex flex-col gap-y-5">
                <Link href="/services">
                  <span className="font-medium text-white">
                    Web Design/Development
                  </span>
                </Link>
                <Link href="/services">
                  <span className="font-medium text-white">
                    App Development
                  </span>
                </Link>
                <Link href="/services">
                  <span className="font-medium text-white">UI/UX Design</span>
                </Link>
                <Link href="/services">
                  <span className="font-medium text-white">
                    HubSpot Integration
                  </span>
                </Link>
                <Link href="/services">
                  <span className="font-medium text-white">
                    Email Marketing
                  </span>
                </Link>
                <Link href="/services">
                  <span className="font-medium text-white">
                    Website Migration
                  </span>
                </Link>
              </div>
            </div>

            <div className="space-y-5 max-w-full">
              <h3 className="font-bold text-2xl leading-5 text-offWhite">
                Career
              </h3>
              <div className="rounded-[5px] h-1 w-28 lg:w-12 bg-peachRed mb-7"></div>
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

            <div className="space-y-5 max-w-full lg:w-[25%]">
              <h3 className="font-bold text-2xl leading-5 text-offWhite">
                Subscribe Us
              </h3>
              <div className="rounded-[5px] h-1 w-28 lg:w-12 bg-peachRed mb-7"></div>
              <p className="font-medium leading-8 text-white">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <Input className="bg-white w-full" placeholder="Email" />
              <Button className="w-full md:w-auto float-end">Subscribe</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
