import { gql } from "@apollo/client";
import { client } from "../../../lid/apollo";
import Image from "next/image";
import SectionHeading from "../../components/common/sectionHeading";
import { formatJapaneseDate } from "../../utils/formatDate";
import Button from "../../components/common/button";
import Layout from "../../components/common/Layout";

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query reviewsQuery {
        blogs {
          nodes {
            id
          }
        }
      }
    `
  });

  const ids = data.blogs.nodes.map((blog) => ({ params: { id: blog.id } }));

  return {
    paths: ids,
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: gql`
      query GetBlogById($id: ID!) {
        blogBy(id: $id) {
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          id
          title
          content
        }
      }
    `,
    variables: {
      id: params.id
    }
  });

  return {
    props: {
      blog: data.blogBy
    }
  };
};

const Blog = ({ blog }) => {
  return (
    <Layout>
      <section className="px-4 pb-16 pt-32">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-8">
          <SectionHeading titleJp="ブログ" titleEn="Blog" />
          <div>
            <h2 className="text-2xl font-bold">{blog.title}</h2>
            <time className="mt-4 inline-block" dateTime={new Date(blog.date).toISOString()}>
              {formatJapaneseDate(blog.date)}
            </time>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="[&_.gallery-columns-3]:flex [&_.gallery-columns-3]:flex-col md:[&_.gallery-columns-3]:flex-row [&_.gallery]:gap-4 [&_p]:mb-4"
          />
          <div className="mt-16">
            <Button title="Blog一覧へ" href="/blogs/" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
