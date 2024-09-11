import type { MetadataRoute } from "next";

import { getUrlsInArray } from "@/constants/urls";
import { getBaseUrl } from "@/utils/helpers";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  return getUrlsInArray().map((x) => {
    return {
      url: `${baseUrl}${x}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    };
  });
}
