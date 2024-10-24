import styled from "styled-components";
import Section from "../ui/Section";
import SummaryList from "../features/cart/SummaryList";
import Heading from "../ui/Heading";
import { useSelector } from "react-redux";
import { getTotalItemsInCart } from "../features/cart/cartSlice";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { useMoveBack } from "../hooks/useMoveBack";
import { HiArrowLongLeft } from "react-icons/hi2";

const StyledSection = styled(Section)`
  background-image: url("./public/background.png");

  min-height: calc(100vh - 6.4rem - 10rem);
`;

const Container = styled.div`
  width: 120rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 3.6rem;

  color: var(--color-grey-0);
  font-size: 1.6rem;
`;

const StyledHeading = styled(Heading)`
  grid-column: 1 / -1;
  grid-row: 1 / 2;

  margin-bottom: 3.6rem;
`;

const Box = styled.div`
  grid-row: 3 / 4;

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.4rem;

  padding: 0.4rem 1.6rem;

  margin-top: 1.2rem;

  justify-self: start;

  border: 1px solid var(--color-grey-800);
  background-color: var(--color-grey-transparent);
  backdrop-filter: blur(4px);

  cursor: pointer;

  &:hover {
    color: var(--color-brand-500);
  }

  svg {
    transition: var(--animation-fast);

    font-size: 2rem;
  }
`;

const StyledButton = styled(Button)`
  width: 28rem;
`;

const BackToShopLink = styled.button`
  font-size: 1.4rem;

  cursor: pointer;

  color: inherit;

  transition: var(--animation-fast);

  &:hover {
    color: var(--color-brand-500);
  }
`;

export default function CartSummary() {
  const cartItems = useSelector(getTotalItemsInCart);
  const moveBack = useMoveBack();
  return (
    <StyledSection>
      <Container>
        {cartItems !== 0 ? (
          <>
            <StyledHeading variation="secondary">Cart Summary</StyledHeading>
            <SummaryList />
            <Box onClick={moveBack}>
              <HiArrowLongLeft />
              <BackToShopLink>Continue Shopping</BackToShopLink>
            </Box>
          </>
        ) : (
          <>
            <StyledHeading variation="secondary">Cart Is Empty</StyledHeading>
            <Link to="/products">
              <StyledButton>Go To Products</StyledButton>
            </Link>
          </>
        )}
      </Container>
    </StyledSection>
  );
}
