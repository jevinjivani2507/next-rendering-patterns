import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/navigation";
import "./globals.css";
import * as React from "react";
import type { SVGProps } from "react";

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

const GitHub = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 1024 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
      transform="scale(64)"
      fill="currentColor"
    />
  </svg>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${geistSans.variable} ${geistMono.variable} max-w-7xl mx-auto p-4 md:px-12`}
      >
        <div className="min-h-screen bg-background">
          <div className="flex max-w-xl mx-auto justify-end mt-4">
            <a
              href="https://github.com/jevinjivani2507/next-rendering-patterns"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 cursor-pointer items-center gap-2 rounded-md border border-border bg-card px-3.5 text-card-foreground transition-colors hover:bg-primary/10"
              title="Star on GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="70"
                viewBox="9 8 65 62"
                className="h-4 w-4 text-accent"
              >
                <path
                  fill="currentColor"
                  d="M39.147 8.781c.898-2.764 4.808-2.764 5.706 0l5.903 18.167a3 3 0 0 0 2.853 2.073h19.102c2.907 0 4.115 3.72 1.764 5.427L59.02 45.676a3 3 0 0 0-1.09 3.354l5.903 18.168c.898 2.764-2.266 5.062-4.617 3.354L43.763 59.324a3 3 0 0 0-3.526 0L24.783 70.552c-2.351 1.708-5.515-.59-4.617-3.354L26.07 49.03a3 3 0 0 0-1.09-3.354L9.525 34.448c-2.35-1.708-1.142-5.427 1.764-5.427H30.39a3 3 0 0 0 2.853-2.073z"
                />
              </svg>
              <GitHub className="h-4 w-4" />
              <span className="hidden md:inline">Star on GitHub</span>
            </a>
          </div>
          <Navigation />
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
