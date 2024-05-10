import { Section } from "./utils/Section";

const Footer = () => {
    return (
      <footer className="bg-card">
        <Section className="py-4 text-center">
         <p className="text-muted-foreground text-sm"> @Copyright {new Date().getFullYear()} Richard&eacute;&#39;s Portfolio</p>
        </Section>
      </footer>
    )
}

export default Footer;
