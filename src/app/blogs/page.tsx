import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatJapaneseDate } from "../../utils/formatDate";
import { getBlogPosts } from "../../../lib/api";
import { montserrat } from "../fonts/fonts";

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

export const revalidate = 60;

export default async function Page() {
  const { data } = await getBlogPosts();
  const blogs: BlogsType[] = data?.blogs.nodes || [];

  return (
    <>
      <div className="flex h-40 items-center justify-center bg-slate-800 md:h-80">
        <h1 className={`${montserrat.className} text-xl font-bold uppercase text-white-100 md:text-4xl`}>Blog</h1>
      </div>
      <section className="px-4 pb-32 pt-16">
        <div className="mx-auto flex max-w-[1200px]">
          <ul className="flex flex-col gap-16 md:grid md:grid-cols-3 md:gap-4 md:gap-x-8 md:gap-y-32">
            {blogs.map((item) => (
              <li key={item.id}>
                <Link href={`/blogs/${item.slug}`} className="flex flex-col gap-2 transition-opacity duration-500 ease-out-expo hover:opacity-70">
                  <p className="order-3 font-bold md:text-xl">{item.title}</p>
                  <time className="order-2 inline-block text-xs md:text-base" dateTime={new Date(item.date).toISOString()}>
                    {formatJapaneseDate(item.date)}
                  </time>
                  <p className="order-1 flex justify-center md:h-64">
                    <Image src={item.featuredImage?.node.sourceUrl} width={308} height={185} alt="" className="h-full w-full object-cover" />
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
