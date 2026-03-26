import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Health & Wealth Group | Life Insurance for Every Family",
  description:
    "Expert life insurance guidance from Carolyn Sime. Term, Whole, and Universal Life Insurance. Free quotes, bilingual service (English & Spanish). Serving Georgia and beyond.",
  keywords: [
    "life insurance",
    "term life insurance",
    "whole life insurance",
    "universal life insurance",
    "insurance agent Atlanta",
    "seguro de vida",
    "affordable life insurance",
    "free life insurance quote",
    "Carolyn Sime",
    "Health and Wealth Group",
  ],
  openGraph: {
    title: "The Health & Wealth Group | Protecting Families for Generations",
    description:
      "Get a free life insurance quote from a licensed, bilingual agent. Term, Whole, and Universal Life coverage starting at $15/month.",
    type: "website",
    locale: "en_US",
    alternateLocale: "es_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
