import styled from "styled-components";
import { HiOutlineFunnel } from "react-icons/hi2";
import { useProducts } from "../features/products/useProducts";
import { useSearchParams } from "react-router-dom";

import FilterOption from "./FilterOption";
import Button from "./Button";
import Filter from "./Filter";
import FilterPrice from "./FilterPrice";

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

const FiltersBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.6rem;
`;

const StyledSpan = styled.span`
  font-size: 2rem;
  margin-bottom: 3.2rem;

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

const SmallText = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-500);

  margin-left: 0.8rem;
  margin-bottom: 0.4rem;
`;

export default function FilterMenu() {
  const { brands, isLoading } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClearFilters() {
    if (searchParams.size < 1) return;

    searchParams.delete("stock");
    searchParams.delete("manufacturer");
    searchParams.delete("minPrice");
    searchParams.delete("maxPrice");

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
      <FilterPrice />

      <FiltersBox>
        <Filter option="true" filter="stock" label="In Stock Only" />

        <FilterOption
          type="Brand"
          options={isLoading ? [] : brands}
          key="Brand"
          filter="manufacturer"
        />
      </FiltersBox>
    </Box>
  );
}
