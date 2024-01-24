import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="text-black antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
