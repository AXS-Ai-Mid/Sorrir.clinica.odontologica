import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { cases } from "@/lib/cases";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/servicos", priority: 0.9, changeFrequency: "monthly" },
    { path: "/casos", priority: 0.8, changeFrequency: "monthly" },
    { path: "/como-funciona", priority: 0.8, changeFrequency: "monthly" },
    { path: "/sobre", priority: 0.7, changeFrequency: "monthly" },
    { path: "/galeria", priority: 0.7, changeFrequency: "monthly" },
    { path: "/depoimentos", priority: 0.6, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contato", priority: 0.9, changeFrequency: "monthly" },
    { path: "/privacidade", priority: 0.3, changeFrequency: "yearly" },
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route.path === "/" ? "" : route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...services.map((service) => ({
      url: `${site.url}/servicos/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...cases.map((item) => ({
      url: `${site.url}/casos/${item.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
