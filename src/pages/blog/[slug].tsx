import client from "client";
import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import { getClient } from "sanity";

function Blog({ post }) {
  return <div>Test {JSON.stringify(post)}</div>;
}

export async function getStaticProps({ params }) {
  const post = await getClient(params.slug).fetch(
    groq` *[_type == "post" && slug.current == $slug][0]`,
    {
      slug: params.slug,
    }
  );

  console.log(post);

  return { props: { post } };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "test" } }, // See the "paths" section below
    ],
    fallback: true,
  };
}

export default Blog;
