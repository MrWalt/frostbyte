import { HiArrowRight, HiArrowLeft, HiFire } from "react-icons/hi2";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  height: calc(100vh - 8rem);
  max-width: 100rem;
  margin: 0 auto;

  /* background-color: var(--color-grey-transparent); */
  /* backdrop-filter: blur(4px); */

  display: flex;
  justify-content: center;
  gap: 9.2rem;
  /* align-items: center; */

  position: relative;

  padding: 4.8rem 0;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  display: block;
  width: 90%;
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  justify-self: center;
  padding: 5.6rem 0;
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
      <StyledButton>
        <HiArrowLeft />
      </StyledButton>
      <StyledButton>
        <HiArrowRight />
      </StyledButton>

      <PriceBox>
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
      </PriceBox>

      <ImageContainer>
        <Image src="/computer-1.png" />
      </ImageContainer>
    </Container>
  );
}
