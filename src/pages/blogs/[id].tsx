import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { formatJapaneseDate } from "../../utils/formatDate";
import Button from "../../components/common/Button";
import Layout from "../../components/common/Layout";
import { getBlogPost } from "../../../lib/api";
import { getBlogPostsWithId } from "../../../lib/api";
import en from "../../locals/head/review/en";
import ja from "../../locals/head/review/ja";

type BlogType = {
  date: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  id: string;
  title: string;
  content: string;
};

export const getStaticPaths = async () => {
  const { data } = await getBlogPostsWithId();

  const ids = data.blogs.nodes.map((blog: { id: string }) => ({ params: { id: blog.id }, locale: "ja" }));

  ids.push(...ids.map((p: any) => ({ ...p, locale: "en" })));

  return {
    paths: ids,
    fallback: false
  };
};

export const getStaticProps = async ({ params }: { params: { id: string; locales: string } }) => {
  const { data } = await getBlogPost(params);

  return {
    props: {
      blog: data.blogBy
    }
  };
};

const Blog = ({ blog }: { blog: BlogType }) => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : ja;

  return (
    <Layout>
      <Head>
        <title>{blog.title} | ECHO HOUSE</title>
        <meta name="description" content={t.description} />
        <meta property="og:title" content={t.title} key="title" />
        <meta name="og:description" content={t.description} key="description" />
      </Head>
      <div className="flex h-40 items-center justify-center bg-slate-800 md:h-80">
        <h1 className="font-accent text-xl font-bold uppercase text-white-100 md:text-4xl">Blog</h1>
      </div>
      <section className="px-4 pb-16 pt-32">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-8">
          <div>
            <h2 className="text-2xl font-bold">{blog.title}</h2>
            <time className="mt-4 inline-block" dateTime={new Date(blog.date).toISOString()}>
              {formatJapaneseDate(blog.date)}
            </time>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="[&_.gallery-columns-3]:flex [&_.gallery-columns-3]:flex-col md:[&_.gallery-columns-3]:flex-row [&_.gallery]:gap-4 [&_p]:mb-4"
          />
          <div className="mt-16">
            <Button title="Blog一覧へ" href="/blogs/" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
