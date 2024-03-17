"use client";
import React from "react";
import Flex from "./styles/Flex";
import Text from "./styles/Text";
import styled from "styled-components";
import PostLists from "./PostList";
import { Post } from "src/types/Post";

const ReadMoreSection = styled(Flex)`
  background-color: var(--color-secondary);
`;

const ReadMoreContainer = styled(Flex)`
  width: 1000px;

  @media only screen and (max-width: 1000px) {
    width: 80%;
  }
`;

const ReadMoreHeader = styled(Text)``;

type ReadMoreProps = {
  posts: Post[];
};

const ReadMore = ({ posts }: ReadMoreProps) => {
  return (
    <ReadMoreSection margin="auto auto">
      <ReadMoreContainer
        justify="center"
        align="center"
        margin="3rem auto"
        gap="1rem"
      >
        <Flex margin="1rem 0">
          <ReadMoreHeader renderAs="h2">Read More From Peanut</ReadMoreHeader>
        </Flex>
        <PostLists posts={posts} listSize={3} />
      </ReadMoreContainer>
    </ReadMoreSection>
  );
};

export default ReadMore;
