import type { Metadata } from "next";
import DocsClient from "./docs-client";

const socialImage = "https://fernand21.github.io/ribbon-ui-studio/og.png";

export const metadata: Metadata = {
  title: "Ribbon UI Studio v4.0.0 Documentation — RibbonX, VBA, imageMso & Office Add-ins",
  description:
    "Complete Ribbon UI Studio v4.0.0 documentation for the Ribbon Visual Designer, native VBA UserForms, PRO Modern Forms, modern VBA-compatible dialogs, add-in licensing, RibbonX/VBA workflows and InstallerLab-based EXE/MSI/Bundle deployment.",
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
    title: "Ribbon UI Studio v4.0.0 Documentation",
    description: "From Office file to RibbonX, VBA callbacks, add-ins and Windows distribution in one practical guide.",
    url: "https://fernand21.github.io/ribbon-ui-studio/docs/",
    images: [{ url: socialImage, alt: "Ribbon UI Studio" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ribbon UI Studio v4.0.0 Documentation",
    description: "RibbonX, VBA, imageMso, Office add-ins and packaging documentation.",
    images: [socialImage]
  }
};

export default function DocumentationPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Ribbon UI Studio v4.0.0 Documentation",
    description:
      "Documentation for Ribbon UI Studio v4: Ribbon Visual Designer, native VBA UserForms, PRO Modern Forms and dialogs, add-in licensing, RibbonX/VBA and InstallerLab deployment.",
    dateModified: "2026-10-09",
    mainEntityOfPage: "https://fernand21.github.io/ribbon-ui-studio/docs/",
    about: {
      "@type": "SoftwareApplication",
      name: "Ribbon UI Studio",
      softwareVersion: "4.0.0",
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
