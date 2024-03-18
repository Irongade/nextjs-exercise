import React from "react";
import Flex from "./styles/Flex";
import Image from "next/image";

import likeIcon from "public/assets/icons/like.svg";
import commentIcon from "public/assets/icons/comments.svg";
import repostIcon from "public/assets/icons/repost.svg";

const ICON_HEIGHT = 50;
const ICON_WIDTH = 64;

const BlogIcon = () => {
  return (
    <Flex
      margin="1rem 0 0 0"
      direction="row"
      justify="space-between"
      align="center"
    >
      <Flex direction="row" gap="1rem">
        <Image
          src={likeIcon}
          alt={`Repost right icon`}
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
        />

        <Image
          src={commentIcon}
          alt={`Repost right icon`}
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
        />
      </Flex>
      <Flex>
        <Image
          src={repostIcon}
          alt={`Repost right icon`}
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
        />
      </Flex>
    </Flex>
  );
};

export default BlogIcon;
