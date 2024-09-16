import { dir } from "i18next";
import { languages } from "../i18n/settings";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import React from "react";
import type { Metadata } from "next";
import Header from "./_components/common/Header";
import Footer from "./_components/common/Footer";
import Head from "next/head";
import { notoSansJp } from "./fonts/fonts";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

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
  children,
  params: { lng }
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) {
  return (
    <html lang={lng} dir={dir(lng)} className="scroll-smooth">
      <Head>
        <meta property="og:site_name" content="ECHO HOUSE" />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <GoogleAnalytics gaId="G-S411VZKLSL" />
      <body className={notoSansJp.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
