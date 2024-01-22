import Header from "../components/header";
import { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/footer";

export default function Document() {
  return (
    <Html lang="ja" className="scroll-smooth">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
