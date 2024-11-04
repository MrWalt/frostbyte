import styled from "styled-components";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Container = styled.div`
  padding: 0.8rem;
`;

const StyledSpan = styled.span`
  font-size: 1.6rem;
  text-align: center;
  font-weight: 500;

  display: inline-block;

  width: 100%;
  margin-top: 2.4rem;
`;

const ClearCartButton = styled.button`
  color: var(--color-grey-0);
  font-size: 1.4rem;

  transition: var(--animation-fast);

  cursor: pointer;

  &:hover {
    color: var(--color-brand-500);
  }
`;

export default function Cart() {
  const { cart, clearCart } = useCart();
  return (
    <Container>
      {!cart.length ? (
        <StyledSpan>Your cart is empty</StyledSpan>
      ) : (
        <>
          <Link to="/cart-summary">
            <Button>Check Out</Button>
          </Link>

          {cart.map((item) => (
            <CartItem
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              id={item.id}
              key={item.id}
            />
          ))}

          <ClearCartButton onClick={clearCart}>Clear Cart</ClearCartButton>
        </>
      )}
    </Container>
  );
}
