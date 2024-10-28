import styled from "styled-components";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 0.8rem;
`;

const StyledSpan = styled.span`
  font-size: 1.6rem;
  text-transform: capitalize;
  text-align: center;

  display: inline-block;

  width: 100%;
  margin-top: 2.4rem;
`;

const ClearCartText = styled.span`
  color: var(--color-grey-0);
  font-size: 1.4rem;

  transition: var(--animation-fast);

  cursor: pointer;

  &:hover {
    color: var(--color-brand-500);
  }
`;

export default function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector(getCart);

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

          <ClearCartText onClick={() => dispatch(clearCart())}>
            Clear Cart
          </ClearCartText>
        </>
      )}
    </Container>
  );
}
