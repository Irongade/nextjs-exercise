"use client";
import React from "react";
import AritcleInfo from "./AritcleInfo";
import Paragraph from "./Paragraph";
import SocialMediaLinks from "./SocialMediaLinks";
import Flex from "./styles/Flex";
import styled from "styled-components";

type BlogContentProps = {
  content: string;
};

const BlogContentContainer = styled(Flex)`
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin: 3rem 2rem;
    &&& :nth-child(1) {
      order: 1;
    }
    &&& :nth-child(2) {
      order: 3;
    }
    &&& :nth-child(3) {
      order: 2;
    }
  }
`;

const BlogContentSection = ({ content }: BlogContentProps) => {
  return (
    <BlogContentContainer
      direction="row"
      justify="space-between"
      gap="1rem"
      margin="3rem auto"
    >
      <SocialMediaLinks />
      <Paragraph blogText={content} />
      <AritcleInfo />
    </BlogContentContainer>
  );
};

export default BlogContentSection;
