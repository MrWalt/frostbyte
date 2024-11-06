import styled from "styled-components";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import Heading from "../../ui/Heading";

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

const StyledHeading = styled(Heading)`
  font-weight: 400;
`;

const InfoBox = styled.div`
  border: 1px solid var(--color-grey-800);

  padding: 2.4rem;

  display: flex;
  justify-content: start;
  align-items: center;

  margin-bottom: 0.8rem;
`;

const ItemCount = styled.span`
  color: var(--color-brand-500);
`;

const StyledLink = styled(Link)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export default function Cart() {
  const { cart, clearCart } = useCart();
  const itemsInCart = cart.reduce((acc, cur) => (acc += cur.quantity), 0);
  return (
    <Container>
      <InfoBox>
        <StyledHeading variation="tertiary">
          {cart.length !== 0 ? (
            <>
              {" "}
              Your cart &mdash; <ItemCount>{itemsInCart} </ItemCount>
              items{" "}
            </>
          ) : (
            <>Your cart is empty</>
          )}
        </StyledHeading>
      </InfoBox>
      {cart.length !== 0 && (
        <>
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
