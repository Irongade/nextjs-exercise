import { notFound } from "next/navigation";
import React from "react";
import PostLists from "src/components/PostList";
import { Container } from "src/components/styles/Container";
import { PostResponse } from "src/types/Post";
import { processSlug } from "src/util/slugHelper";

const Blogs = async () => {
  const response = await fetch("http://localhost:3000/api/web/posts");
  const posts: PostResponse | null = await response.json();

  if (!posts) return notFound();

  return (
    <Container>
      <PostLists posts={posts.pages} processSlugs={false} />
    </Container>
  );
};

export default Blogs;
