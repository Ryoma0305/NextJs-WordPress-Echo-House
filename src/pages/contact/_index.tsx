import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/common/Layout";
import ContactForm from "../../components/contact/ContactForm";
import en from "../../locals/head/contact/en";
import ja from "../../locals/head/contact/ja";

export default function Form() {
  const { locale } = useRouter();
  const t = locale === "en" ? en : ja;

  return (
    <Layout>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta property="og:title" content={t.title} key="title" />
        <meta name="og:description" content={t.description} key="description" />
      </Head>
      <div className="flex h-40 items-center justify-center bg-slate-800 md:h-80">
        <h1 className="font-accent text-xl font-bold uppercase text-white-100 md:text-4xl">Contact</h1>
      </div>
      <div className="container mx-auto mt-5 max-w-[1200px] px-4 md:px-56 md:pb-40 md:pt-24">
        <ContactForm />
      </div>
    </Layout>
  );
}
