import styled from "styled-components";
import CartItem from "./CartItem";

const Container = styled.div`
  padding: 1.2rem;
`;

export default function Cart() {
  return (
    <Container>
      <CartItem />
    </Container>
  );
}
