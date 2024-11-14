import styled from "styled-components";
// import products from "../data/testProductData";
import Card from "./Card";
import { useProducts } from "./useProducts";
import Loader from "../../ui/Loader";

const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: min-content;

  grid-column: 2 / -1;

  gap: 2.4rem;
  row-gap: 2.4rem;
`;

export default function ProductsGrid() {
  const { isLoading, products } = useProducts();

  if (isLoading) return <Loader />;

  return (
    <CardBox>
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
