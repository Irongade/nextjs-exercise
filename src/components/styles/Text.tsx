"use client";
import styled from "styled-components";

const H1 = styled.h1`
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 3.375rem;
`;

const H2 = styled.h2`
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 2rem;
`;

const H3 = styled.h3`
  font-weight: 700;
  font-size: 1.45rem;
  line-height: 1.66rem;
`;

const P1 = styled.p`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const P2 = styled.p`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
`;

const P3 = styled.p`
  font-weight: 400;
  font-size: 0.83rem;
  line-height: 1.03rem;
`;

type TextProps = {
  children: string | string[] | React.ReactNode;
  renderAs?: "h1" | "h2" | "h3" | "p" | "p2" | "p3";
};

const Text = ({ children, renderAs }: TextProps) => {
  if (renderAs === "h1") return <H1>{children}</H1>;
  if (renderAs === "h2") return <H2>{children}</H2>;
  if (renderAs === "h3") return <H3>{children}</H3>;
  if (renderAs === "p2") return <P2>{children}</P2>;
  if (renderAs === "p3") return <P3>{children}</P3>;

  return <P1>{children}</P1>;
};

export default Text;
