import styled from "styled-components";
// import products from "../data/testProductData";
import Card from "./Card";
import { useEffect, useState } from "react";

const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;

  gap: 2.4rem;
  row-gap: 2.4rem;
`;

export default function ProductsGrid({ category }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    setIsLoading(true);
    async function getData() {
      const res = await fetch("http://localhost:8000/api/v1/products");

      const data = await res.json();
      // console.log(data.data.products);
      setProducts(data.data.products);
      setIsLoading(false);
    }

    getData();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <CardBox>
      {category
        ? products.map((item) => {
            return item.category === category ? (
              <Card
                title={item.name}
                price={item.priceUSD}
                key={item._id}
                id={item._id}
              />
            ) : null;
          })
        : products.map((item) => (
            <Card
              title={item.name}
              price={item.priceUSD}
              key={item._id}
              id={item._id}
            />
          ))}
    </CardBox>
  );
}
