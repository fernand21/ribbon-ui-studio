import type { Metadata } from "next";
import DocsClient from "./docs-client";

export const metadata: Metadata = {
  title: "Ribbon UI Studio v3.2 Documentation — RibbonX, VBA, imageMso & Office Add-ins",
  description:
    "Complete Ribbon UI Studio v3.2 documentation for RibbonX XML, Office 2007 and 2010+ customUI, VBA modules and callbacks, imageMso icons, visual previews, diagnostics, Excel/Word/PowerPoint add-ins and Windows installer packaging.",
  keywords: [
    "Ribbon UI Studio documentation",
    "RibbonX editor documentation",
    "Office Custom UI editor",
    "Excel RibbonX",
    "Word RibbonX",
    "PowerPoint RibbonX",
    "VBA callbacks",
    "imageMso icons",
    "XLAM add-in",
    "DOTM add-in",
    "PPAM add-in",
    "customUI XML"
  ],
  alternates: {
    canonical: "https://fernand21.github.io/ribbon-ui-studio/docs/"
  },
  openGraph: {
    type: "article",
    siteName: "Ribbon UI Studio",
    title: "Ribbon UI Studio v3.2 Documentation",
    description: "From Office file to RibbonX, VBA callbacks, add-ins and Windows distribution in one practical guide.",
    url: "https://fernand21.github.io/ribbon-ui-studio/docs/",
    images: [{ url: "../og.png", alt: "Ribbon UI Studio" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ribbon UI Studio v3.2 Documentation",
    description: "RibbonX, VBA, imageMso, Office add-ins and packaging documentation.",
    images: ["../og.png"]
  }
};

export default function DocumentationPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Ribbon UI Studio v3.2 Documentation",
    description:
      "Documentation for RibbonX XML, VBA callbacks, imageMso icons, visual previews, diagnostics and Office add-in creation with Ribbon UI Studio.",
    dateModified: "2026-09-10",
    mainEntityOfPage: "https://fernand21.github.io/ribbon-ui-studio/docs/",
    about: {
      "@type": "SoftwareApplication",
      name: "Ribbon UI Studio",
      softwareVersion: "3.2.0",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Windows"
    },
    author: { "@type": "Person", name: "Fernando Arevalo" }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <DocsClient />
    </>
  );
}
