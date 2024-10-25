import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  width: 100%;

  border-top: 1px solid var(--color-brand-500);
  border-bottom: 1px solid var(--color-brand-500);
  background-color: var(--color-grey-900);

  padding: 6.4rem;

  margin-bottom: 4.8rem;
`;

const CardBox = styled.div`
  display: grid;

  width: 140rem;
  margin: 0 auto;

  grid-template-columns: repeat(5, 1fr);
  gap: 0.8rem;
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

    transition: var(--animation-slow);
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
      transform: translate(100%, 100%) scale(20);
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

  background-color: var(--color-grey-transparent);
  backdrop-filter: blur(12px);

  &:hover div:last-child {
    transform: translate(0%, 40%);
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

  transform: translate(0%, 100%);

  transition: var(--animation-medium);

  background-color: var(--color-brand-500);
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
