import Navbar from "@components/Navbar";
import client from "client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";
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
  const post: Post = await getClient(false).fetch(
    groq` *[_type == "post" && slug.current == $slug][0]`,
    {
      slug: params.slug,
    }
  );

  return { props: { post } };
}

export async function getStaticPaths() {
  const queryAll = groq`*[_type == "post" && slug.current != ''] {
    'slug': slug.current
  }`;

  const pages: { slug: string }[] = await getClient(false).fetch(queryAll);

  const generateList = pages.map(({ slug }) => ({ params: { slug } }));

  return {
    paths: generateList,
    fallback: true,
  };
}

export default Blog;
