"use client";

import { useState } from "react";
import Pagination from "./Pagination";
import PostItem from "./Post";
import Flex from "./styles/Flex";
import Grid from "./styles/Grid";
import { Post } from "src/types/Post";
import { processSlug } from "@/src/util/slugHelper";

type PostListProps = {
  posts: Post[];
  listSize?: number;
  processSlugs?: boolean;
};

const PostLists = ({
  posts,
  listSize = 0,
  processSlugs = true,
}: PostListProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const numberOfItems = posts.length;

  const startIndex = listSize ? (currentPage - 1) * listSize : 0;
  const endIndex = listSize
    ? Math.min(startIndex + listSize, numberOfItems)
    : numberOfItems;

  const numberOfPages = Math.ceil(numberOfItems / listSize);

  const currentPosts = posts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > numberOfPages) {
      return;
    }
    setCurrentPage(page);
  };

  return (
    <Flex margin="1rem auto">
      <Grid>
        {currentPosts?.map((post) => (
          <PostItem
            key={post.slug}
            title={post.heading}
            description={post.summary}
            postLink={processSlugs ? processSlug(post.slug) : post.slug}
            imageUrl={post.hero_image_url}
          />
        ))}
      </Grid>
      <Pagination
        numberOfPages={numberOfPages}
        numberOfItems={numberOfItems}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        listSize={listSize}
      />
    </Flex>
  );
};

export default PostLists;
