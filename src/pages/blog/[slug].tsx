import { queryAllPost, queryAllPostPaths, queryPost } from "@api/sanityAPI";
import Navbar from "@components/Navbar";
import client from "graphql/urqlClient";
import { InferGetStaticPropsType } from "next";
import { getClient } from "sanity";
import { gql } from "urql";

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
  const getPost = gql`
    query GetPost($slug: String) {
      allPost(where: { slug: { current: { eq: $slug } } }) {
        title
        slug {
          current
        }
      }
    }
  `;

  const { data } = await client
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
  } = await client.query(getPostPaths).toPromise();

  const paths = data.allPost.map(({ slug: { current } }) => ({
    params: { slug: current },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default Blog;
