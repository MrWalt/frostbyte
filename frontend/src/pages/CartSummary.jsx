import styled from "styled-components";
import Section from "../ui/Section";
import SummaryList from "../features/cart/SummaryList";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import SummaryDetails from "../features/cart/SummaryDetails";
import { useCart } from "../features/cart/CartContext";

const StyledSection = styled(Section)`
  background-image: url("/background.webp");

  min-height: calc(100vh - 8rem - 10rem);
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  color: var(--color-grey-0);
  font-size: 1.6rem;
`;

const StyledHeading = styled(Heading)`
  grid-column: 1 / -1;
  grid-row: 1 / 2;

  margin-bottom: 3.6rem;
`;

const Box = styled.div`
  display: flex;

  gap: 3.2rem;
`;

const StyledButton = styled(Button)`
  width: 28rem;
`;

const EmptyCartHeading = styled(Heading)`
  padding: 0 2.6rem 1.2rem 2.6rem;
  border-bottom: 1px solid var(--color-grey-800);

  text-transform: uppercase;
  letter-spacing: 0;
`;

const EmptyCartContainer = styled.div`
  max-width: 52rem;
  margin: 0 auto;

  padding: 4.8rem 0;

  border: 1px solid var(--color-grey-800);
  backdrop-filter: blur(12px);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  button {
    padding: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export default function CartSummary() {
  const { itemsInCart } = useCart();

  return (
    <StyledSection>
      {itemsInCart !== 0 ? (
        <Container>
          <StyledHeading $variation="secondary">Cart Summary</StyledHeading>
          <Box>
            <SummaryList />
            <SummaryDetails />
          </Box>
        </Container>
      ) : (
        <EmptyCartContainer>
          <EmptyCartHeading $variation="primary">
            Cart is empty
          </EmptyCartHeading>
          <Link to="/products">
            <StyledButton $variation="medium">Go To Products</StyledButton>
          </Link>
        </EmptyCartContainer>
      )}
    </StyledSection>
  );
}
