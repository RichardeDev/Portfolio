import React, { ComponentPropsWithoutRef } from "react";
import { Section } from "./utils/Section";
import Link from "next/link";
import Code from "./utils/Code";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[2] flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary font-bold">
          Richardé Nomenjanahary
        </h2>
        <h3 className="font-caption text-3xl">Software Engineer</h3>
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
      </div>
      <div className="flex-1 max-md:m-auto ml-auto">
        <img
          src="https://avatars.githubusercontent.com/u/102285256?v=4"
          className="w-full h-auto rounded-full max-w-xs max-md:w-56" 
          alt="richarde's picture"
        />
      </div>
    </Section>
  );
};
