import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import clsx from "clsx";
import en from "../../../locals/contact/thanks/en";
import ja from "../../../locals/contact/thanks/ja";
import Layout from "../../../components/common/Layout";
import Button from "../../../components/common/Button";

export default function Thanks() {
  const { locale } = useRouter();
  const t = locale === "en" ? en : ja;

  return (
    <Layout>
      <Head>
        <title>{t.title} | HOTEL LUCKYⅡ</title>
      </Head>
      <div className="flex h-40 items-center justify-center bg-slate-800 md:h-80">
        <h1 className="font-accent text-xl font-bold uppercase text-white-100 md:text-4xl">Contact</h1>
      </div>
      <div
        className={clsx("py-32", {
          "font-accent": locale === "en"
        })}
      >
        <h2 className="text-center text-3xl font-bold">{t.title}</h2>
        <p className="mt-2 text-center" dangerouslySetInnerHTML={{ __html: t.text }} />
        <div className="mt-16">
          <Button title={t.buttonText} href="/" />
        </div>
      </div>
    </Layout>
  );
}
