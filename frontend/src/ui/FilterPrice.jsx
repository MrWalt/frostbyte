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
`;

export default function FilterPrice() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(
    function () {
      if (minPrice !== "0" && minPrice !== "")
        searchParams.set("minPrice", minPrice);
      if (maxPrice !== "0" && maxPrice !== "")
        searchParams.set("maxPrice", maxPrice);

      if (minPrice === "0" || minPrice === "") searchParams.delete("minPrice");

      if (maxPrice === "0" || maxPrice === "") searchParams.delete("maxPrice");

      return function () {
        setTimeout(() => {
          setSearchParams(searchParams);
        }, 2000);
      };
    },
    [minPrice, maxPrice, searchParams, setSearchParams]
  );

  return (
    <PriceFilter>
      <PriceInput
        type="text"
        placeholder="$0"
        value={minPrice}
        onChange={(e) => {
          if (isNaN(e.target.value)) return;
          setMinPrice(e.target.value);
        }}
      />
      <span>&mdash;</span>
      <PriceInput
        type="text"
        placeholder="$20000"
        value={maxPrice}
        onChange={(e) => {
          if (isNaN(e.target.value)) return;
          setMaxPrice(e.target.value);
        }}
      />
    </PriceFilter>
  );
}
