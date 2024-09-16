import React from "react";
import MainVisual from "./_components/top/MainVisual";
import About from "./_components/top/About";
import Feature from "./_components/top/Feature";
import Room from "./_components/top/Room";
import Review from "./_components/top/Review";
import Blog from "./_components/top/Blog";
import Access from "./_components/top/Access";
import Contact from "./_components/top/Contact";
import { getAllPostsForHome } from "../../../lib/api";
import Image from "next/image";
import bgImg from "../../../public/images/f2.jpg";

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

export const revalidate = 60;

export default async function Page() {
  const { data } = await getAllPostsForHome();
  const reviews: ReviewType[] = data?.reviews.nodes || [];
  const blogs: BlogType[] = data?.blogs.nodes || [];

  return (
    <>
      <MainVisual />
      <About />
      <Feature />
      <Room />
      <p className="sticky left-0 top-0 hidden h-screen md:block">
        <Image src={bgImg} alt="" width="600" height="400" className="h-full w-full object-cover" />
      </p>
      <Review reviews={reviews} />
      <Blog blogs={blogs} />
      <Access />
      <Contact />
    </>
  );
}
