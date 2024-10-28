import styled from "styled-components";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import { getTotalItemsInCart, getTotalPrice } from "./cartSlice";
import Price from "../../ui/Price";
import { Link } from "react-router-dom";

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
  padding: 1.8rem;
`;

const PriceBox = styled.div`
  margin-top: 0.4rem;

  gap: 0.6rem;
  display: flex;
  align-items: center;

  margin-bottom: 1.2rem;
`;

const ItemCount = styled.span`
  font-size: 1.8rem;
  color: var(--color-brand-500);
`;

export default function SummaryDetails() {
  const totalItems = useSelector(getTotalItemsInCart);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <Box>
      <StyledTitle>Cart Details</StyledTitle>
      <InfoBox>
        <div>
          <ItemCount>{totalItems} </ItemCount>
          <span>item{totalItems > 1 ? "s" : ""} in cart</span>
        </div>
        <PriceBox>
          <Price price={String(totalPrice)} size="medium" />

          <span>in total</span>
        </PriceBox>
      </InfoBox>
      <Link to="/checkout">
        <Button>Continue to payment</Button>
      </Link>
    </Box>
  );
}