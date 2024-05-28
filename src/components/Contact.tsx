"use client";
import React from "react";
import { Section } from "./utils/Section";
import { Badge } from "./ui/badge";
import ContactCard from "./utils/status/ContactCard";
import ContactData from "@/data/contact-list.json";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <Section
      className="flex min-h-screen  max-md:flex-col items-center gap-4"
      id="contacts"
    >
      <div className="flex flex-col w-full gap-8">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}>
        <Badge variant={"outline"} className="max-w-max">Contact me</Badge>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          I will be happy to work with you.
        </motion.h2>
        <div className="flex max-md:flex-col gap-4">
          {ContactData?.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.2 }} 
              className="w-full"
            >
              <ContactCard
                url={contact.url}
                name={contact.name}
                image={contact.image}
                mediumImage={contact.mediumImage}
                description={contact.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
