import styled from "styled-components";
import UserDetails from "../features/checkout/UserDetails";
import PaymentDetails from "../features/checkout/PaymentDetails";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const StyledSection = styled(Section)`
  background-image: url("background.webp");
  min-height: calc(100vh - 8rem - 10rem);
`;

const Container = styled.div`
  width: 120rem;

  margin: 0 auto;
`;

const Box = styled.div`
  display: flex;
  gap: 3.6rem;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 2.4rem;
`;

export default function CheckOut() {
  return (
    <StyledSection>
      <Container>
        <StyledHeading variation="secondary">Checkout</StyledHeading>
        <Box>
          <UserDetails />
          <PaymentDetails />
        </Box>
      </Container>
    </StyledSection>
  );
}
