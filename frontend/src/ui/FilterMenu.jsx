import styled from "styled-components";
import FilterOption from "./FilterOption";

import { HiOutlineFunnel } from "react-icons/hi2";
import { useProducts } from "../features/product/useProducts";
import Button from "./Button";
import { useSearchParams } from "react-router-dom";

const Box = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  align-self: start;

  font-size: 1.6rem;
  color: var(--color-grey-0);

  border: 1px solid var(--color-grey-800);
  padding: 1.6rem 2.4rem;
`;

const StyledSpan = styled.span`
  font-size: 2rem;
  margin-bottom: 1.8rem;

  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;

  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-800);

  &:hover {
    background-color: var(--color-grey-800);
  }
`;

export default function FilterMenu() {
  const { brands, isLoading } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClearFilters() {
    if (!searchParams.get("manufacturer")) return;

    searchParams.delete("manufacturer");
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return (
    <Box>
      <StyledSpan>
        <HiOutlineFunnel />
        Filter
      </StyledSpan>

      <StyledButton variation="medium" onClick={handleClearFilters}>
        Clear
      </StyledButton>

      <FilterOption
        type="Brand"
        options={isLoading ? [] : brands}
        key="Brand"
        filter="manufacturer"
      />

      {/* <FilterOption type="Type" options={["Overclocked", "Stock"]} key="Type" />
      <FilterOption
        type="Availability"
        options={["In Stock", "Out of Stock"]}
        key="Availability"
      /> */}
      {/* <Button>Apply</Button> */}
    </Box>
  );
}
