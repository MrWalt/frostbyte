import styled from "styled-components";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Price from "../../ui/Price";
import Input from "../../ui/Input";

const Container = styled.div`
  flex: 1 0 30%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 1.6rem;

  font-size: 1.6rem;
  color: var(--color-grey-0);
  font-weight: 300;

  span {
    display: inline-block;
  }
`;

const Box = styled.div`
  background-color: var(--color-grey-900);
  border: 1px solid var(--color-grey-800);

  padding: 1rem;
`;

const PriceBox = styled.div`
  display: flex;
  gap: 0.4rem;

  * {
    color: var(--color-grey-0) !important;
  }

  &:last-of-type {
    margin-top: 2.4rem;

    * {
      font-size: 2.4rem !important;
      color: var(--color-grey-0) !important;
    }
  }
`;

const StyledHeading = styled(Heading)`
  font-weight: 300;
`;

const TextBox = styled.div`
  margin-top: 2.4rem;
`;

const Shipping = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-400);
`;

const Padding = styled.div`
  padding: 1.2rem;
`;

const CouponBox = styled.div`
  border: 1px solid var(--color-grey-800);
  display: flex;
`;

const Coupon = styled(Input)`
  margin-bottom: 0;
  padding: 1.2rem 2rem;
  font-size: 2rem;
  text-transform: uppercase;
  border: none;
  flex: 1 0;

  &:focus {
    border: none;
  }
`;

const CouponText = styled.label`
  display: inline-block;
  font-size: 1.4rem;
  margin-left: 1.2rem;
  margin-bottom: 0.4rem;
  color: var(--color-grey-400);
`;

const ApplyCouponButton = styled(Button)`
  /* width: 8rem; */
  flex: 0 1;
  font-size: 1.4rem;
  padding: 0 1.8rem;
  border: none;
  border-left: 1px solid var(--color-grey-800);
  text-transform: uppercase;
`;

export default function PaymentDetails({ totalCartPrice }) {
  const shippingPrice = 7.82;
  const totalPrice = totalCartPrice + shippingPrice;
  return (
    <Container>
      <Box>
        <Padding>
          <StyledHeading $variation="tertiary">Payment Details</StyledHeading>
          <TextBox>
            <PriceBox>
              <Price price={totalCartPrice} $size="normal"></Price>
              <span> with all taxes</span>
            </PriceBox>
            <Shipping>+ {shippingPrice}€ shipping</Shipping>
            <PriceBox>
              <span>=</span>
              <Price $size="normal" price={totalPrice}></Price>
            </PriceBox>
          </TextBox>
        </Padding>
        <CouponText htmlFor="coupon">Enter coupon here</CouponText>
        <CouponBox>
          <Coupon $variation="form" placeholder="dev2025" />
          <ApplyCouponButton type="button" $variation="medium">
            Apply
          </ApplyCouponButton>
        </CouponBox>
      </Box>
      <Button>Place Order</Button>
    </Container>
  );
}
