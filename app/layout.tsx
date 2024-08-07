import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "./prelineScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome",
  description: "A private jewel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="See pictures from Next.js Conf and the After Party." />
        <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
        <meta property="og:description" content="See pictures from Next.js Conf and the After Party." />
        <meta property="og:title" content="Next.js Conf 2022 Pictures" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Next.js Conf 2022 Pictures" />
        <meta name="twitter:description" content="See pictures from Next.js Conf and the After Party." />
      </head>
      <body className={inter.className}>
        {children}
        <PrelineScript />
      </body>
    </html>
  );
}
