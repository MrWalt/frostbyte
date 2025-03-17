import styled from "styled-components";

import { useParams, useSearchParams } from "react-router-dom";

import Section from "../ui/Section";
import FilterMenu from "../ui/FilterMenu";
import Heading from "../ui/Heading";
import ProductsGrid from "../features/products/ProductsGrid";
import { formatCategoryTitle } from "../utils/helpers";
import Pagination from "../ui/Pagination";
import { useProducts } from "../features/products/useProducts";
import Sort from "../ui/Sort";
import { useUser } from "../features/authentication/UserContext";
import Button from "../ui/Button";
import { useModal } from "../contexts/ModalContext";
import Search from "../ui/Search";
import Background from "../ui/Background";

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
  align-self: start;

  position: sticky;
  top: 100px;
  gap: 1.2rem;
`;

const StyledButton = styled(Button)`
  background-color: transparent;
`;

const SearchText = styled.span`
  color: var(--color-brand-500);
`;

export default function Products() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const category = formatCategoryTitle(params?.category ?? "");
  const { count } = useProducts();
  const { isLoading } = useProducts();
  const { user } = useUser();
  const { handleSetToggledModal } = useModal();
  const searchQuery = searchParams.get("search") || null;

  return (
    <Section>
      <Background>
        <Container>
          <StyledHeading $variation="secondary">
            {params?.category ? category : ""}
            {!params?.category && !searchQuery ? "All Products" : ""}
            {searchQuery ? `Search for ` : ""}
            {searchQuery ? <SearchText>{searchQuery}</SearchText> : ""}
          </StyledHeading>
          <AsideBox>
            <Search />
            <Sort />
            <FilterMenu params={params} />
            {user.role === "admin" && (
              <StyledButton onClick={() => handleSetToggledModal("addProduct")}>
                Add new product
              </StyledButton>
            )}
          </AsideBox>
          <ProductsGrid category={params?.category ? params.category : null} />
          {!isLoading && <Pagination count={count} />}
        </Container>
      </Background>
    </Section>
  );
}
