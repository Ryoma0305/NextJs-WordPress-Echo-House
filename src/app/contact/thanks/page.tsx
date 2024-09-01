"use client";

import React from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import en from "../../../locals/contact/thanks/en";
import ja from "../../../locals/contact/thanks/ja";
import Button from "../../_components/common/Button";
import { montserrat } from "../../fonts/fonts";

export default function Thanks() {
  const pathname = usePathname();
  const t = pathname.includes("eng") ? en : ja;

  return (
    <>
      <Head>
        <title>{t.title} | HOTEL LUCKYⅡ</title>
      </Head>
      <div className="flex h-40 items-center justify-center bg-slate-800 md:h-80">
        <h1 className={`${montserrat.className} text-xl font-bold uppercase text-white-100 md:text-4xl`}>Contact</h1>
      </div>
      <div
        className={clsx("py-32", {
          [montserrat.className]: pathname.includes("eng")
        })}
      >
        <h2 className="text-center text-3xl font-bold">{t.title}</h2>
        <p className="mt-2 text-center" dangerouslySetInnerHTML={{ __html: t.text }} />
        <div className="mt-16">
          <Button title={t.buttonText} href="/" />
        </div>
      </div>
    </>
  );
}
