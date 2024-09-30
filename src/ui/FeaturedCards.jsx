import styled from "styled-components";
import PrimaryHeading from "../components/PrimaryHeading";

const Container = styled.div`
  margin: 0 auto;
  height: 42rem;
  width: 100%;

  /* padding: 1.2rem 0; */
`;

const StyledH1 = styled.h1`
  font-size: 4.2rem;
  font-weight: 600;
  letter-spacing: -4px;
  text-transform: uppercase;
  line-height: 0.8;
  text-align: center;
  color: var(--color-brand-900);

  width: 100%;

  padding: 3.2rem 2rem;
  background-color: var(--color-brand-100);
  border: 1px solid var(--color-brand-300);
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  width: 100%;
  height: 100%;
  margin-top: 3.2rem;
`;

const Card = styled.div`
  width: 20%;
  height: 100%;
  border: 1px solid var(--color-brand-500);
  background-color: var(--color-grey-50);

  /* transition: var(--animation-default);*/
  transition: width 0.15s cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    width: 100%;
    transform: scale(1.05);
  }

  &:hover div {
    transform: translateY(0);
  }
`;

const ProductInfo = styled.div`
  background-color: var(--color-brand-800);
  width: 100%;
  height: 7.2rem;

  transform: translateY(100%);

  transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
`;

export default function FeaturedCard() {
  return (
    <>
      <Container>
        <StyledH1>Our top sellers!</StyledH1>
        <CardsContainer>
          <Card>
            <p>Product</p>
            <ProductInfo>Some Product Info</ProductInfo>
          </Card>
          <Card>
            <p>Product</p>
            <ProductInfo>Some Product Info</ProductInfo>
          </Card>{" "}
          <Card>
            <p>Product</p>
            <ProductInfo>Some Product Info</ProductInfo>
          </Card>{" "}
          <Card>
            <p>Product</p>
            <ProductInfo>Some Product Info</ProductInfo>
          </Card>{" "}
          <Card>
            <p>Product</p>
            <ProductInfo>Some Product Info</ProductInfo>
          </Card>
        </CardsContainer>
      </Container>
    </>
  );
}
