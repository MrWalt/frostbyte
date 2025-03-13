import { useState } from "react";
import { HiOutlineArrowRight, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import styled from "styled-components";

const Box = styled.div`
  border: 1px solid var(--color-grey-800);
  background-color: var(--color-grey-900);

  font-size: 2rem;

  padding: 1.2rem 2.4rem;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    color: var(--color-grey-0);

    flex-shrink: 0;
  }

  .btn-search {
    cursor: pointer;
    transition: var(--animation-fast);
    height: 100%;
    width: 100%;

    &:hover {
      transform: scale(1.1);
      color: var(--color-brand-500);
    }
  }

  button {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.8rem 1.2rem 0.8rem 0;
  color: var(--color-grey-0);
  font-size: 1.6rem;

  &::placeholder {
    font-family: inherit;
    color: var(--color-grey-500);
    font-size: 1.6rem;
  }
`;

export default function Search() {
  const [query, setQuery] = useState("");

  function handleSearch() {
    console.log("User searched for " + query);
  }

  return (
    <Box>
      <HiOutlineMagnifyingGlass />
      <StyledInput
        placeholder="Search"
        spellCheck="false"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>
        <HiOutlineArrowRight className="btn-search" />
      </button>
    </Box>
  );
}
