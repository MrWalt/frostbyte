import styled from "styled-components";
// import products from "../data/testProductData";
import Card from "./Card";
import { useProducts } from "./useProducts";

const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;

  gap: 2.4rem;
  row-gap: 2.4rem;
`;

export default function ProductsGrid({ category }) {
  const { isLoading, products } = useProducts();

  if (isLoading) return <p>Is Loading</p>;

  return (
    <CardBox>
      {category
        ? products.map((item) => {
            return item.category === category ? (
              <Card
                title={item.title}
                price={item.priceUSD}
                key={item.id}
                id={item.id}
              />
            ) : null;
          })
        : products.map((item) => (
            <Card
              title={item.title}
              price={item.priceUSD}
              key={item.id}
              id={item.id}
            />
          ))}
    </CardBox>
  );
}