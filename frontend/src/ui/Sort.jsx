import { useEffect, useState } from "react";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  border: 1px solid var(--color-grey-800);
  padding: 1.2rem 2.4rem;
  padding-right: 1.2rem;

  font-size: 2rem;
  color: var(--color-grey-0);
  display: flex;
  align-items: center;
  gap: 0.4rem;

  background-color: var(--color-grey-900);
`;

const StyledSelect = styled.select`
  margin-left: auto;

  font-family: inherit;
  letter-spacing: -0.4px;
  text-transform: uppercase;
  background-color: transparent;
  color: inherit;
  border: 1px solid var(--color-grey-800);
  padding: 0.8rem 1.2rem;
  padding-right: 0;

  transition: var(--animation-medium);

  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-800);
  }

  option,
  optgroup {
    background-color: var(--color-grey-800);
  }

  optgroup {
    font-weight: 500;
  }
`;

export default function Sort() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState(
    searchParams.get("sort") || "-dateAdded"
  );

  useEffect(
    function () {
      if (!searchParams.get("page")) searchParams.set("page", 1);

      searchParams.set("sort", sortBy);
      setSearchParams(searchParams);
    },

    // Only sortBy in dependency array as adding the rest without reason causes
    // unnecessary rerenders
    // eslint-disable-next-line
    [sortBy]
  );

  return (
    <Box>
      <HiOutlineSquares2X2 />
      <span>Sort</span>
      <StyledSelect value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <optgroup label="Price">
          <option value={"price"}>Ascending</option>
          <option value={"-price"}>Descending</option>
        </optgroup>
        <optgroup label="Date">
          <option value={"dateAdded"}>Oldest First</option>
          <option value={"-dateAdded"}>Newest First</option>
        </optgroup>
      </StyledSelect>
    </Box>
  );
}
