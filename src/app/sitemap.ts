import { MetadataRoute } from "next";
import { PROGRAMS } from "@/data/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://greensproutsacademy.com";

  // Core Pages (Single-line nav items, team page removed)
  const routes = [
    "",
    "/programs",
    "/pricing",
    "/gallery",
    "/stories",
    "/resources",
    "/faq",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Program Discipline Detail Pages
  const programRoutes = PROGRAMS.map((program) => ({
    url: `${baseUrl}/programs/${program.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...routes, ...programRoutes];
}
