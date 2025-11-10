import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Alien Tech Grading | AI-Powered Trading Card Grading",
    template: "%s | Alien Tech Grading",
  },
  description:
    "Revolutionary AI-powered trading card grading platform. Get accurate, consistent, and lightning-fast card grading with advanced computer vision technology.",
  keywords: [
    "trading cards",
    "card grading",
    "AI grading",
    "sports cards",
    "Pokemon cards",
    "card authentication",
    "card certification",
    "collectibles",
  ],
  authors: [{ name: "Alien Tech Grading" }],
  creator: "Alien Tech Grading",
  publisher: "Alien Tech Grading",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alientechgrading.com",
    siteName: "Alien Tech Grading",
    title: "Alien Tech Grading | AI-Powered Trading Card Grading",
    description:
      "Revolutionary AI-powered trading card grading platform. Get accurate, consistent, and lightning-fast card grading.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alien Tech Grading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alien Tech Grading | AI-Powered Trading Card Grading",
    description:
      "Revolutionary AI-powered trading card grading platform. Get accurate, consistent, and lightning-fast card grading.",
    images: ["/images/twitter-image.png"],
    creator: "@alientechgrade",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
