import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    <Html lang="ja" className="scroll-smooth">
      <Head>
        <meta property="og:site_name" content="ECHO HOUSE" />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <body className="bg-white-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
