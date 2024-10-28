import styled from "styled-components";

import { useParams } from "react-router-dom";

import Section from "../ui/Section";
import FilterMenu from "../ui/FilterMenu";
import Heading from "../ui/Heading";
import ProductsGrid from "../ui/ProductsGrid";
import formatCategoryTitle from "../utils/formatCategoryTitle";

const Container = styled.div`
  margin: 0 auto;
  width: 140rem;

  display: grid;
  grid-template-columns: 1fr 4fr;

  gap: 2rem;
  row-gap: 3.6rem;
`;

const StyledHeading = styled(Heading)`
  grid-column: 2 / -1;
  justify-self: start;
`;

export default function Products() {
  const params = useParams();
  const category = formatCategoryTitle(params?.category ?? "");
  return (
    <Section>
      <Container>
        <StyledHeading variation="secondary">
          {params?.category ? category : "All Products"}
        </StyledHeading>
        <FilterMenu />
        <ProductsGrid category={params?.category ? params.category : null} />
      </Container>
    </Section>
  );
}