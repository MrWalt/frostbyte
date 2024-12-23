import styled from "styled-components";
import Section from "../ui/Section";
import SummaryList from "../features/cart/SummaryList";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { useMoveBack } from "../hooks/useMoveBack";
import { HiArrowLongLeft } from "react-icons/hi2";
import SummaryDetails from "../features/cart/SummaryDetails";
import { useCart } from "../features/cart/CartContext";

const StyledSection = styled(Section)`
  background-image: url("/background.webp");

  min-height: calc(100vh - 8rem - 10rem);
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

const ContinueShoppingButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  margin-top: 1.6rem;
  justify-self: start;

  & svg {
    font-size: 2rem;
  }
`;

const StyledButton = styled(Button)`
  width: 28rem;
`;

export default function CartSummary() {
  const moveBack = useMoveBack();
  const { itemsInCart } = useCart();

  return (
    <StyledSection>
      <Container>
        {itemsInCart !== 0 ? (
          <>
            <StyledHeading variation="secondary">Cart Summary</StyledHeading>
            <SummaryList />
            <SummaryDetails />

            <ContinueShoppingButton variation="medium" onClick={moveBack}>
              <HiArrowLongLeft />
              Continue Shopping
            </ContinueShoppingButton>
          </>
        ) : (
          <>
            <StyledHeading variation="secondary">Cart Is Empty</StyledHeading>
            <Link to="/products">
              <StyledButton variation="medium">Go To Products</StyledButton>
            </Link>
          </>
        )}
      </Container>
    </StyledSection>
  );
}
