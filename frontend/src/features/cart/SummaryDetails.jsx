import styled from "styled-components";
import Button from "../../ui/Button";
import Price from "../../ui/Price";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { useUser } from "../authentication/UserContext";

const Box = styled.div`
  background-color: var(--color-grey-transparent);
  backdrop-filter: blur(4px);

  border: 1px solid var(--color-grey-800);

  align-self: start;

  flex-grow: 1;

  padding: 1.2rem;
`;

const StyledTitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;

  margin-left: 1.2rem;
  margin-bottom: 1.6rem;
`;

const InfoBox = styled.div`
  padding: 1.2rem 1.8rem;
`;

const ItemCount = styled.span`
  color: var(--color-brand-500);
`;

const CartInfoBox = styled.div`
  display: flex;
  gap: 0.4rem;

  font-weight: 300;
`;

const Disclaimer = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  letter-spacing: 0px;
  text-transform: uppercase;
`;

const LoginParagraph = styled.p`
  padding: 1.2rem;
  text-align: center;
  font-size: 1.8rem;
  border: 1px solid var(--color-grey-800);
`;

const StyledLink = styled(Link)`
  color: var(--color-brand-500) !important;
  transition: var(--animation-fast);

  &:hover {
    color: var(--color-brand-300) !important;
  }
`;

export default function SummaryDetails() {
  const { itemsInCart, totalCartPrice } = useCart();
  const { user } = useUser();

  return (
    <Box>
      <StyledTitle>Cart Details</StyledTitle>
      <InfoBox>
        <CartInfoBox>
          <Price price={String(totalCartPrice)} size="normal" />
          <span>&mdash;</span>
          <ItemCount>{itemsInCart} </ItemCount>
          <span>Item{itemsInCart > 1 ? "s" : ""}</span>
        </CartInfoBox>
        <Disclaimer>Shipping cost calculated at checkout*</Disclaimer>
      </InfoBox>
      {user?.id ? (
        <Link to="/checkout">
          <Button>Continue to payment</Button>
        </Link>
      ) : (
        <LoginParagraph>
          Please <StyledLink to="/login">login</StyledLink> to continue
        </LoginParagraph>
      )}
    </Box>
  );
}
