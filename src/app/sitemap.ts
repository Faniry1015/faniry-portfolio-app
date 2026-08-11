import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://faniriantsoa-portfolio.firebaseapp.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${baseUrl}/projets/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
