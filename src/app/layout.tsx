import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL(`https://${company.domain}`),
  title: {
    default: `${company.name} — ${company.legalName}`,
    template: `%s | ${company.name}`,
  },
  description: company.descriptionShort,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
