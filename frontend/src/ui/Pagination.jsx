import { useSearchParams } from "react-router-dom";
import Button from "./Button";
import styled from "styled-components";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { PAGE_SIZE } from "../utils/constants";

const Box = styled.div`
  grid-column: 2 / -1;

  display: flex;
  justify-self: center;
  align-items: center;

  gap: 0.8rem;

  svg {
    font-size: 3rem;
  }
`;

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CurrentPage = styled.span`
  font-size: 2rem;
  color: var(--color-brand-500);
`;

const Page = styled.span`
  font-size: 1.6rem;
  color: var(--color-grey-0);

  cursor: pointer;

  transition: var(--animation-fast);

  &:hover {
    color: var(--color-brand-500);
  }
`;

export default function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function previousPage() {
    const previous = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", previous);
    setSearchParams(searchParams);
  }

  function firstPage() {
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  function lastPage() {
    searchParams.set("page", pageCount);
    setSearchParams(searchParams);
  }

  if (pageCount === 1 || pageCount === 0) return null;

  return (
    <Box>
      <StyledButton $variation="mediumNoBox" onClick={previousPage}>
        <HiChevronLeft />
      </StyledButton>
      {/* First Page */}
      {currentPage !== 1 && <Page onClick={firstPage}>1</Page>}
      {/* Previous Page */}
      {currentPage !== 1 && currentPage - 1 !== 1 && (
        <Page onClick={previousPage}>
          {currentPage - 1 !== 2 && "..."}
          {currentPage - 1}
        </Page>
      )}
      {/* Current Page */}
      <CurrentPage>{currentPage}</CurrentPage>
      {/* Next Page */}
      {currentPage !== pageCount && currentPage + 1 !== pageCount && (
        <Page onClick={nextPage}>
          {currentPage + 1}
          {currentPage + 1 !== pageCount - 1 && "..."}
        </Page>
      )}
      {/* Last Page */}
      {currentPage !== pageCount && <Page onClick={lastPage}>{pageCount}</Page>}
      <StyledButton $variation="mediumNoBox" onClick={nextPage}>
        <HiChevronRight />
      </StyledButton>
    </Box>
  );
}
