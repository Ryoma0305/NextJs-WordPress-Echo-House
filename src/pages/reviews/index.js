import Link from "next/link";
import Image from "next/image";
import { client } from "../../../lid/apollo";
import { gql } from "@apollo/client";
import Layout from "../../components/common/Layout";

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query reviewsQuery {
        reviews(first: 50) {
          nodes {
            reviews {
              name
              reviewerImg {
                sourceUrl
              }
              reviewTitle
            }
            id
            slug
            title
          }
        }
      }
    `
  });

  return {
    props: {
      reviews: data?.reviews.nodes
    }
  };
};

export default function reviews({ reviews }) {
  return (
    <Layout>
      <div className="flex h-40 items-center justify-center bg-gradient-right-pink md:h-80">
        <h2 className="font-accent text-xl font-bold uppercase md:text-4xl">Review</h2>
      </div>
      <section className="px-4 pb-32 pt-16">
        <div className="mx-auto flex max-w-[1200px]">
          <ul className="flex flex-col gap-16 md:grid md:grid-cols-2 md:gap-4 md:gap-x-8 md:gap-y-32 md:px-48 md:py-16">
            {reviews.map((item) => (
              <li key={item.id}>
                <Link href={`/reviews/${item.slug}`} className="flex flex-col transition-opacity duration-500 ease-out-expo hover:opacity-70">
                  <div className="order-2 mt-2 flex flex-col items-center gap-2">
                    <p className="text-xl font-bold md:text-2xl">{item.reviews.name}</p>
                    <p className="text-center text-sm md:text-base">{item.reviews.reviewTitle}</p>
                  </div>
                  <p className="order-1 flex justify-center">
                    <Image src={item.reviews.reviewerImg?.sourceUrl} width="72" height="72" alt="" />
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
