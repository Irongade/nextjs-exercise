"use client";
import React from "react";
import Flex from "./styles/Flex";
import Image from "next/image";
import styled from "styled-components";

type ImageBannerProps = {
  src: string;
};

const ImageBannerContainer = styled(Flex)`
  width: 100%;
  height: 546px;
`;
const ImageBanner = ({ src }: ImageBannerProps) => {
  return (
    <ImageBannerContainer margin="2rem 0">
      <Image src={src} fill objectFit="cover" alt="Hero image" />
    </ImageBannerContainer>
  );
};

export default ImageBanner;
