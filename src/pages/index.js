import { gql } from "@apollo/client";
import { client } from "../../lid/apollo";
import Link from "next/link";
import About from "@/components/top/about";
import Feature from "@/components/top/feature";
import Room from "@/components/top/room";

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query AllBlogsQuery {
        reviews {
          nodes {
            reviews {
              age
              atmosphereImpression
              atmosphereRating
              cleanlinessImpression
              cleanlinessRating
              country
              impression
              locationImpression
              locationRating
              name
              priceImpression
              priceRating
            }
            id
            slug
            title
          }
        }
        blogs {
          nodes {
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
      blogs: data?.blogs.nodes,
      reviews: data?.reviews?.nodes
    }
  };
};

export default function Home({ blogs, reviews }) {
  return (
    <main>
      <About />
      <Feature />
      <Room />
      {/* <div>
        <h1 className="text-3xl font-bold underline">
          Next.js with Headless WordPress
        </h1>
        <div className="mt-5 space-y-2">
          {blogs.map((post) => {
            const { id, slug, title } = post;
            return (
              <Link key={id} href={`/posts/${slug}`} className="block">
                {title}
              </Link>
            );
          })}
        </div>

        <ul className="mt-5 space-y-2">
          {reviews.map((post) => {
            const { id, slug, title, reviews } = post;
            console.log(reviews);
            return (
              <li key={id}>
                <Link key={id} href={`/posts/${slug}`} className="block">
                  {title}
                </Link>
                <p
                  dangerouslySetInnerHTML={{
                    __html: reviews.atmosphereImpression,
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div> */}
    </main>
  );
}
