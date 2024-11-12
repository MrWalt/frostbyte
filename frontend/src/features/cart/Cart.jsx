import styled from "styled-components";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import Heading from "../../ui/Heading";
import { HiXMark } from "react-icons/hi2";
import { useMenu } from "../../contexts/MenuContext";
import Price from "../../ui/Price";

const Container = styled.div`
  padding: 0.8rem;

  display: flex;
  flex-direction: column;

  height: 100%;
`;

const StyledHeading = styled(Heading)`
  font-weight: 400;

  width: 100%;
  text-align: start;

  position: relative;
`;

const InfoBox = styled.div`
  border: 1px solid var(--color-grey-800);

  padding: 2.4rem;

  display: flex;
  justify-content: start;
  align-items: center;
`;

const ItemCount = styled.span`
  color: var(--color-brand-500);
`;

const Box = styled.div`
  overflow: scroll;

  height: 100%;

  margin: 0.8rem 0;
  border-top: 1px solid var(--color-grey-800);
  border-bottom: 1px solid var(--color-grey-800);

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  color: var(--color-grey-0);

  cursor: pointer;
  font-size: 2.4rem;

  transition: var(--animation-fast);

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }
`;

const CheckOutBox = styled.div`
  text-align: start;
  padding: 1.2rem 0.8rem;
  flex-shrink: 0;

  button {
    margin-top: 1.2rem;
  }

  div {
    margin-left: 1.2rem;
  }
`;

export default function Cart() {
  const { cart, itemsInCart, totalCartPrice } = useCart();
  const { closeMenu } = useMenu();

  return (
    <Container>
      <InfoBox>
        <StyledHeading variation="tertiary">
          {itemsInCart !== 0 ? (
            <>
              Your cart &mdash; <ItemCount>{itemsInCart} </ItemCount>
              {itemsInCart === 1 ? "item" : "items"}
            </>
          ) : (
            <>Your cart is empty</>
          )}
          <StyledButton onClick={closeMenu}>
            <HiXMark />
          </StyledButton>
        </StyledHeading>
      </InfoBox>
      {cart.length !== 0 && (
        <Box>
          {cart.map((item) => (
            <CartItem
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              id={item.id}
              key={item.id}
            />
          ))}
        </Box>
      )}
      {itemsInCart ? (
        <CheckOutBox>
          <Price size="large" price={totalCartPrice} />
          <Link to="/cart-summary">
            <Button>Checkout</Button>
          </Link>
        </CheckOutBox>
      ) : null}
    </Container>
  );
}
