import { HiArrowLongRight } from "react-icons/hi2";
import styled from "styled-components";

const ImageContainer = styled.div`
  height: 100%;
  max-width: 40%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  display: inline-block;
  max-width: 100%;
  height: 100%;
`;

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.6rem;

  max-width: 100%;

  background-color: var(--color-grey-100);
  /* border: 1px solid var(--color-brand-200); */
`;

const AccordionHeading = styled.h1`
  font-size: 4.2rem;
  font-weight: 600;
  letter-spacing: -4px;
  text-transform: uppercase;
  line-height: 0.8;
  text-align: center;

  width: 100%;

  padding: 3.2rem 2rem;
  background-color: var(--color-brand-100);
  color: var(--color-brand-900);
  border: 1px solid var(--color-brand-300);
`;

const AccordionSpecs = styled.div`
  background-color: var(--color-brand-100);
  padding: 1.6rem 3.2rem;
  width: 100%;

  position: relative;

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
    /* margin-top: 0.4rem; */
    /* text-align: center; */
    font-size: 1.4rem;
    color: var(--color-brand-200);
    text-decoration: line-through;
  }
`;

export default function Accordion() {
  return (
    <AccordionContainer>
      <AccordionHeading>Check out our best deals!</AccordionHeading>
      <ImageContainer>
        <Image src="../../public/computer-1.png" />
      </ImageContainer>
      <AccordionSpecs>
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
      </AccordionSpecs>
    </AccordionContainer>
  );
}
