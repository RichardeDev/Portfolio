import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Richardé Nomenjamnahary . Softwar Developper",
  description:
    "Full stack developer with expertise in React, Next.js, Tailwind CSS, node.js, nest.js, express.js, php, and word press.",
  openGraph: {
    type: "website",
    title: "Richardé Nomenjamnahary . Softwar Developper",
    description:
      "Full stack developer with expertise in React, Next.js, Tailwind CSS, node.js, nest.js, express.js, php, and word press.",
    images: "https://avatars.githubusercontent.com/u/102285256?v=4",
    url: "https://richardenomenjanahary.vercel.app",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {title, description} = metadata
  const canonicalUrl = "https://richardenomenjanahary.vercel.app"

  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Akata Goavana",
    url: canonicalUrl,
    headline: title,
    description: description,
    logo: "https://avatars.githubusercontent.com/u/102285256?v=4",
    // sameAs: ["https://www.facebook.com/p/AKATA-GOAVANA-100064269933528/"],
  };

  return (
    <html lang="en" className="h-full dark">
      <head>
        <link rel="canonical" href={canonicalUrl} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      </head>
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          AnekTelugu.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
