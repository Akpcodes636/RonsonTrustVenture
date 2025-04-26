import { MetadataRoute } from "next";

export default async function sitemap():Promise<MetadataRoute.Sitemap>{
    const baseUrl ="https://ronsontrustventures.com";
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/delivery`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
  ]
}