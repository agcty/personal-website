import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import { NextSeo } from "next-seo";
import { Params } from "next/dist/server/router";

import MDXComponents from "@components/MDXComponents";
import Navbar from "@components/Navbar";
import useScroll from "@hooks/useScroll";
import { allPosts, Post } from "contentlayer/generated";

export async function getStaticPaths() {
  const paths: string[] = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: Params }) {
  const post: Post = allPosts.find(
    (post: Post) => post._raw.flattenedPath === params.slug
  );

  return {
    props: {
      post,
    },
  };
}

const PostLayout = ({ post }: { post: Post }) => {
  const Component = useMDXComponent(post.body.code);

  const { scrollY } = useScroll();
  return (
    <div className="dark:bg-dark-1100">
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
          url: `https://gogl.io/${post.url}`,
          description: "Blog post",
          title: `${post.title} | gogl.io 👨🏻‍💻`,
          locale: "en_EN",
          site_name: "gogl.io",
          //   images: [
          //     {
          //       url: post?.og_image ?? "",
          //       alt: post?.og_description ?? "",
          //     },
          //   ],
        }}
      />

      <Navbar scroll={scrollY > 35} />

      <article className="prose relative mx-auto px-7 py-8 dark:prose-dark sm:py-12 sm:px-0">
        <div>
          <h1>{post.title}</h1>
          <time dateTime={post.date}>
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>

        {/* <div className="mb-5 mt-3 flex flex-wrap gap-2 pb-2">
          {post.tags.map((tag) => (
            <ListItem.Tag
              key={tag}
              color={tags[tag as keyof typeof tags]}
              className={`rounded px-2.5 py-1 text-center text-sm font-semibold transition focus:outline-none sm:py-1`}
            >
              {tag}
            </ListItem.Tag>
          ))}
        </div> */}

        <Component components={{ ...MDXComponents }} />
      </article>
    </div>
  );
};

export default PostLayout;
