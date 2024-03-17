import React from "react";
import Flex from "./styles/Flex";
import Image from "next/image";

import likeIcon from "public/assets/icons/like.svg";
import commentIcon from "public/assets/icons/comments.svg";
import repostIcon from "public/assets/icons/repost.svg";

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
          width={64}
          height={50}
        />

        <Image
          src={commentIcon}
          alt={`Repost right icon`}
          width={64}
          height={50}
        />
      </Flex>
      <Flex>
        <Image
          src={repostIcon}
          alt={`Repost right icon`}
          width={64}
          height={50}
        />
      </Flex>
    </Flex>
  );
};

export default BlogIcon;
