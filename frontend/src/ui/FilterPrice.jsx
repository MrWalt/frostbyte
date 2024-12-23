import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const PriceFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  padding: 0 0.8rem;

  margin-bottom: 2.4rem;
`;

const PriceInput = styled.input`
  padding: 0.8rem 0.8rem;
  background-color: var(--color-grey-0);

  font-size: 1.8rem;
  text-align: center;

  width: 100%;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default function FilterPrice() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");

  useEffect(
    function () {
      if (minPrice) searchParams.set("minPrice", minPrice);
      if (maxPrice && maxPrice > minPrice)
        searchParams.set("maxPrice", maxPrice);

      if (!minPrice) searchParams.delete("minPrice");
      if (!maxPrice) searchParams.delete("maxPrice");

      setSearchParams(searchParams);
    },
    [minPrice, maxPrice]
  );

  return (
    <PriceFilter>
      <PriceInput
        type="number"
        placeholder="$0"
        value={minPrice}
        onChange={(e) => {
          if (Number(e.target.value) === 0 || e.target.value < 0) {
            setMinPrice("");
            return;
          }
          setMinPrice(Number(e.target.value));
        }}
      />
      <span>&mdash;</span>
      <PriceInput
        type="number"
        placeholder="$20000"
        value={maxPrice}
        onChange={(e) => {
          if (Number(e.target.value) === 0) {
            setMaxPrice("");
            return;
          }
          setMaxPrice(Number(e.target.value));
        }}
      />
    </PriceFilter>
  );
}
