"use client";

import React from "react";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full py-32 bg-softOrange relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-48 h-32 bg-white opacity-10 rounded-md transform"></div>
      <div className="absolute bottom-0 right-0 w-64 h-16 bg-white opacity-10 rounded-md transform"></div>
      <div className="absolute bottom-0 left-70 w-64 h-10 bg-white opacity-10 rounded-md transform"></div>
      <div className="absolute top-0 right-75 w-64 h-14 bg-white opacity-10 rounded-md transform"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          title="Let's Build Something That Works Flawlessly."
          text="I’m open to opportunities where I can contribute to building reliable web applications, mobile apps, backend APIs, and end-to-end digital solutions."
        />
        <Button
          variant="secondary"
          text="Let's connect"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/diantanjung/",
              "_blank"
            )
          }
        />
      </div>
    </section>
  );
};

export default Contact;
