import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  width: 100%;

  display: flex;
  gap: 0.4rem;

  border-top: 2px solid var(--color-brand-500);
  background-color: var(--color-grey-900);

  padding: 4.8rem;

  margin-bottom: 4.8rem;
`;

const CardBox = styled.div`
  display: grid;

  width: 140rem;
  margin: 0 auto;

  grid-template-columns: repeat(5, 1fr);
`;

const StyledDiv = styled.div`
  height: 36rem;

  position: relative;

  overflow: hidden;

  background-color: var(--color-grey-900);
  padding: 2px;

  transition: var(--animation-medium);

  border: 1px solid var(--color-grey-800);

  cursor: pointer;

  &:before {
    content: "";

    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    background-color: var(--color-brand-500);

    width: 5rem;
    height: 5rem;
    border-radius: 50%;

    transform: translate(100%, 100%);
    position: absolute;
    bottom: 0;
    right: 0;
  }

  &:hover {
    &:before {
      transform: translate(100%, 100%) scale(30);
    }
  }
`;

const Card = styled.div`
  color: var(--color-grey-0);

  height: calc(100% - 4px);
  width: calc(100% - 4px);

  z-index: 9;

  display: flex;
  flex-direction: column;

  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: rgb(17, 24, 39, 0.99);
  backdrop-filter: blur(12px);

  &:hover div:last-child {
    transform: translate(15%, 55%);
  }
`;

const ProductTitle = styled.p``;

const ImageContainer = styled.div`
  height: 100%;
`;

const InformationBubble = styled.div`
  font-size: 1.6rem;
  color: var(--color-grey-0);

  flex-shrink: 0;

  display: flex;
  justify-content: center;
  padding: 6.4rem;
  /* align-items: center; */

  width: 50rem;
  height: 50rem;
  border-radius: 50%;

  transform: translate(100%, 100%);

  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  background-color: var(--color-brand-500);

  &:hover {
    transform: translate(15%, 55%);
  }
`;

export default function FeaturedCards() {
  return (
    <>
      <Container>
        <CardBox>
          <StyledDiv>
            <Card>
              <ProductTitle>Product Title</ProductTitle>
              <ImageContainer>Product Image</ImageContainer>
              <InformationBubble>
                <p>Product Info</p>
              </InformationBubble>
            </Card>
          </StyledDiv>
          <StyledDiv>
            <Card>
              <ProductTitle>Product Title</ProductTitle>
              <ImageContainer>Product Image</ImageContainer>
              <InformationBubble>
                <p>Product Info</p>
              </InformationBubble>
            </Card>
          </StyledDiv>
          <StyledDiv>
            <Card>
              <ProductTitle>Product Title</ProductTitle>
              <ImageContainer>Product Image</ImageContainer>
              <InformationBubble>
                <p>Product Info</p>
              </InformationBubble>
            </Card>
          </StyledDiv>
          <StyledDiv>
            <Card>
              <ProductTitle>Product Title</ProductTitle>
              <ImageContainer>Product Image</ImageContainer>
              <InformationBubble>
                <p>Product Info</p>
              </InformationBubble>
            </Card>
          </StyledDiv>
          <StyledDiv>
            <Card>
              <ProductTitle>Product Title</ProductTitle>
              <ImageContainer>Product Image</ImageContainer>
              <InformationBubble>
                <p>Product Info</p>
              </InformationBubble>
            </Card>
          </StyledDiv>
        </CardBox>
      </Container>
    </>
  );
}
