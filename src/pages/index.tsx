import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/common/Layout";
import MainVisual from "../components/top/mainVisual";
import About from "../components/top/about";
import Feature from "../components/top/feature";
import Room from "../components/top/room";
import Review from "../components/top/review";
import Blog from "../components/top/blog";
import Access from "../components/top/access";
import Contact from "../components/top/contact";
import { getAllPostsForHome } from "../../lib/api";
import en from "../locals/head/top/en";
import ja from "../locals/head/top/ja";

type BlogType = {
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

type ReviewType = {
  reviews: {
    name: string;
    reviewerImg: {
      sourceUrl: string;
    };
    reviewTitle: string;
  };
  id: string;
  slug: string;
  title: string;
};

export const getStaticProps = async () => {
  const { data } = await getAllPostsForHome();

  return {
    props: {
      blogs: data?.blogs.nodes,
      reviews: data?.reviews.nodes
    }
  };
};

export default function Home({ blogs, reviews }: { blogs: BlogType[]; reviews: ReviewType[] }) {
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
      <MainVisual />
      <About />
      <Feature />
      <Room />
      <div className="hidden h-screen bg-[url('/images/f2.jpg')] bg-cover bg-fixed bg-center bg-no-repeat md:block"></div>
      <Review reviews={reviews} />
      <Blog blogs={blogs} />
      <Access />
      <Contact />
    </Layout>
  );
}
