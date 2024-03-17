"use client";

import Image from "next/image";
import Flex from "./styles/Flex";
import Text from "./styles/Text";
import Link from "next/link";
import styled from "styled-components";

type PostProps = {
  postLink: string;
  title: string;
  description: string;
  imageUrl?: string;
};

const ImageContainer = styled(Flex)`
  width: 308px;
  height: 215px;
`;

const Post = ({ title, description, imageUrl = "", postLink }: PostProps) => {
  return (
    <Link href={postLink}>
      <Flex>
        <ImageContainer>
          <Image src={imageUrl} fill alt="Picture of the author" />
        </ImageContainer>
        <Flex margin="1rem 0 0 0 " gap="0.5rem">
          <Text renderAs="p2">{title}</Text>
          <Text renderAs="p3">{description}</Text>
        </Flex>
      </Flex>
    </Link>
  );
};

export default Post;
