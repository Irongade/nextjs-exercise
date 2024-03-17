import Link from "next/link";
import { Container } from "../components/styles/Container";
import Flex from "../components/styles/Flex";
import Text from "../components/styles/Text";

export const metadata = {
  title: "Peanut Exercise",
};

export default function Page() {
  return (
    <Container>
      <Flex direction="column" margin="auto auto" gap="3rem" justify="center">
        <Text renderAs="h1">Welcome to the NextJS Peanut Exercise 👋🏼</Text>
        <Link
          style={{
            color: "var(--color-font-secondary)",
            textDecoration: "1px underline solid var(--color-font-secondary)",
            textAlign: "center",
          }}
          href={"/blog"}
        >
          Click here to navigate to the Blog page
        </Link>
      </Flex>
    </Container>
  );
}
