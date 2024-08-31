import React from "react";
import MainVisual from "../app/_components/top/MainVisual";
import About from "../app/_components/top/About";
import Feature from "../app/_components/top/Feature";
import Room from "../app/_components/top/Room";
import Review from "../app/_components/top/Review";
import Access from "../app/_components/top/Access";
import Contact from "../app/_components/top/Contact";
import { getAllPostsForHome } from "../../lib/api";

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

export const revalidate = 60;

export default async function Home() {
  const { data } = await getAllPostsForHome();
  const reviews: ReviewType[] = data?.reviews.nodes || [];

  return (
    <>
      <MainVisual />
      <About />
      <Feature />
      <Room />
      <div className="hidden h-screen bg-[url('/images/f2.jpg')] bg-cover bg-fixed bg-center bg-no-repeat md:block"></div>
      <Review reviews={reviews} />
      <Access />
      <Contact />
    </>
  );
}
