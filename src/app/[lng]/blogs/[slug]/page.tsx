import React from "react";
import { formatJapaneseDate } from "../../../../utils/formatDate";

import { getBlogPost } from "../../../../../lib/api";
import { getBlogPostsWithSlug } from "../../../../../lib/api";
import { Metadata } from "next";
import Button from "../../_components/common/Button";
import { montserrat } from "../../fonts/fonts";

type Props = {
  params: {
    slug: string;
  };
};

type BlogType = {
  date: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  slug: string;
  title: string;
  content: string;
};

export const generateStaticParams = async () => {
  const { data } = await getBlogPostsWithSlug();

  if (!data) {
    return [];
  }

  return data.blogs.nodes.map((post: { slug: string }) => ({
    slug: post.slug
  }));
};

export async function generateMetadata({ params }: Props): Promise<Metadata | null> {
  const post = await getBlogPost(params);
  const title = post.data.blogBy.title;

  if (!post) {
    return {};
  }
  return {
    title: title
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const data = await getBlogPost(params);
  const blog: BlogType = data.data.blogBy;

  return (
    <>
      <div className="flex h-40 items-center justify-center bg-slate-800 md:h-80">
        <h1 className={`${montserrat.className} text-xl font-bold uppercase text-white-100 md:text-4xl`}>Blog</h1>
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
    </>
  );
}
