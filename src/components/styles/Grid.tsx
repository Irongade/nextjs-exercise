"use client";

import styled from "styled-components";

type GridProps = {
  justify?: string;
  align?: string;
  order?: string;
  direction?: string;
};

const Grid = styled.div<GridProps>`
  display: grid;
  flex-direction: row;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, minmax(0px, 1fr));

  && p {
    text-align: left;
  }

  @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, minmax(0px, 308px));
  }

  @media only screen and (max-width: 757px) {
    grid-template-columns: repeat(1, minmax(0px, 308px));
  }
`;

export default Grid;
