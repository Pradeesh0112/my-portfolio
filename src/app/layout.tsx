import type { Metadata } from "next";
import { calibre } from './fonts'; // Import your custom Calibre font
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Your Name | Portfolio",
    template: "%s | Your Name"
  },
  description: "Software engineer specializing in building exceptional digital experiences.",
  keywords: ["portfolio", "developer", "software engineer", "web development"],
  authors: [{ name: "Your Name" }],
  themeColor: "#0a192f",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    title: "Your Name | Portfolio",
    description: "Software engineer specializing in building exceptional digital experiences.",
    siteName: "Your Name Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name | Portfolio",
    description: "Software engineer specializing in building exceptional digital experiences.",
    creator: "@yourtwitter",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${calibre.variable} font-sans antialiased bg-navy text-lightSlate`}>
        {children}
      </body>
    </html>
  );
}