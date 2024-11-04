import styled from "styled-components";

import SummaryItem from "./SummaryItem";
import { useCart } from "./CartContext";

const Container = styled.div`
  border: 1px solid var(--color-grey-800);

  background-color: var(--color-grey-transparent);
  backdrop-filter: blur(4px);

  align-self: start;
`;

export default function SummaryList() {
  const { cart } = useCart();

  return (
    <Container>
      {cart.map((item) => (
        <SummaryItem
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          id={item.id}
          key={item.id}
        />
      ))}
    </Container>
  );
}
