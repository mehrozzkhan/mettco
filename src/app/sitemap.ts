import type { MetadataRoute } from "next";
import { site } from "@/config/site";

const routes = [
  "",
  "/supply",
  "/services",
  "/technology",
  "/sectors/agriculture",
  "/sectors/banking",
  "/sectors/industry",
  "/about",
  "/contact",
  "/rfq",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path === "/rfq" ? 0.9 : 0.7,
  }));
}
