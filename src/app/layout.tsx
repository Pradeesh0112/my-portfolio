import type { Metadata, Viewport } from "next";
import { calibre } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pradeesh | Portfolio",
    template: "%s | Pradeesh",
  },
  description:
    "Software engineer specializing in building exceptional digital experiences.",
  keywords: ["portfolio", "developer", "software engineer", "web development"],
  authors: [{ name: "Pradeesh" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Pradeesh | Portfolio",
    description:
      "Software engineer specializing in building exceptional digital experiences.",
    siteName: "Pradeesh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pradeesh | Portfolio",
    description:
      "Software engineer specializing in building exceptional digital experiences.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a192f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${calibre.variable} font-sans antialiased bg-navy text-lightSlate`}>
        {children}
      </body>
    </html>
  );
}
