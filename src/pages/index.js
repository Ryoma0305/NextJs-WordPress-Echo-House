import { gql } from "@apollo/client";
import { client } from "../../lid/apollo";
import Layout from "../components/common/Layout";
import MainVisual from "../components/top/mainVisual";
import About from "../components/top/about";
import Feature from "../components/top/feature";
import Room from "../components/top/room";
import Review from "../components/top/review";
import Blog from "../components/top/blog";
import Access from "../components/top/access";
import Contact from "../components/top/contact";

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query AllQuery {
        reviews {
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
        blogs {
          nodes {
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            title
            slug
            id
            content
          }
        }
      }
    `
  });

  return {
    props: {
      blogs: data?.blogs.nodes,
      reviews: data?.reviews.nodes
    }
  };
};

export default function Home({ blogs, reviews }) {
  return (
    <Layout>
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
