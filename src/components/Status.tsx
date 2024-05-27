"use client";
import React from "react";
import { Section } from "./utils/Section";
import { Card } from "./ui/card";
import {
  Bird,
  Code,
  Heart,
  LucideIcon,
  MessageCircle,
  Plane,
  Rss,
  StickyNote,
  Wallet,
  Weight,
} from "lucide-react";
import { SideProjectProps, WorkProps, ContactProps } from "@/type/status-type";
import SideProject from "./utils/status/SideProject";
import WorkCard from "./utils/status/WorkCard";
import ContactCard from "./utils/status/ContactCard";
import { motion } from "framer-motion";
import ProjectsData from "@/data/project-list.json";
import ContactData from "@/data/contact-list.json";
import WorksData from "@/data/work-list.json";

const iconMap: { [key: string]: LucideIcon } = {
  Code,
  StickyNote,
  Rss,
  MessageCircle,
  Plane,
  Heart,
  Bird,
  Wallet,
};

export const Status = () => {
  const contactList = ContactData?.slice(0, 3);
  return (
    <Section
      className="flex min-h-screen max-md:flex-col items-center gap-4 py-4"
      id="status"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex-[3] w-full"
      >
        <Card className="p-4 w-full flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, fun project.</p>
          <div className="flex flex-col gap-4">
            {ProjectsData.map((project, index) => {
              const IconComponent = iconMap[project.Logo];
              return (
                <SideProject
                  key={index}
                  Logo={IconComponent}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                />
              );
            })}
          </div>
        </Card>
      </motion.div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, x: 50, y: -50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-4 flex-1">
            <p className="text-lg text-muted-foreground">Work</p>
            <div className="flex flex-col gap-4">
              {WorksData.map((work, index) => (
                <WorkCard key={index} {...work} />
              ))}
            </div>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <Card className="p-4 flex-1 flex flex-col gap-2">
            <p className="text-lg text-muted-foreground">Contact me</p>
            {contactList?.map((contact, index) => (
              <ContactCard
                key={index}
                url={contact.url}
                name={contact.name}
                image={contact.image}
                mediumImage={contact.mediumImage}
                description={contact.description}
              />
            ))}
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};

