import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ribbon UI Studio 5 — IDE Documentation and Tutorials",
  description: "Ribbon UI Studio 5 IDE manual in Spanish and English: projects, visual RibbonX, Monaco XML and VBA, callbacks, UserForms, Modern Forms, AI assistance, packaging and licensing.",
  alternates: { canonical: "https://fernand21.github.io/ribbon-ui-studio/docs/v5/" },
  openGraph: {
    type: "article",
    title: "Ribbon UI Studio 5 — Office Add-in IDE Documentation",
    description: "Step-by-step RibbonX, VBA, forms and Office add-in workflows.",
    url: "https://fernand21.github.io/ribbon-ui-studio/docs/v5/"
  }
};
export default function V5DocsLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <>{children}</>;
}
