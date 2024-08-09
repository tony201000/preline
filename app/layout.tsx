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
        <meta name="description" content="An amazing jewel" />
        <meta property="og:site_name" content="preline.app" />
        <meta property="og:description" content="An amazing jewel." />
        <meta property="og:title" content="An amazing Jewel" />
        <meta name="twitter:card" content="An amazing Jewel" />
        <meta name="twitter:title" content="An amazing Jewel" />
        <meta name="twitter:description" content="SAn amazing Jewel." />
      </head>
      <body className={inter.className}>
        {children}
        <PrelineScript />
      </body>
    </html>
  );
}
