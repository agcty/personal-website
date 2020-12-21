import { groq } from "next-sanity";

export const queryAllPostPaths = groq`*[_type == "post" && slug.current != ''] {
    'slug': slug.current
  }`;

export const queryAllPost = groq`*[_type == "post" && slug.current != '']`;

export const queryPost = groq` *[_type == "post" && slug.current == $slug][0]`;
