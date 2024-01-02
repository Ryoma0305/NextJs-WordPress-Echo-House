import Footer from "@/components/footer";
import Header from "@/components/header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Header />
        <Main />
        {/* <Footer /> */}
        <NextScript />
      </body>
    </Html>
  );
}
