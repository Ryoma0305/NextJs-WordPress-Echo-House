import Image from "next/image";
import { formatJapaneseDate } from "../../utils/formatDate";
import Layout from "../../components/common/Layout";
import { getReviewPost } from "../../../lib/api";
import { getReviewPostsWithSlug } from "../../../lib/api";
import Button from "../../components/common/Button";
import ReviewInfo from "@/components/reviews/reviewInfo";
import ReviewImages from "@/components/reviews/reviewImages";
import React from "react";

type ReviewType = {
  reviews: {
    staffRating: number;
    atmosphereRating: number;
    cleanlinessRating: number;
    locationRating: number;
    priceRating: number;
    age: number;
    atmosphereImpression: string;
    cleanlinessImpression: string;
    country: string;
    impression: string;
    locationImpression: string;
    name: string;
    priceImpression: string;
    reviewImg1?: {
      sourceUrl: string;
    };
    reviewImg2?: {
      sourceUrl: string;
    };
    reviewImg3?: {
      sourceUrl: string;
    };
    reviewerImg: {
      sourceUrl: string;
    };
    reviewTitle: string;
    staffImpression: string;
    staffMessage?: string;
  };
  slug: string;
  title: string;
  date: string;
};

export const getStaticPaths = async () => {
  const { data } = await getReviewPostsWithSlug();

  const slugs = data.reviews.nodes.map((review: { slug: string }) => ({ params: { slug: review.slug } }));
  return {
    paths: slugs,
    fallback: false
  };
};

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  const { data } = await getReviewPost(params);

  return {
    props: {
      review: data.reviewBy
    }
  };
};

const Review = ({ review }: { review: ReviewType }) => {
  const totalScore = (review.reviews.staffRating + review.reviews.atmosphereRating + review.reviews.cleanlinessRating + review.reviews.locationRating + review.reviews.priceRating) / 5;
  return (
    <Layout>
      <div className="flex h-40 items-center justify-center bg-slate-800 md:h-80">
        <h1 className="font-accent text-xl font-bold uppercase text-white-100 md:text-4xl">Review</h1>
      </div>
      <section className="px-4 pb-16 pt-32">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
          <div className="flex flex-col items-center gap-2">
            <p className="">
              <Image src={review.reviews.reviewerImg.sourceUrl} width="73" height="73" alt="" />
            </p>
            <div className="flex flex-col gap-2">
              <p className="border-b border-black">{`Name : ${review.reviews.name}`}</p>
              <p className="border-b border-black">{`Age : ${review.reviews.age}`}</p>
              <p className="border-b border-black">{`Country : ${review.reviews.country}`}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 md:mx-auto md:flex md:w-1/2 md:justify-center">
            <time className="font-accent text-xs" dateTime={new Date(review.date).toISOString()}>
              {formatJapaneseDate(review.date)}
            </time>
            <p className="text-xl font-bold">
              総合評価 : <span>{totalScore}</span> / 5.0
            </p>
          </div>

          {review.reviews.reviewTitle && <ReviewInfo impression={review.reviews.reviewTitle} />}

          {review.reviews.staffImpression && <ReviewInfo title="スタッフ" rating={review.reviews.staffRating} impression={review.reviews.staffImpression} />}

          {review.reviews.atmosphereImpression && <ReviewInfo title="雰囲気" rating={review.reviews.atmosphereRating} impression={review.reviews.atmosphereImpression} />}

          {review.reviews.cleanlinessImpression && <ReviewInfo title="清潔さ" rating={review.reviews.cleanlinessRating} impression={review.reviews.cleanlinessImpression} />}

          {review.reviews.locationImpression && <ReviewInfo title="立地" rating={review.reviews.locationRating} impression={review.reviews.locationImpression} />}

          {review.reviews.priceImpression && <ReviewInfo title="コスト" rating={review.reviews.priceRating} impression={review.reviews.priceImpression} />}

          {review.reviews.staffMessage && <ReviewInfo title="スタッフからのメッセージ" impression={review.reviews.staffMessage} />}

          {(review.reviews.reviewImg1 || review.reviews.reviewImg2 || review.reviews.reviewImg3) && (
            <ReviewImages image1={review.reviews.reviewImg1?.sourceUrl} image2={review.reviews.reviewImg2?.sourceUrl} image3={review.reviews.reviewImg3?.sourceUrl} />
          )}

          <div className="mt-16">
            <Button title="Review一覧へ" href="/reviews/" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Review;
