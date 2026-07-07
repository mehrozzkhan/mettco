import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { company } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${company.domain}`),
  title: {
    default: `${company.name} — ${company.legalName}`,
    template: `%s | ${company.name}`,
  },
  description: company.descriptionShort,
  alternates: { canonical: "./" },
  keywords: [
    "industrial trading",
    "industrial sourcing",
    "engineering supplies",
    "import export Pakistan",
    "B2B procurement",
    "packaging materials",
    "safety equipment",
    "MRO products",
    "global sourcing",
  ],
  openGraph: {
    type: "website",
    title: `${company.name} — ${company.legalName}`,
    description: company.descriptionShort,
    siteName: company.name,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `https://${company.domain}/#organization`,
      name: company.name,
      legalName: company.legalName,
      url: `https://${company.domain}`,
      logo: `https://${company.domain}/logo.png`,
      email: company.email,
      telephone: company.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "42-P Izmir Town",
        addressLocality: "Lahore",
        addressCountry: "PK",
      },
      description: company.descriptionShort,
    },
    {
      "@type": "LocalBusiness",
      "@id": `https://${company.domain}/#localbusiness`,
      name: company.name,
      image: `https://${company.domain}/logo.png`,
      url: `https://${company.domain}`,
      email: company.email,
      telephone: company.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "42-P Izmir Town",
        addressLocality: "Lahore",
        addressCountry: "PK",
      },
      parentOrganization: { "@id": `https://${company.domain}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
