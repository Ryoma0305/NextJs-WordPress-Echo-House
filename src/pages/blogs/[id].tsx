import { formatJapaneseDate } from "../../utils/formatDate";
import Button from "../../components/common/Button";
import Layout from "../../components/common/Layout";
import { getBlogPost } from "../../../lib/api";
import { getBlogPostsWithId } from "../../../lib/api";

type BlogType = {
  date: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  id: string;
  title: string;
  content: string;
};

export const getStaticPaths = async () => {
  const { data } = await getBlogPostsWithId();

  const ids = data.blogs.nodes.map((blog: { id: string }) => ({ params: { id: blog.id } }));

  return {
    paths: ids,
    fallback: false
  };
};

export const getStaticProps = async ({ params }: { params: { id: string } }) => {
  const { data } = await getBlogPost(params);

  return {
    props: {
      blog: data.blogBy
    }
  };
};

const Blog = ({ blog }: { blog: BlogType }) => {
  return (
    <Layout>
      <div className="flex h-40 items-center justify-center bg-slate-800 md:h-80">
        <h1 className="font-accent text-xl font-bold uppercase text-white-100 md:text-4xl">Blog</h1>
      </div>
      <section className="px-4 pb-16 pt-32">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-8">
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
