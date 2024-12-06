import styled from "styled-components";
import { HiOutlineFunnel } from "react-icons/hi2";
import { useProducts } from "../features/products/useProducts";
import { useSearchParams } from "react-router-dom";

import FilterOption from "./FilterOption";
import Button from "./Button";
import Filter from "./Filter";

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
  margin-bottom: 2.4rem;

  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;

  padding: 0.6rem 1rem;
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
      <Filter option="true" filter="stock" label="In Stock Only" />

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
