import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl = "https://fernand21.github.io/ribbon-ui-studio/";
const title = "Ribbon UI Studio v4.0.0 — Visual RibbonX, VBA UserForms & Modern Forms";
const description = "Ribbon UI Studio v4 for Microsoft Office: visual Ribbon designer, RibbonX/customUI XML, VBA editing, classic VBA UserForms in Community, PRO Modern Forms and dialogs, add-in licensing, and InstallerLab-based EXE/MSI/Bundle deployment.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Ribbon UI Studio",
  title,
  description,
  category: "developer tools",
  creator: "Ribbon UI Studio",
  publisher: "Ribbon UI Studio",
  authors: [{ name: "Ribbon UI Studio", url: siteUrl }],
  keywords: [
    "RibbonX editor",
    "Microsoft Office ribbon editor",
    "Office Custom UI Editor",
    "Custom UI Editor alternative",
    "Ribbon XML editor",
    "Excel ribbon designer",
    "Word ribbon editor",
    "PowerPoint ribbon editor",
    "VBA ribbon editor",
    "Office add-in creator",
    "imageMso browser",
    "VBA callback generator",
    "VBA UserForm designer",
    "Modern Forms Office",
    "Office add-in licensing",
    "InstallerLab",
    "customUI XML",
    "Office RibbonX",
    "Excel add-in",
    "Word add-in",
    "PowerPoint add-in"
  ],
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  manifest: "manifest.webmanifest",
  icons: {
    icon: [
      { url: "favicon.ico", sizes: "16x16 32x32 48x48 64x64" },
      { url: "favicon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "icon-192.png", type: "image/png", sizes: "192x192" }
    ],
    shortcut: "favicon.ico",
    apple: [{ url: "apple-touch-icon.png", type: "image/png", sizes: "180x180" }]
  },
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Ribbon UI Studio",
    locale: "en_US",
    url: siteUrl,
    images: [{
      url: "og.png",
      alt: "Ribbon UI Studio — RibbonX and Office Custom UI editor for Windows"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["og.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Ribbon UI Studio",
        url: siteUrl,
        description: "Official website, documentation and downloads for Ribbon UI Studio, a RibbonX and Office Custom UI editor for Windows.",
        inLanguage: "en"
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}#software`,
        name: "Ribbon UI Studio",
        alternateName: ["RibbonX Editor", "Office Ribbon Editor"],
        operatingSystem: "Windows 10, Windows 11",
        applicationCategory: "DeveloperApplication",
        applicationSubCategory: "Microsoft Office add-in development and RibbonX design",
        softwareVersion: "4.0.0",
        applicationSuite: "Microsoft Office",
        description,
        url: siteUrl,
        downloadUrl: "https://github.com/fernand21/ribbon-ui-studio/releases/latest",
        image: `${siteUrl}og.png`,
        screenshot: [
          `${siteUrl}screenshots/editor-workspace-clean.png`,
          `${siteUrl}screenshots/excel-preview-clean.png`,
          `${siteUrl}screenshots/word-preview-clean.png`,
          `${siteUrl}screenshots/powerpoint-preview-clean.png`,
          `${siteUrl}screenshots/v4-ribbon-visual-designer.webp`,
          `${siteUrl}screenshots/v4-vba-userform-designer.webp`,
          `${siteUrl}screenshots/v4-modern-forms-designer.webp`
        ],
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        featureList: [
          "RibbonX and customUI XML editing",
          "Excel, Word and PowerPoint add-in creation",
          "VBA callback generation and diagnostics",
          "imageMso icon browsing",
          "Office-aware ribbon previews",
          "Native VBA UserForm visual design",
          "PRO Modern Forms and modern dialogs",
          "PRO add-in licensing management",
          "InstallerLab-based EXE, MSI and Bundle deployment"
        ],
        softwareRequirements: "Microsoft Office desktop. InstallerLab must be installed separately to generate EXE, MSI or Bundle packages for Office add-ins. PRO is required for Modern Forms and add-in licensing features.",
        sameAs: ["https://github.com/fernand21/ribbon-ui-studio"]
      }
    ]
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
