import styled from "styled-components";
import Background from "../ui/Background";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { Link, useSearchParams } from "react-router-dom";

const Container = styled.div`
  max-width: 90rem;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledHeading = styled(Heading)`
  font-weight: 300;
  letter-spacing: 2px;
  color: var(--color-brand-100);
`;

const StyledText = styled.p`
  font-size: 1.6rem;
  color: var(--color-brand-200);
`;

const StyledButton = styled(Button)`
  background-color: transparent;
  max-width: 26rem;
  margin-top: 3.2rem;

  &:hover {
    background-color: var(--color-brand-500);
  }
`;

export default function ThankYou() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("id");
  return (
    <Section>
      <Background>
        <Container>
          <StyledHeading $variation="primary">
            Your purchase was successful!
          </StyledHeading>
          <StyledText>Thank you for your trust in us!</StyledText>
          <Link to={`/order/${orderId}`}>
            <StyledButton>View your Order</StyledButton>
          </Link>
        </Container>
      </Background>
    </Section>
  );
}
