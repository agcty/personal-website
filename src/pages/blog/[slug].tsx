import { queryAllPost, queryAllPostPaths, queryPost } from "@api/sanityAPI";
import Navbar from "@components/Navbar";
import graphClient from "graphql/urqlClient";
import { InferGetStaticPropsType } from "next";
import { PortableText, urlFor } from "sanity";
import { gql } from "urql";

interface Post {
  title: string;
  bodyRaw: any;
  publishedAt: string;
}

function Blog({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="min-h-screen bg-beige-10">
      <Navbar borderShown />
      <main className="max-w-screen-md px-4 py-8 mx-auto sm:py-12 sm:px-0">
        <h1 className="text-3xl font-bold leading-none tracking-tight text-dark-900 sm:text-4xl sm:leading-none md:text-4xl">
          {post.title}
        </h1>
        <time>{post.publishedAt} </time>

        {/* <p>{JSON.stringify(post?.bodyRaw)}</p> */}

        <PortableText blocks={post.bodyRaw} className="py-8 prose" />
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const getPost = gql`
    query GetPost($slug: String) {
      allPost(where: { slug: { current: { eq: $slug } } }) {
        title
        bodyRaw
        publishedAt
        slug {
          current
        }
      }
    }
  `;

  const { data } = await graphClient
    .query(getPost, { slug: params.slug })
    .toPromise();

  const post: Post = data.allPost[0];
  return { props: { post } };
}

export async function getStaticPaths() {
  const getPostPaths = gql`
    query GetPostPaths {
      allPost {
        slug {
          current
        }
      }
    }
  `;

  const {
    data,
  }: {
    data?: { allPost: { slug: { current: string } }[] };
  } = await graphClient.query(getPostPaths).toPromise();

  const paths = data.allPost.map(({ slug: { current } }) => ({
    params: { slug: current },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default Blog;
