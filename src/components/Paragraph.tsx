"use client";

import parse from "html-react-parser";
import Flex from "./styles/Flex";
import styled from "styled-components";
import BlogIcon from "./BlogIcon";
import Text from "./styles/Text";
const ParagraphContainer = styled(Flex)`
  width: 60%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  && p {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const Paragraph = ({ blogText }: { blogText: string }) => {
  return (
    <ParagraphContainer>
      <span>{parse(blogText)}</span>
      <BlogIcon />
    </ParagraphContainer>
  );
};

export default Paragraph;
