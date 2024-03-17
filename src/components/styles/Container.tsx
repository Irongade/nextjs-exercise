"use client";
import styled from "styled-components";

export const Container = styled.div`
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  jusify-content: center;
  box-sizing: border-box;
  width: 1000px;

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;
