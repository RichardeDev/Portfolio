import React from "react";
import { Section } from "./utils/Section";
import { Badge } from "./ui/badge";
import ContactCard from "./utils/status/ContactCard";

export const Contact = () => {
  return (
    <Section className="flex flex-col w-full items-start gap-4">
      <Badge variant={"outline"}>Contact me</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to work with you.
      </h2>
      <div className="flex max-md:flex-col gap-4">
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
      </div>
    </Section>
  );
};
