import { notFound } from "next/navigation";
import React from "react";
import PostLists from "@/src/components/PostList";
import { Container } from "@/src/components/styles/Container";
import { PostResponse } from "@/src/types/Post";
import { BLOG_URL } from "@/src/constants";

const Blogs = async () => {
  const response = await fetch(BLOG_URL);
  if (!response.ok) {
    return notFound();
  }
  const posts: PostResponse | null = await response.json();

  if (!posts) return notFound();

  return (
    <Container>
      <PostLists posts={posts.pages} processSlugs={false} />
    </Container>
  );
};

export default Blogs;
