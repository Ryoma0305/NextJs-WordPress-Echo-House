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

export default async function Page({ params: { lng } }) {
  const { data } = await getAllPostsForHome();
  const reviews: ReviewType[] = data?.reviews.nodes || [];
  const blogs: BlogType[] = data?.blogs.nodes || [];

  return (
    <>
      <MainVisual />
      <About />
      <Feature />
      <Room />
      <div className="hidden h-screen bg-[url('/images/f2.jpg')] bg-cover bg-fixed bg-center bg-no-repeat md:block"></div>
      <Review reviews={reviews} />
      <Blog blogs={blogs} />
      <Access />
      <Contact />
    </>
  );
}
