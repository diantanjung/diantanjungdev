"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Button from "../ui/Button";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact"];
      let currentActive = "";
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentActive = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  const handleCtaClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link
          href="/"
          className={`text-4xl font-medium font-manrope z-50 transition-colors duration-300 ${
            isMobileMenuOpen ? "text-white" : "text-gray-800"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Dian Tanjung
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#about"
            onClick={(e) => handleNavLinkClick(e, "about")}
            className={`text-lg font-normal transition-colors duration-200 ${
              activeSection === "about"
                ? "text-softOrange"
                : "text-gray-600 hover:text-softOrange"
            }`}
          >
            About
          </Link>
          <Link
            href="#projects"
            onClick={(e) => handleNavLinkClick(e, "projects")}
            className={`text-lg font-normal transition-colors duration-200 ${
              activeSection === "projects"
                ? "text-softOrange"
                : "text-gray-600 hover:text-softOrange"
            }`}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            onClick={(e) => handleNavLinkClick(e, "contact")}
            className={`text-lg font-normal transition-colors duration-200 ${
              activeSection === "contact"
                ? "text-softOrange"
                : "text-gray-600 hover:text-softOrange"
            }`}
          >
            Contact
          </Link>
          <Button
            variant="primary"
            text="Hire Me"
            onClick={() =>
              window.open(
                "https://upwork.com/freelancers/dianmulyanatanjung",
                "_blank"
              )
            }
            className="ml-4 py-2 px-5 text-base"
          />
        </nav>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-softOrange z-50 transition-colors duration-300 ${
              isMobileMenuOpen
                ? "text-white"
                : "text-gray-800 hover:text-softOrange"
            }`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-8 w-8" /> // Close icon
            ) : (
              <Bars3Icon className="h-8 w-8" /> // Hamburger icon
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-95 z-30 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          <Link
            href="#about"
            onClick={(e) => handleNavLinkClick(e, "about")}
            className={`text-white text-3xl font-bold transition-colors duration-200 ${
              activeSection === "about"
                ? "text-softOrange"
                : "hover:text-softOrange"
            }`}
          >
            About
          </Link>
          <Link
            href="#projects"
            onClick={(e) => handleNavLinkClick(e, "projects")}
            className={`text-white text-3xl font-bold transition-colors duration-200 ${
              activeSection === "projects"
                ? "text-softOrange"
                : "hover:text-softOrange"
            }`}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            onClick={(e) => handleNavLinkClick(e, "contact")}
            className={`text-white text-3xl font-bold transition-colors duration-200 ${
              activeSection === "contact"
                ? "text-softOrange"
                : "hover:text-softOrange"
            }`}
          >
            Contact
          </Link>
          <Button
            variant="primary"
            text="Hire Me"
            onClick={() =>
              window.open(
                "https://upwork.com/freelancers/dianmulyanatanjung",
                "_blank"
              )
            }
            className="mt-8 py-3 px-8 text-xl"
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
