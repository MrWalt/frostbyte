import {
  HiArrowLongRight,
  HiArrowRight,
  HiArrowLeft,
  HiFire,
} from "react-icons/hi2";
import styled from "styled-components";
import Button from "./Button";

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 3.6rem; */

  width: 100%;
  height: 72rem;
  align-self: stretch;

  overflow: hidden;

  border-left: 1px solid var(--color-grey-800);
  border-top: 1px solid var(--color-grey-800);
  border-right: 2px solid var(--color-brand-600);
  border-bottom: 2px solid var(--color-brand-600);

  background-color: rgb(17, 24, 39, 0.95);

  position: relative;
  backdrop-filter: blur(4px);
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 3.6rem 0;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Image = styled.img`
  display: inline-block;
  max-width: 40%;
  height: auto;

  position: absolute;
  bottom: 50%;
  right: 0;
  transform: translate(-25%, 50%);
`;

const CarouselSpecs = styled.div`
  padding: 1.6rem 3.2rem;

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;

  transform: translate(25%, -25%);

  color: var(--color-grey-0);
  font-size: 2rem;

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
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  font-size: 6.4rem;
  color: var(--color-grey-100);
  transform: translate(75%, 25%);

  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  padding: 1.4rem 1.8rem;
  /* background-color: var(--color-brand-900); */

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

  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50%, 50%);
  z-index: 1;

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
    top: 50%;
    left: 0;
    width: 6.4rem;
    transform: translate(50%, -50%);

    z-index: 99;
  }

  &:last-of-type {
    top: 50%;
    right: 0;
    width: 6.4rem;
    transform: translate(-50%, -50%);

    z-index: 99;
  }
`;

export default function Carousel() {
  return (
    <CarouselContainer>
      <StyledButton>
        <HiArrowLeft />
      </StyledButton>
      <StyledButton>
        <HiArrowRight />
      </StyledButton>
      {/* <Heading variation="primary">Check out our best deals!</Heading> */}
      <StyledH1>
        <HiFire /> DEALS
      </StyledH1>
      <ImageContainer>
        <Image src="/computer-1.png" />
      </ImageContainer>
      <CarouselSpecs>
        <p>
          <HiArrowLongRight /> RTX 4090
        </p>
        <p>
          <HiArrowLongRight /> Intel I9-14990K
        </p>
        <p>
          <HiArrowLongRight /> 4TB SSD Storage
        </p>
        <p>
          <HiArrowLongRight /> 128GB DDR5 6400MHz
        </p>
        <p>
          <HiArrowLongRight /> Custom Liquid Cooling
        </p>
      </CarouselSpecs>
      <PriceContainer>
        <p>
          <span>$</span>3,999
        </p>
        <p>$4,999</p>
      </PriceContainer>
    </CarouselContainer>
  );
}
