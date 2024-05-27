import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle, Mail, Phone, Send } from "lucide-react"; 
import { ArrowUpRight } from "lucide-react"; 
import { Card } from "../ui/card";

const iconList = [MessageCircle, Mail, Phone, Send];

const ContactLinkAnime = () => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % iconList.length);
    }, 1000); 

    return () => clearInterval(intervalId); 
  }, []);

  const CurrentIcon = iconList[currentIconIndex];

  return (
    <Link href="#contacts" className="max-w-max">
      <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
        <span className="text-accent-foreground rounded-sm ">
          <CurrentIcon size={16} />
        </span>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold">Contact me ...</p>
          </div>
        </div>
        <ArrowUpRight
          className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"
          size={16}
        />
      </Card>
    </Link>
  );
};


export default ContactLinkAnime;