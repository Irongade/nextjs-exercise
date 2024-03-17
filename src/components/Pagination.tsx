import styled from "styled-components";
import Flex from "./styles/Flex";
import Text from "./styles/Text";

import chevronRight from "public/assets/icons/chevronRight.svg";
import chevronLeft from "public/assets/icons/chevronLeft.svg";
import Image from "next/image";

const List = styled.ul``;

type PaginationProps = {
  numberOfItems: number;
  numberOfPages: number;
  currentPage: number;
  listSize: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  numberOfItems,
  numberOfPages,
  currentPage,
  onPageChange,
  listSize,
}: PaginationProps) => {
  if (listSize === 0) {
    return null;
  }

  return (
    <Flex margin="2rem auto" direction="row" align="center">
      <Image
        src={chevronLeft}
        alt={`Chevron left icon`}
        width={44}
        height={44}
        onClick={() => onPageChange(currentPage - 1)}
      />
      <Flex margin="0 1rem">
        <Text renderAs="p"> {`${currentPage} of ${numberOfPages}`}</Text>
      </Flex>
      <Image
        src={chevronRight}
        alt={`Chevron right icon`}
        width={44}
        height={44}
        onClick={() => onPageChange(currentPage + 1)}
      />
    </Flex>
  );
};

export default Pagination;
