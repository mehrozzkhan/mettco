import type { MetadataRoute } from "next";
import { company, industries } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/why-mettco",
  "/process",
  "/vision",
  "/solutions",
  "/capabilities",
  "/global-sourcing",
  "/import-export",
  "/industries",
  "/products",
  "/business-development",
  "/contact",
  "/request-a-quote",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const all = [
    ...routes,
    ...industries.map((i) => `/industries/${i.slug}`),
  ];
  return all.map((route) => ({
    url: `https://${company.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
