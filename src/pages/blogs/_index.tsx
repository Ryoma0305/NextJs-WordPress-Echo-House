import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { formatJapaneseDate } from "../../utils/formatDate";
import Layout from "../../components/common/Layout";
import { getBlogPosts } from "../../../lib/api";
import en from "../../locals/head/blog/en";
import ja from "../../locals/head/blog/ja";

type BlogsType = {
  date: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  title: string;
  slug: string;
  id: string;
  content: string;
};

export const getStaticProps = async () => {
  const { data } = await getBlogPosts();

  return {
    props: {
      blogs: data?.blogs.nodes
    }
  };
};

export default function Blogs({ blogs }: { blogs: BlogsType[] }) {
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
        <h1 className="font-accent text-xl font-bold uppercase text-white-100 md:text-4xl">Blog</h1>
      </div>
      <section className="px-4 pb-32 pt-16">
        <div className="mx-auto flex max-w-[1200px]">
          <ul className="flex flex-col gap-16 md:grid md:grid-cols-3 md:gap-4 md:gap-x-8 md:gap-y-32">
            {blogs.map((item) => (
              <li key={item.id}>
                <Link href={`/blogs/${item.id}`} className="flex flex-col gap-2 transition-opacity duration-500 ease-out-expo hover:opacity-70">
                  <p className="order-3 font-bold md:text-xl">{item.title}</p>
                  <time className="order-2 inline-block text-xs md:text-base" dateTime={new Date(item.date).toISOString()}>
                    {formatJapaneseDate(item.date)}
                  </time>
                  <p className="order-1 flex justify-center md:h-64">
                    <Image src={item.featuredImage?.node.sourceUrl} width="308" height="185" alt="" className="h-full w-full object-cover" />
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
