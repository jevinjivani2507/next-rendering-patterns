import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/navigation";
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
  title: "Next.js Rendering Patterns Demo",
  description:
    "A comprehensive demonstration of Next.js rendering patterns (SSR, CSR, SSG, ISR) using a weather application",
  keywords: [
    "Next.js",
    "React",
    "SSR",
    "CSR",
    "SSG",
    "ISR",
    "Weather App",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Next.js Rendering Patterns Demo" }],
  openGraph: {
    title: "Next.js Rendering Patterns Demo",
    description:
      "Explore different rendering patterns in Next.js with a real-world weather application",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Rendering Patterns Demo",
    description:
      "Explore different rendering patterns in Next.js with a real-world weather application",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${geistSans.variable} ${geistMono.variable}`}
      >
        <div className="min-h-screen bg-gray-50 p-4 md:p-12">
          <Navigation />
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
