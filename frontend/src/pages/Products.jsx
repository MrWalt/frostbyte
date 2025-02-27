import styled from "styled-components";

import { useParams } from "react-router-dom";

import Section from "../ui/Section";
import FilterMenu from "../ui/FilterMenu";
import Heading from "../ui/Heading";
import ProductsGrid from "../features/products/ProductsGrid";
import { formatCategoryTitle } from "../utils/helpers";
import Pagination from "../ui/Pagination";
import { useProducts } from "../features/products/useProducts";
import Sort from "../ui/Sort";

const Container = styled.div`
  margin: 0 auto;
  width: 140rem;

  display: grid;
  grid-template-columns: 1fr 4fr;

  gap: 2rem;
  row-gap: 2.4rem;
`;

const StyledHeading = styled(Heading)`
  grid-column: 2 / -1;
  justify-self: start;
`;

const AsideBox = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.2rem;
`;

export default function Products() {
  const params = useParams();
  const category = formatCategoryTitle(params?.category ?? "");
  const { count } = useProducts();
  const { isLoading } = useProducts();

  return (
    <Section>
      <Container>
        <StyledHeading variation="secondary">
          {params?.category ? category : "All Products"}
        </StyledHeading>
        <AsideBox>
          <Sort />
          <FilterMenu />
        </AsideBox>
        <ProductsGrid category={params?.category ? params.category : null} />
        {!isLoading && <Pagination count={count} />}
      </Container>
    </Section>
  );
}
