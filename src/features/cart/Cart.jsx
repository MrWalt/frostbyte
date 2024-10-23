import styled from "styled-components";
import CartItem from "./CartItem";
import { useCart } from "./CartContext";

const Container = styled.div`
  padding: 1rem;
`;

const StyledSpan = styled.span`
  font-size: 1.6rem;
  text-transform: capitalize;
  text-align: center;

  display: inline-block;

  width: 100%;
  margin-top: 2.4rem;
`;

export default function Cart() {
  const { cart } = useCart();
  return (
    <Container>
      {!cart?.length && <StyledSpan>Your cart is empty</StyledSpan>}
      {cart.map((item) => (
        <CartItem
          title={item.title}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </Container>
  );
}
