import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../../common/SectionHeading";
import Button from "../../common/Button";
import { truncateText } from "../../../utils/truncateText";
import { formatJapaneseDate } from "../../../utils/formatDate";
import { FadeInBottom } from "../../common/FadeInBottom";
import React from "react";

const Blog = ({ blogs }: { blogs: Array<any> }) => {
  return (
    <FadeInBottom>
      <section className="bg-white-200 px-4 py-16" id="blog">
        <SectionHeading titleJp="ブログ" titleEn="Blog" />
        <ul className="mx-auto flex max-w-[1200px] flex-col gap-12 md:grid md:grid-cols-3 md:gap-8">
          {blogs.slice(0, 3).map((item) => (
            <li key={item.id} className="relative flex flex-col gap-2 transition-opacity duration-500 ease-out-expo hover:opacity-70">
              <h3 className="order-3 text-lg font-bold">
                <Link href={`/blogs/${item.id}`} className="before:absolute before:inset-0">
                  {item.title}
                </Link>
              </h3>
              <time className="order-2 text-sm" dateTime={new Date(item.date).toISOString()}>
                {formatJapaneseDate(item.date)}
              </time>
              <div className="order-4" dangerouslySetInnerHTML={{ __html: truncateText(item.content, 100) }} />
              <p className="order-1 md:h-[16rem]">
                <img src={item.featuredImage.node.sourceUrl} width="308" height="185" alt="" className="h-full w-full object-cover" />
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-16">
          <Button title="View more" href="/blogs/" />
        </div>
      </section>
    </FadeInBottom>
  );
};

export default Blog;
