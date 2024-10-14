import React from "react";
import { Button } from "../ui/button";

const Tagline = () => {
  return (
    <div className="container mx-auto py-24">
      <div className="flex items-center justify-center">
        <div className="bg-[url('/bg-tagline.png')] py-16 px-36 rounded-[10px] bg-cover bg-center">
          <div className="flex flex-col items-center justify-center gap-y-8">
            <p className="text-offWhite text-2xl leading-[45px] font-semibold text-center max-w-lg">
              “Some of the History of Our Company is that we are Catching up
              through Video”
            </p>
            <Button>Get In Touch</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tagline;
