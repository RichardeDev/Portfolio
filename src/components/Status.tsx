import React from "react";
import { Section } from "./utils/Section";
import { Card } from "./ui/card";
import {
  Bird,
  Code,
  Heart,
  MessageCircle,
  Plane,
  Rss,
  StickyNote,
  Wallet,
  Weight,
} from "lucide-react";
import { SideProjectProps, WorkProps } from "@/type/status-type";
import SideProject from "./utils/status/SideProject";
import WorkCard from "./utils/status/WorkCard";
import ContactCard from "./utils/status/ContactCard";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="p-4 w-full flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, fun project.</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <WorkCard key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contact me</p>
        <ContactCard
          url="https://www.linkedin.com/in/richard-nomenjanahary-081b18221/"
          name="Richardé Nomenjanahary"
          image="/image/me.png"
          mediumImage="/image/logo_linkedin.png"
          description="Chat me for any inquiries"
        />
        <ContactCard
          url="https://join.skype.com/invite/HFeNbz6GUq6c"
          name="Richardé Nomenjanahary"
          image="/image/me.png"
          mediumImage="/image/logo_skype.png"
          description="Skype me for any inquiries"
        />
        <ContactCard
          url="mailto:richardetwilliam@gmail.com"
          name="Richardé Nomenjanahary"
          image="/image/me.png"
          mediumImage="/image/logo_gmail.png"
          description="Email me for any inquiries"
        />
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Code,
    title: "Personal Website",
    description: "A personal website built with Next.js, Typescript, shadcn and Tailwind CSS.",
    link: "https://",
  },
  {
    Logo: StickyNote,
    title: "Akata Goavana",
    description:
      "A website built with Next.js, SCSS.",
    link: "https://akata.goavana.com",
  },
  {
    Logo: Rss,
    title: "Ge-gestion",
    description:
      "A full-stack web application built with Angular.js, DevUi, and Node.js.",
    link: "https://dev.olombelona.goavana.com/",
  },
  {
    Logo: MessageCircle,
    title: "D2BI",
    description:
      "A full-stack web application built with Vue.js and Node.js.",
    link: "https://www.d2bi.fr",
  },
  {
    Logo: Plane,
    title: "Indemniflight",
    description:
      "A full-stack web application built with WordPres, SCSS, AppScript and Node.js.",
    link: "https://www.indemniflight.com",
  },
  {
    Logo: Heart,
    title: "Digital4win",
    description:
      "A full-stack web application built with React.js, Material UI, Graphql, Typescript and Node.js.",
    link: "https://d4win.fr/",
  },
  {
    Logo: Bird,
    title: "Manao",
    description:
      "A website built HTML, CSS, JS and CodeIgniter PHP.",
    link: "https://manao.eu/",
  },
  {
    Logo: Wallet,
    title: "KalyPay",
    description:
      "A website built Wordpress PHP.",
    link: "https://kalypay.com/",
  },
];

const WORKS: WorkProps[] = [
  {
    Logo: "/image/logo_akata.png",
    title: "Akata Goavana",
    role: "Full Stack Developer",
    link: "https://www.akata-goavana.com",
    date: "2023 - present",
  },
  {
    Logo: "/image/logo_d4win.png",
    title: "Digital4win",
    role: "Full Stack Developer",
    link: "https://www.digital4win.fr/",
    date: "2021 - 2023",
    freelance: true,
  },
  {
    Logo: "/image/logo_manao.png",
    title: "Manao Logiciel",
    role: "Full Stack Developer",
    link: "https://www.manao.eu",
    date: "2021",
  },
  {
    Logo: "/image/logo_madigicom.jpeg",
    title: "MaDigiCom",
    role: "Full Stack Developer",
    link: "https://www.madigicom.io",
    date: "2020 - 2021",
  },
];


