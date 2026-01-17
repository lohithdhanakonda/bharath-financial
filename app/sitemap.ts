import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bharathfinancial.co",
      lastModified: new Date(),
    },
    {
      url: "https://bharathfinancial.co/calculators/sip-calculator",
      lastModified: new Date(),
    },
    {
      url: "https://bharathfinancial.co/calculators/fd-calculator",
      lastModified: new Date(),
    },
    {
      url: "https://bharathfinancial.co/calculators/rd-calculator",
      lastModified: new Date(),
    },
    {
      url: "https://bharathfinancial.co/calculators/emi-calculator",
      lastModified: new Date(),
    },
    {
      url: "https://bharathfinancial.co/calculators/ppf-calculator",
      lastModified: new Date(),
    },
    {
      url: "https://bharathfinancial.co/calculators/cagr-calculator",
      lastModified: new Date(),
    },
    {
      url: "https://bharathfinancial.co/calculators/gratuity-calculator",
      lastModified: new Date(),
    },
  ];
}
