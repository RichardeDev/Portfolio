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
          image="https://avatars.githubusercontent.com/u/102285256?v=4"
          mediumImage="https://e7.pngegg.com/pngimages/1002/775/png-clipart-in-logo-linkedin-facebook-social-media-font-awesome-icon-linkedin-blue-text-thumbnail.png"
          description="Chat me for any inquiries"
        />
        <ContactCard
          url="https://join.skype.com/invite/HFeNbz6GUq6c"
          name="Richardé Nomenjanahary"
          image="https://avatars.githubusercontent.com/u/102285256?v=4"
          mediumImage="https://e7.pngegg.com/pngimages/372/330/png-clipart-skype-logo-skype-ico-icon-skype-icon-blue-text-thumbnail.png"
          description="Skype me for any inquiries"
        />
        <ContactCard
          url="mailto:richardetwilliam@gmail.com"
          name="Richardé Nomenjanahary"
          image="https://avatars.githubusercontent.com/u/102285256?v=4"
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/800px-Gmail_icon_%282020%29.svg.png"
          description="Email me for any inquiries"
        />
      </div>
    </Section>
  );
};
