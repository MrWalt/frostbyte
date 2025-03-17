import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 8rem);

  background-image: linear-gradient(
      to right,
      rgba(51, 155, 240, 0.15),
      rgba(51, 155, 240, 0.15)
    ),
    url("/hero.jpg");
  background-position: center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  max-width: 80%;
`;

const Heading = styled.h1`
  font-size: 9rem;
  /* color: var(--color-brand-100); */
  letter-spacing: -4px;
  line-height: 70px;
  width: 80%;

  text-transform: uppercase;
  background-image: linear-gradient(
    to bottom left,
    var(--color-grey-0),
    var(--color-brand-300)
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubHeading = styled.h3`
  font-size: 1.6rem;
  color: var(--color-brand-200);

  margin-top: 0.8rem;
  margin-left: 1.2rem;
  width: 50%;

  font-weight: 400;
`;

const CTAText = styled.p`
  margin-top: 6.4rem;
  margin-left: 1.2rem;

  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.4rem;

  color: var(--color-brand-100);
`;

const CTAButton = styled.button`
  font-size: 2rem;
  color: var(--color-brand-100);
  border: 1px solid var(--color-brand-200);
  padding: 1.2rem 3.6rem;

  margin-left: 1.2rem;

  display: inline-block;

  cursor: pointer;

  transition: var(--animation-fast);

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

export default function Hero() {
  return (
    <Container>
      <Box>
        <Heading>Your One-Stop Shop for Tech Savings</Heading>
        <SubHeading>
          Get the best deals on mobile phones, laptops, graphics cards,
          processors, and more. Shop confidently with fair prices, top-quality
          products, and hassle-free home delivery.
        </SubHeading>
        <CTAText>Save more today</CTAText>
        <Link to="/products">
          <CTAButton>Shop Now</CTAButton>
        </Link>
      </Box>
    </Container>
  );
}
