import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Status } from "@/components/Status";
import { Spacing } from "@/components/utils/Spacing";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <Header />
      <Spacing size="md" />
      <Hero />  
      <Spacing size="md" />
      <Status />
      <Spacing size="md" />
      <Skills />
      <Spacing size="md" />
      <Contact />
      <Spacing size="md" />
      <Footer />
    </main>
  );
}
