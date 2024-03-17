"use client";

import styled from "styled-components";

type FlexProps = {
  justify?: string;
  align?: string;
  order?: string;
  direction?: string;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  gap?: string;
  color?: string;
};

type FlexStyleProp = Omit<FlexProps, "children">;

const Flex = styled.div<FlexStyleProp>`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: left;

  ${(props) =>
    props.margin &&
    `
        margin: ${props.margin};
  `}

  ${(props) =>
    props.gap &&
    `
        gap: ${props.gap};
  `}

  ${(props) =>
    props.width &&
    `
        width: ${props.width};
  `}

  ${(props) =>
    props.height &&
    `
        height: ${props.height};
  `}

  ${(props) =>
    props.direction &&
    `
    flex-direction: ${props.direction};
  `}

  ${(props) =>
    props.justify &&
    `
    justify-content: ${props.justify};
  `}

  ${(props) =>
    props.align &&
    `
    align-items: ${props.align};
  `}

  ${(props) =>
    props.color &&
    `
    color: ${props.color};
  `}
`;

export default Flex;
