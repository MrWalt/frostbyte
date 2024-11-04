import styled from "styled-components";
import Button from "../../ui/Button";
import Price from "../../ui/Price";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Box = styled.div`
  background-color: var(--color-grey-transparent);
  backdrop-filter: blur(4px);

  border: 1px solid var(--color-grey-800);

  align-self: start;

  padding: 1.2rem 1.2rem;
`;

const StyledTitle = styled.h3`
  font-size: 2rem;
  font-weight: 500;

  margin-left: 1.2rem;
`;

const InfoBox = styled.div`
  padding: 1.2rem 1.8rem;
`;

const PriceBox = styled.div`
  margin-top: 0.4rem;

  gap: 0.6rem;
  display: flex;
  align-items: center;
`;

const ItemCount = styled.span`
  font-size: 1.8rem;
  color: var(--color-brand-500);
`;

const Disclaimer = styled.span`
  display: inline-block;
  font-size: 1.4rem;
  color: var(--color-grey-500);

  margin-top: 1.6rem;
`;

export default function SummaryDetails() {
  const { cart } = useCart();
  const itemsInCart = cart.reduce((acc, cur) => (acc += cur.quantity), 0);
  const totalPrice = cart
    .reduce((acc, cur) => (acc += cur.price * cur.quantity), 0)
    .toFixed(2);

  return (
    <Box>
      <StyledTitle>Cart Details</StyledTitle>
      <InfoBox>
        <div>
          <ItemCount>{itemsInCart} </ItemCount>
          <span>item{itemsInCart > 1 ? "s" : ""} in cart</span>
        </div>
        <PriceBox>
          <Price price={String(totalPrice)} size="medium" />
          <span>in total</span>
        </PriceBox>
        <Disclaimer>Shipping cost calculated at checkout</Disclaimer>
      </InfoBox>
      <Link to="/checkout">
        <Button>Continue to payment</Button>
      </Link>
    </Box>
  );
}
