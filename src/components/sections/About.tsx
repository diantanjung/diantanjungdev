"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button"; // Import our Button component
import { CheckCircleIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";

const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-24 bg-lightBgGrey">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="basis-[60%] text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight mb-8 font-manrope">
            Hi. I&apos;m Dian Tanjung, your expert frontend partner for React &
            Next.js builds.
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            With a passion for crafting pixel-perfect and performant user
            interfaces, I specialize in bringing complex designs to life using
            modern web technologies. My focus is on creating intuitive and
            engaging user experiences.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            I leverage the power of React, Next.js, and a robust understanding
            of component-based architecture to build scalable and maintainable
            applications.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
            <div className="flex items-center text-gray-800">
              <CheckCircleIcon className="h-6 w-6 text-softOrange mr-3" />
              <span className="text-lg">Component-based architecture</span>
            </div>
            <div className="flex items-center text-gray-800">
              <CheckCircleIcon className="h-6 w-6 text-softOrange mr-3" />
              <span className="text-lg">State management solutions</span>
            </div>
            {/* Skill 3 */}
            <div className="flex items-center text-gray-800">
              <CheckCircleIcon className="h-6 w-6 text-softOrange mr-3" />
              <span className="text-lg">Pixel-perfect UIs</span>
            </div>
            {/* Skill 4 */}
            <div className="flex items-center text-gray-800">
              <CheckCircleIcon className="h-6 w-6 text-softOrange mr-3" />
              <span className="text-lg">Responsive & adaptive design</span>
            </div>
            <div className="flex items-center text-gray-800">
              <CheckCircleIcon className="h-6 w-6 text-softOrange mr-3" />
              <span className="text-lg">Performance optimization</span>
            </div>
            <div className="flex items-center text-gray-800">
              <CheckCircleIcon className="h-6 w-6 text-softOrange mr-3" />
              <span className="text-lg">Cross-browser compatibility</span>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-normal text-gray-900 leading-tight mb-8 font-manrope">
            Have an idea you’re ready to bring to life?
          </h3>

          <div className="flex items-center justify-center md:justify-start">
            {" "}
            <ArrowLongRightIcon className="h-8 w-8 text-black mr-3 hidden lg:block" />
            <Button
              variant="primary"
              onClick={() =>
                window.open(
                  "https://upwork.com/freelancers/dianmulyanatanjung",
                  "_blank"
                )
              }
              text="Let's build something great"
            />
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/images/workspace-coding.jpg"
            alt="Dian Tanjung's workspace"
            width={600}
            height={400}
            className="rounded-lg shadow-xl w-full max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
