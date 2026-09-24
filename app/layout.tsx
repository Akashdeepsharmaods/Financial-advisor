import type { Metadata, Viewport } from "next";
import { Cinzel, Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050814",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vikramadityaroy.com"),
  title: {
    default: "Vikramaditya Roy | Private Wealth Advisor & Fiduciary Consultant",
    template: "%s | Vikramaditya Roy Private Wealth",
  },
  description:
    "Fee-only SEBI Registered Private Wealth Advisor & Family Office Consultant (INA00019482, CFA). Managing ₹850+ Cr for founders, executives, and multi-generational business families.",
  keywords: [
    "Wealth Management India",
    "SEBI Registered Investment Advisor",
    "Family Office Advisory",
    "Private Family Trust Structuring",
    "Discretionary Portfolio Management",
    "Founder Secondary Liquidity",
    "NRI Wealth Tax Advisory",
    "Category II AIF Alternative Investments",
    "Corporate Treasury Optimization",
    "CFA Wealth Consultant Mumbai"
  ],
  authors: [{ name: "Vikramaditya Roy", url: "https://vikramadityaroy.com" }],
  creator: "Vikramaditya Roy",
  publisher: "Vikramaditya Roy Private Wealth Office",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vikramaditya Roy | Private Wealth & Fiduciary Family Office Advisor",
    description:
      "Fee-only discretionary wealth management for founders, corporate promoters, and ultra-HNIs. Zero distribution commissions. 100% fiduciary alignment.",
    url: "https://vikramadityaroy.com",
    siteName: "Vikramaditya Roy Private Wealth",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "Vikramaditya Roy - Private Wealth Advisor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikramaditya Roy | Private Wealth Advisor",
    description:
      "Bespoke fiduciary wealth advisory & family office structuring for significant capital.",
    images: ["https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&h=630&q=85"],
    creator: "@vikramadityaroy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`${cinzel.variable} ${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="bg-[#050814] text-slate-100 font-sans antialiased selection:bg-amber-500/30 selection:text-amber-200">
        {children}
      </body>
    </html>
  );
}
