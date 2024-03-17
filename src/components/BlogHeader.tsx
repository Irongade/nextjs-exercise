"use client";

import Image from "next/image";
import Breadcrumb from "./Breadcrumb";
import Flex from "./styles/Flex";
import Text from "./styles/Text";
import readingTime from "reading-time";
import { generateDateString } from "../util/dateHelper";
import { Author } from "src/types/Post";
import styled from "styled-components";

type BlogHeaderProps = {
  heading: string;
  author: Author;
  publishedDate: string;
  content: string;
};
const BlogHeaderContainer = styled(Flex)`
  width: 80%;
  @media only screen and (max-width: 400px) {
    width: 90%;
  }
`;

const BlogHeader = ({
  heading,
  author,
  publishedDate,
  content,
}: BlogHeaderProps) => {
  const timeElapsed = generateDateString(publishedDate);
  const timeToRead = readingTime(content).text;

  return (
    <BlogHeaderContainer margin="1rem auto">
      <Breadcrumb paths={["Peanut Blog", "Motherhood"]} />
      <Flex>
        <Text renderAs="h1">{heading}</Text>
      </Flex>
      <Flex direction="row" gap="0.5rem">
        <Flex margin="1rem 0" direction="row" align="flex-end" gap="0.5rem">
          <Image
            src={author.avatar_url}
            style={{ borderRadius: "999px" }}
            width={24}
            height={24}
            alt="Author's image"
          />
          <Text>{author.name} &#x2022;</Text>
        </Flex>
        <Flex justify="center" color="var(--color-font-tetiary)">
          <Text renderAs="p3">{`${timeElapsed}, ${timeToRead}`}</Text>
        </Flex>
      </Flex>
    </BlogHeaderContainer>
  );
};

export default BlogHeader;
