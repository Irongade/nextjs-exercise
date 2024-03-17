"use client";
import React from "react";
import { Container } from "src/components/styles/Container";
import Text from "src/components/styles/Text";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <Container>
      <Text>{error.message}</Text>
      <button onClick={reset}>Oops! could not find blog post</button>
    </Container>
  );
};

export default ErrorBoundary;
