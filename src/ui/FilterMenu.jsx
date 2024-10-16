import styled from "styled-components";
import FilterOption from "./FilterOption";

import { HiOutlineFunnel } from "react-icons/hi2";

const Box = styled.div`
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

export default function FilterMenu() {
  return (
    <Box>
      <StyledSpan>
        <HiOutlineFunnel />
        Filter
      </StyledSpan>
      <FilterOption
        type="Brand"
        options={["AMD", "NVidia", "Intel"]}
        key="Brand"
      />
      <FilterOption type="Type" options={["Overclocked", "Stock"]} key="Type" />
      <FilterOption
        type="Availability"
        options={["In Stock", "Out of Stock"]}
        key="Availability"
      />
    </Box>
  );
}
