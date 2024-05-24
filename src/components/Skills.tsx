"use client";
import React from "react";
import { Section } from "./utils/Section";
import { Badge } from "./ui/badge";
import { NodeJsIcon } from "./icons/NodeJsIcon";
import { ReactJsIcon } from "./icons/ReactJsIcon";
import { TailwindcssIcon } from "./icons/TailwindIcon";
import Code from "./utils/Code";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <Section
      className="flex min-h-screen max-md:flex-col items-center gap-4"
      id="skills"
    >
      <div className="flex flex-col gap-8">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}>
        <Badge variant={"outline"} className="max-w-max">
          Skills
        </Badge></motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pb-2 text-3xl font-semibold tracking-tight first:mt-0"
        >
          I love Working on ...
        </motion.h2>
        <div className="flex max-md:flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col gap-2 flex-1"
          >
            <NodeJsIcon size={42} />
            <h3 className="text-2xl font-semibold tracking-tight">Node.js</h3>
            <p className="text-sm text-muted-foreground">
              I use <Code>Node.js</Code> for special is an open-source,
              cross-platform JavaScript runtime.
              <Code>Node.js</Code> offers <u>exceptional performance</u>,{" "}
              <i>great flexibility</i> and <i>easy integration</i> with
              JavaScript, making it ideal for fast and efficient development of
              web and backend applications
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="flex flex-col gap-2 flex-1"
          >
            <ReactJsIcon
              size={42}
              className="animate-spin"
              style={{ animationDuration: "10s" }}
            />
            <h3 className="text-2xl font-semibold tracking-tight">React.js</h3>
            <p className="text-sm text-muted-foreground">
              My prefer framework is <Code>React</Code>. I also{" "}
              <Code>Next.js</Code> as a backend and frontend framework.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="flex flex-col gap-2 flex-1"
          >
            <TailwindcssIcon size={42} />
            <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
            <p className="text-sm text-muted-foreground">
              I can create <u>beautefull</u> application <i>in second</i> using{" "}
              <Code>Tailwind css</Code>.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
