"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./utils/Section";
import { Button, buttonVariants } from "./ui/button";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TwitterIcon } from "./icons/TwitterIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { BurgerMenuIcon } from "./icons/BurgerMenu";

const navigationLinks = [
  { name: "About me", path: "#about" },
  { name: "Experiences", path: "#status" },
  { name: "Skills", path: "#skills" },
  { name: "Contacts", path: "#contacts" },
];

export const Header = () => {
  const [hash, setHash] = useState("#");
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationOrigin, setAnimationOrigin] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = (event: any) => {
    setIsDarkMode(!isDarkMode);
    const buttonRect = event.target.getBoundingClientRect();
    setAnimationOrigin({
      x: buttonRect.left + buttonRect.width / 2,
      y: buttonRect.top + buttonRect.height / 2,
    });
    // setIsAnimating(true);
  };

  const updateActiveLink = () => {
    const windowHeight = window.innerHeight;
    const halfViewport = windowHeight / 2;
    const sections = navigationLinks;

    for (const section of sections) {
      const element = document.querySelector(section.path);
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        if (
          elementTop < halfViewport &&
          elementTop + element.clientHeight > halfViewport
        ) {
          setActiveLink(section.name);
          break;
        }
      }
    }
  };

  useEffect(() => {
    updateActiveLink();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateActiveLink);
    return () => {
      window.removeEventListener("scroll", updateActiveLink);
    };
  }, []);

  const renderLinks = () => {
    return navigationLinks.map((link, index) => (
      <Link
        key={index}
        href={link.path}
        title={`${link.name} page`}
        onClick={() => {
          setIsDropdownMenuOpen(false);
          setHash(link.path);
        }}
        className={cn(
          "w-100 px-4 " + (activeLink === link.name ? "active" : "")
        )}
      >
        {link.name}
      </Link>
    ));
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="sticky bg-background top-0 py-4"
      >
        <Section className="flex items-baseline">
          <div className="flex item-center gap-2">
            <button
              className={cn(
                buttonVariants({ variant: "outline" }),
                "md:hidden p-0 size-6 text-foreground"
              )}
              onClick={() => setIsDropdownMenuOpen(!isDropdownMenuOpen)}
            >
              <BurgerMenuIcon size={18} className="text-foreground" />
            </button>
            <h1 className="text-lg font-bold text-primary">richarde.com</h1>
          </div>
          <div className="flex-1" />
          <div className="hidden md:flex items-center gap-4">
            {renderLinks()}
          </div>
          <div className="flex-1" />
          <ul className="flex item-center gap-2">
            <Link
              href="https://github.com/nomricharde"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <GithubIcon size={16} className="text-foreground" />
            </Link>
            <Link
              href="https://twitter.com/Richarde_dev"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <TwitterIcon size={16} className="text-foreground" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nomenjanahary-richardet-688857207/"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0"
              )}
            >
              <LinkedInIcon size={16} className="text-foreground" />
            </Link>
            <Button
              className={cn(
                buttonVariants({ variant: "outline" }),
                "size-6 p-0 bg-background text-foreground hover:bg-foreground"
              )}
              onClick={toggleDarkMode}
            >
              {isDarkMode ? "☀️" : "🌙"}
            </Button>
          </ul>
        </Section>

        {isDropdownMenuOpen && (
          <div className="md:hidden bg-background py-4">
            <nav className="flex flex-col items-center gap-4">
              {renderLinks()}
            </nav>
          </div>
        )}
      </motion.header>
      <hr />

      {isAnimating && (
        <motion.div
          initial={{ scale: 0, x: 0, y: 0 }}
          animate={{ scale: 50, x: "-50%", y: "-50%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-1/2 left-1/2 w-full h-full bg-foreground z-50"
          onAnimationComplete={() => {
            setIsDarkMode(!isDarkMode);
            setIsAnimating(false);
          }}
        />
      )}
    </>
  );
};
