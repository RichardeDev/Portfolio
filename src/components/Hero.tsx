"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; 
import { Section } from "./utils/Section";
import Link from "next/link";
import Code from "./utils/Code";
import { ArrowUpRight } from "lucide-react";
import { Card } from "./ui/card";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { SkypeIcon } from "./icons/SkypeIcon";
import { GmailIcon } from "./icons/GmailIcon";

export const Hero = () => {
  const iconList = [LinkedInIcon, TwitterIcon, SkypeIcon, GmailIcon];
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % iconList.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const CurrentIcon = iconList[currentIconIndex];
  return (
    <Section
      className={`flex min-h-screen max-md:flex-col items-center gap-8 py-4 `}
      id="about"
    >
      <div className="flex-[3] flex flex-col gap-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="font-caption text-5xl text-primary font-bold"
        >
          Richardé Nomenjanahary
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-caption text-3xl"
        >
          Software Engineer
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className=""
          style={{ textAlign: "justify" }}
        >
          <p className="text-base">
            In 2020, I graduated with a master’s degree in computer science at
            Ecole Nationale d’Informatique of
            <Code className="inline-flex items-center gap-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/langfr-225px-Flag_of_Madagascar.svg.png"
                style={{ width: 16, height: "auto" }}
                alt="Madagascar flag"
              />{" "}
              Madagascar
            </Code>
            , specialized in software engineering and database administration, I
            worked in different companies before, but I am working at
            <Link href="https://www.akata-goavana.com">
              <Code className="inline-flex items-center gap-1">
                <img
                  src="https://avatars.githubusercontent.com/u/72074707?v=4"
                  style={{ width: 16, height: "auto" }}
                  alt="logo Akata"
                />{" "}
                Akata Goavana
              </Code>
            </Link>
            now as a full stack developer.
          </p>
          <p className="text-base">
            My biggest motivation right now is to become better at what I do,
            learn new skills, and work with other great developers worldwide.
          </p>
          <p className="text-base">
            A part of coding, I spend most of my time taking care of my
            body(working out, cooking, meditating, etc…), playing video games,
            having fun with my families and friends.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="flex  flex-col items-center max-sm:m-auto"
        >
          <Link href="#contacts" className="max-w-max">
            <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
              <span className="text-accent-foreground rounded-sm ">
                <CurrentIcon size={16} className="text-foreground" />
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold">Contact me</p>
                </div>
              </div>
              <ArrowUpRight
                className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-tranform"
                size={16}
              />
            </Card>
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="flex-[2] flex flex-col items-center max-sm:m-auto ml-auto"
      >
        <img
          src="https://avatars.githubusercontent.com/u/102285256?v=4"
          className="w-full h-auto rounded-full max-w-xs max-md:w-56"
          alt="richarde's picture"
        />
      </motion.div>
    </Section>
  );
};
