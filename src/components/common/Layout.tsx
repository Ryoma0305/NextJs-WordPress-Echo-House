import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
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
