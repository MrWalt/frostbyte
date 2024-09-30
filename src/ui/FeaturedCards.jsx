import styled from "styled-components";
import Heading from "./Heading";

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  width: 100%;
  height: 70%;
  margin-top: 3.2rem;
`;

const Card = styled.div`
  width: 20%;
  height: 100%;
  border: 1px solid var(--color-brand-500);
  background-color: var(--color-grey-50);

  transition: width 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);

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
        <Heading variation="primary">Our top sellers!</Heading>
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
