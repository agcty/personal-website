import ghost from "@services/ghost";

export async function getSinglePost(postSlug: string) {
  const post = await ghost.posts.read({
    slug: postSlug,
    include: ["tags"],
  });

  return post;
}

export async function getPosts() {
  const posts = await ghost.posts.browse({
    limit: "all",
    include: ["tags"],
  });

  return posts;
}
