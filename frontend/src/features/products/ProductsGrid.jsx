import styled from "styled-components";
// import products from "../data/testProductData";
import Card from "./Card";
import { useProducts } from "./useProducts";
import Loader from "../../ui/Loader";
import { PAGE_SIZE } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: min-content;

  grid-column: 2 / -1;

  gap: 2.4rem;
  row-gap: 2.4rem;

  position: relative;
`;

const ItemCount = styled.span`
  font-size: 1.4rem;
  color: var(--color-brand-500);
`;

const StyledSpan = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-0);

  position: absolute;
  top: -3.2rem;
  right: 0;
`;

export default function ProductsGrid() {
  const { isLoading, products, count } = useProducts();
  const [searchParams] = useSearchParams();

  const currentPage = searchParams.get("page") || 1;

  if (isLoading) return <Loader />;

  return (
    <CardBox>
      <StyledSpan>
        Showing <ItemCount>{PAGE_SIZE * (currentPage - 1) + 1} </ItemCount>
        &mdash;
        <ItemCount>
          {" "}
          {PAGE_SIZE * currentPage > count
            ? count
            : PAGE_SIZE * currentPage}{" "}
        </ItemCount>
        out of
        <ItemCount> {count} </ItemCount>
        products
      </StyledSpan>
      {products.map((item) => (
        <Card
          title={item.title}
          price={item.price.USD}
          shortTitle={item.shortTitle}
          key={item.id}
          id={item.id}
          stock={item.stock}
          discount={item.discount}
          discountedPrice={item.discountedPrice?.USD}
        />
      ))}
    </CardBox>
  );
}
