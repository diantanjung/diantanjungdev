
"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="basis-[61%] text-center lg:text-left z-10 lg:mt-0">
          <h1 className="text-5xl md:text-7xl font-normal text-gray-900 leading-tight mb-6 font-manrope">
            Bring Your Design to Life with Precision Frontend Development
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-8 lg:mb-20 max-w-2xl mx-auto lg:mx-0">
            I craft stunning, responsive, and high-performance user interfaces
            that captivate your audience.
          </p>
          <Button
            variant="primary"
            text="Let’s connect on Upwork"
            onClick={() =>
              window.open(
                "https://upwork.com/freelancers/dianmulyanatanjung",
                "_blank"
              )
            }
          />
        </div>

        <div className="relative flex-1 flex justify-end mt-0 lg:mt-40">
          <Image
            src="/images/dian-tanjung-profile.png"
            alt="Dian Tanjung - Frontend Developer"
            width={505}
            height={639}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
