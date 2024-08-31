import "./globals.css";

import React from "react";
import type { Metadata } from "next";
import Header from "../app/_components/common/Header";
import Footer from "../app/_components/common/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.echo-house-osaka.com"),
  title: {
    template: "%s | ECHO HOUSE",
    default: "ECHO HOUSE"
  },
  description: "エコーハウスは新今宮駅まで徒歩5分、通天閣、新世界まで徒歩7分、と大阪の中心地に位置する女性専用シェアハウスです。",
  openGraph: {
    title: "ECHO HOUSE",
    description: "エコーハウスは新今宮駅まで徒歩5分、通天閣、新世界まで徒歩7分、と大阪の中心地に位置する女性専用シェアハウスです。",
    images: ["/favicon.ico"]
  },
  alternates: {
    canonical: "https://www.echo-house-osaka.com"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <Head>
        <meta property="og:site_name" content="ECHO HOUSE" />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
