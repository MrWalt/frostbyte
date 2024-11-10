import { HiArrowRight, HiArrowLeft, HiFire } from "react-icons/hi2";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  height: 64vh;
  width: 100%;

  background-color: var(--color-grey-transparent);

  display: flex;
  justify-content: center;
  /* align-items: center; */

  position: relative;
  backdrop-filter: blur(4px);

  padding: 4.8rem 0;
`;

const CarouselContainer = styled.div`
  max-width: 90rem;
  height: 100%;

  flex: 1 0 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;
`;

const Image = styled.img`
  display: block;
  width: 95%;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  justify-self: center;
  padding: 3.6rem 0;
`;

const Specs = styled.div`
  color: var(--color-grey-0);
  font-size: 1.8rem;

  p:not(:last-of-type) {
    margin-bottom: 0.8rem;
  }

  p {
    display: flex;
    align-items: center;

    svg {
      /* color: var(--color-brand-900); */
      margin-right: 0.4rem;
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

const PriceContainer = styled.div`
  font-size: 6.4rem;
  color: var(--color-grey-100);

  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  padding-left: 2.4rem;

  span {
    font-size: 1.8rem;
    color: var(--color-brand-200);
    margin-right: 0.2rem;
  }

  p:last-of-type {
    font-size: 1.4rem;
    color: var(--color-brand-200);
    text-decoration: line-through;
  }
`;

const StyledH1 = styled.h1`
  font-size: 2.4rem;
  font-weight: 500;
  letter-spacing: -2px;
  color: var(--color-brand-100);

  padding: 1.2rem 1.2rem;
  background-color: var(--color-brand-900);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & svg {
    font-size: 6.4rem;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  padding: 1.6rem 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2.4rem;

  &:first-of-type {
    bottom: 2.4rem;
    right: 50%;
    width: 6.4rem;

    transform: translateX(-5%);

    z-index: 99;
  }

  &:last-of-type {
    bottom: 2.4rem;
    left: 50%;
    width: 6.4rem;

    transform: translateX(5%);

    z-index: 99;
  }
`;

const IconBox = styled.div`
  display: flex;
`;

export default function Carousel() {
  return (
    <Container>
      <CarouselContainer>
        <StyledButton>
          <HiArrowLeft />
        </StyledButton>
        <StyledButton>
          <HiArrowRight />
        </StyledButton>

        <InfoBox>
          <IconBox>
            <StyledH1>
              <HiFire />
              <span>DEALS</span>
            </StyledH1>

            <PriceContainer>
              <p>
                <span>$</span>3,999
              </p>
              <p>$4,999</p>
            </PriceContainer>
          </IconBox>

          <Specs>
            <p>NVidia RTX 4090</p>
            <p>Intel I9-14990K</p>
            <p>4TB SSD Storage</p>
            <p>128GB DDR5 6400MHz</p>
            <p>Custom Liquid Cooling</p>
          </Specs>
        </InfoBox>

        <ImageContainer>
          <Image src="/computer-1.png" />
        </ImageContainer>
      </CarouselContainer>
    </Container>
  );
}
