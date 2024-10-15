import styled from "styled-components";
import Button from "./Button";

const Box = styled.div`
  height: 36rem;

  color: var(--color-grey-0);

  display: flex;
  flex-direction: column;

  border: 1px solid var(--color-grey-800);

  overflow: hidden;

  transition: var(--animation-fast);

  &:hover {
    background-color: var(--color-grey-800);
    /* border-bottom: 1px solid var(--color-brand-900); */
  }
`;

const ImageBox = styled.div`
  height: 75%;
  width: 100%;

  cursor: pointer;
`;

const Image = styled.img`
  /* height: 75%; */
`;

const InformationBox = styled.div`
  height: 25%;
`;

const Title = styled.p`
  padding: 0.4rem 1.6rem;
  font-size: 1.6rem;

  height: 50%;
  /* padding-bottom: 0; */

  /* border-bottom: 1px solid var(--color-grey-800); */
`;

const PriceBox = styled.div`
  position: relative;

  height: 4rem;

  display: flex;
  align-items: center;

  flex-grow: 1;
  padding: 0.4rem 3.2rem;

  &::before {
    content: "";

    position: absolute;
    top: 50%;
    left: 0;
    width: 3rem;
    height: 3rem;

    transform: translate(-50%, -50%);

    background-color: var(--color-brand-500);

    border-radius: 50%;
  }
`;

const Price = styled.span`
  display: inline-block;
  font-size: 2.8rem;
`;

const Currency = styled.span`
  display: inline-block;

  margin-right: 0.2rem;

  font-size: 1.4rem;
  color: var(--color-grey-300);
`;

const Cents = styled.span`
  font-size: 1.4rem;
  color: var(--color-brand-600);
`;

export default function Card({ title, price }) {
  return (
    <Box>
      <ImageBox>
        <Image />
      </ImageBox>
      <InformationBox>
        <Title>{title}</Title>
        <PriceBox>
          <Price>
            <Currency>$</Currency>
            {price},<Cents>99</Cents>
          </Price>
        </PriceBox>
      </InformationBox>
    </Box>
  );
}
