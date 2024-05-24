"use client";
import React from "react";
import { Section } from "./utils/Section";
import { Badge } from "./ui/badge";
import ContactCard from "./utils/status/ContactCard";
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
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
          <ContactCard
            url="https://www.linkedin.com/in/richard-nomenjanahary-081b18221/"
            name="Nomenjanahary Richardé"
            image="https://media.licdn.com/dms/image/D4D03AQHw_it7HTgMsA/profile-displayphoto-shrink_800_800/0/1669186232438?e=1721260800&v=beta&t=2DlDK-H3g-z0tNVxxP1r4vsectK9O04u6IWjbZlJEgU"
            mediumImage="https://e7.pngegg.com/pngimages/1002/775/png-clipart-in-logo-linkedin-facebook-social-media-font-awesome-icon-linkedin-blue-text-thumbnail.png"
            description="Chat me for any inquiries"
          />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
          <ContactCard
            url="https://join.skype.com/invite/HFeNbz6GUq6c"
            name="Richardé Nomenjanahary"
            image="https://avatars.githubusercontent.com/u/102285256?v=4"
            mediumImage="https://e7.pngegg.com/pngimages/372/330/png-clipart-skype-logo-skype-ico-icon-skype-icon-blue-text-thumbnail.png"
            description="Skype me for any inquiries"
          />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
          <ContactCard
            url="mailto:richardetwilliam@gmail.com"
            name="Richardé Nomenjanahary"
            image="https://lh3.googleusercontent.com/a/ACg8ocKJeWWf0aLc86B2L1UNTxIREPQa__KFKZB9cyWRwDx7beMfx6EI=s288-c-no"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/800px-Gmail_icon_%282020%29.svg.png"
            description="Email me for any inquiries"
          />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
