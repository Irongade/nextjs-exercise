"use client";
import xIcon from "public/assets/icons/x.svg";
import facebookIcon from "public/assets/icons/facebook.svg";
import shareIcon from "public/assets/icons/share.svg";
import Flex from "./styles/Flex";
import Image from "next/image";
import styled from "styled-components";

const SocialMediaLinksContainer = styled(Flex)`
  @media only screen and (max-width: 600px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const SocialMediaLinks = () => {
  const links = [
    {
      name: "facebook",
      src: facebookIcon,
    },
    {
      name: "x",
      src: xIcon,
    },
    {
      name: "share",
      src: shareIcon,
    },
  ];
  return (
    <SocialMediaLinksContainer gap="1rem">
      {links.map((link) => (
        <Flex key={link.name}>
          <Image
            src={link.src}
            alt={`${link.name} icon`}
            width={50}
            height={50}
          />
        </Flex>
      ))}
    </SocialMediaLinksContainer>
  );
};

export default SocialMediaLinks;
