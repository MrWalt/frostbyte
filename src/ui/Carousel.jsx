import { HiArrowLongRight } from "react-icons/hi2";
import styled from "styled-components";
import Heading from "./Heading";

const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 3.6rem; */

  max-width: 100%;
  height: 72rem;
  align-self: stretch;

  overflow: hidden;
  /* background-color: var(--color-grey-100); */
  border: 1px solid var(--color-grey-800);

  position: relative;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 3.6rem 0;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(17, 24, 39, 0.98);
`;

const Image = styled.img`
  display: inline-block;
  max-width: 50%;
  height: auto;

  border-right: 2px solid var(--color-brand-600);

  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(0%, 25%);
`;

const CarouselSpecs = styled.div`
  background-color: var(--color-brand-100);
  padding: 1.6rem 3.2rem;
  width: 100%;

  position: relative;
  z-index: 0;

  border: 1px solid var(--color-brand-500);

  font-size: 1.6rem;
  color: var(--color-grey-900);

  p:not(:last-of-type) {
    margin-bottom: 0.8rem;
  }

  p {
    display: flex;
    align-items: center;

    svg {
      color: var(--color-brand-900);
      margin-right: 0.4rem;
      width: 2rem;
      height: 2rem;
    }
  }
`;

const PriceContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;

  font-size: 2.4rem;
  color: var(--color-grey-100);
  transform: translate(-25%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;

  padding: 1.4rem 1.8rem;
  background-color: var(--color-brand-900);

  span {
    font-size: 1.6rem;
    color: var(--color-brand-200);
    margin-right: 0.2rem;
  }

  p:last-of-type {
    font-size: 1.4rem;
    color: var(--color-brand-200);
    text-decoration: line-through;
  }
`;

const TempHeading = styled.h1`
  font-size: 6.2rem;
  font-weight: 500;
  letter-spacing: -4px;
  /* text-transform: uppercase; */
  color: var(--color-brand-600);
  /* color: var(--color-grey-100); */

  position: absolute;
  top: 0;
  left: 0;
  transform: translate(10%, 50%);
  z-index: 1;
`;

export default function Accordion() {
  return (
    <Carousel>
      {/* <Heading variation="primary">Check out our best deals!</Heading> */}
      <TempHeading>Check out our best deals</TempHeading>
      <ImageContainer>
        <Image src="/computer-1.png" />
      </ImageContainer>
      {/* <CarouselSpecs>
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
        <PriceContainer>
          <p>
            <span>$</span>3,999
          </p>
          <p>$4,999</p>
        </PriceContainer>
      </CarouselSpecs> */}
    </Carousel>
  );
}
