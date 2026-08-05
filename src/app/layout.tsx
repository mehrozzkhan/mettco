import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Oswald } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Reveal from "@/components/Reveal";
import StickyBar from "@/components/StickyBar";
import { site } from "@/config/site";
import "./globals.css";

// Two families + a mono, subsetted, swapped — the whole font budget.
// One weight per family: three small woff2 files total. Fewer font bytes
// beats typographic range — the performance budget outranks decoration.
const display = Oswald({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-display",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "METTCO — General Order Supplier, Lahore | Supply, Services & Technology",
  description:
    "METTCO supplies office, industrial and safety products, arranges construction and facility work, and delivers IT and software services in Lahore. Quotes within 24 hours.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_PK",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#111417",
};

const orgLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  foundingDate: site.founded,
  email: site.email,
  telephone: site.phoneNumber,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressCountry: "PK",
  },
  areaServed: { "@type": "City", name: site.city },
  description:
    "General order supply and facilitation company in Lahore. Supplies office, industrial and safety products, arranges construction and facility work, and delivers IT and software services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <Preloader />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:bg-signal focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-graphite"
        >
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <StickyBar />
        <Reveal />
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
      </body>
    </html>
  );
}
