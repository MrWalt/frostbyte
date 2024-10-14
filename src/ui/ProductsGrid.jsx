import styled from "styled-components";
import products from "../data/testProductData";
import Card from "./Card";

const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;

  gap: 0.8rem;
  row-gap: 2.4rem;
`;

export default function ProductsGrid({ category }) {
  return (
    <CardBox>
      {category
        ? products.map((item) => {
            return item.category === category ? (
              <Card title={item.title} price={item.price} key={item.title} />
            ) : null;
          })
        : products.map((item) => (
            <Card title={item.title} price={item.price} key={item.title} />
          ))}
    </CardBox>
  );
}
