import type { MetadataRoute } from "next";
import { site, caseStudies } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: new Date() },
    ...caseStudies.map((cs) => ({ url: `${site.url}/work/${cs.slug}`, lastModified: new Date() })),
  ];
}
