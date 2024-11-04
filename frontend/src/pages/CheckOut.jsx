import styled from "styled-components";
import UserDetails from "../features/checkout/UserDetails";
import PaymentDetails from "../features/checkout/PaymentDetails";
import Heading from "../ui/Heading";

const Container = styled.div`
  width: 120rem;

  margin: 4.8rem auto;
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
    <Container>
      <StyledHeading variation="secondary">Checkout</StyledHeading>
      <Box>
        <UserDetails />
        <PaymentDetails />
      </Box>
    </Container>
  );
}
