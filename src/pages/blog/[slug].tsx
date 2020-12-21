import { queryAllPost, queryAllPostPaths, queryPost } from "@api/sanityAPI";
import Navbar from "@components/Navbar";
import { InferGetStaticPropsType } from "next";
import { getClient } from "sanity";

interface Post {
  title: string;
}

function Blog({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Navbar borderShown />
      <main className="container prose">
        <h1>{post.title}</h1>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post: Post = await getClient(false).fetch(queryPost, {
    slug: params.slug,
  });

  return { props: { post } };
}

export async function getStaticPaths() {
  const pages: { slug: string }[] = await getClient(false).fetch(
    queryAllPostPaths
  );
  const paths = pages.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: true,
  };
}

export default Blog;
