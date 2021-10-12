import { PostOrPage } from "@tryghost/content-api";
import { format } from "date-fns";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

import { getPosts, getSinglePost } from "@api/ghost";
import ListItem from "@components/List/ListItem";
import Navbar from "@components/Navbar";
import useScroll from "@hooks/useScroll";

interface Post {
  title: string;
  bodyRaw: any;
  publishedAt: string;
}

function Blog({ post }: { post: PostOrPage }) {
  const { scrollY } = useScroll();

  return (
    <div>
      <NextSeo
        title={post.title}
        description={post.title}
        twitter={{
          handle: "@agctyz",
          site: "@agctyz",
          cardType: "summary",
        }}
        openGraph={{
          type: "article",
          url: `https://gogl.io/blog/${post.slug}`,
          description: post?.og_description ?? "",
          title: `${post?.title} | gogl.io 👨🏻‍💻` ?? "",
          locale: "en_EN",
          site_name: "gogl.io",
          images: [
            {
              url: post?.og_image ?? "",
              alt: post?.og_description ?? "",
            },
          ],
        }}
      />
      <Navbar borderShown={scrollY > 35} />

      <article className="px-4 py-8 mx-auto sm:py-12 sm:px-0 prose">
        <h1>{post.title}</h1>

        <time dateTime={post?.published_at ?? ""} className="text-dark-700">
          {format(new Date(post.published_at ?? ""), "PPP")}
        </time>

        <div className="flex flex-wrap pb-2 mt-3 gap-2">
          {post?.tags?.map((tag) => (
            <ListItem.Tag tag={tag} key={tag.name} />
          ))}
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.html ?? "" }} />
      </article>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const post = await getSinglePost(params?.slug as string);

    console.log(post);
    return { props: { post }, revalidate: 60 };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export async function getStaticPaths() {
  const posts = await getPosts();

  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export default Blog;
