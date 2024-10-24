import { useSelector } from "react-redux";
import styled from "styled-components";
import { getCart } from "./cartSlice";
import SummaryItem from "./SummaryItem";

const Container = styled.div`
  border: 1px solid var(--color-grey-800);

  background-color: var(--color-grey-transparent);
  backdrop-filter: blur(4px);
`;

export default function SummaryList() {
  const cart = useSelector(getCart);

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
