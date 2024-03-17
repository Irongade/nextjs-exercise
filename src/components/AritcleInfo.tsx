"use client";

import React from "react";
import Flex from "./styles/Flex";
import Text from "./styles/Text";

import mainPost from "../../mainPost.json";
import styled from "styled-components";
import Link from "next/link";

const ArticleLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style-position: inside;
  && li {
    color: var(--color-font-secondary);
    font-size: 1rem;
  }
`;

const ArticleLink = styled(Link)`
  text-decoration: underline;
`;

const ArticleInfoContainer = styled(Flex)`
  width: 20%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const AritcleInfo = () => {
  return (
    <ArticleInfoContainer>
      <Flex margin="1rem 0">
        <Text>
          <b>In this article: 📝</b>{" "}
        </Text>
      </Flex>

      <Flex>
        <ArticleLinks>
          {mainPost.related_articles.map((article) => (
            <li key={article.text}>
              <ArticleLink href={"#"}>{article.text}</ArticleLink>
            </li>
          ))}
        </ArticleLinks>
      </Flex>
    </ArticleInfoContainer>
  );
};

export default AritcleInfo;
