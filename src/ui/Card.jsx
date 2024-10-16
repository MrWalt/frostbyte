import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";
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

  position: relative;

  /* &:hover {
    background-color: var(--color-grey-800);
    border-bottom: 1px solid var(--color-brand-900);
  } */

  &:hover button {
    transform: scale(1);
  }

  & button:first-of-type {
    top: 1.2rem;
    right: 1.2rem;
  }

  & button:last-of-type {
    bottom: 1.2rem;
    right: 1.2rem;

    transform: scale(1);
  }
`;

const StyledButton = styled.button`
  border: 1px solid var(--color-grey-800);

  width: 3.2rem;
  height: 3.2rem;

  background-color: transparent;

  position: absolute;

  cursor: pointer;

  transition: var(--animation-fast);

  transform: scale(0);

  &:hover svg {
    fill: var(--color-grey-0);
  }

  &:active svg {
    animation: jumpUp 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  svg {
    font-size: 2rem;
    stroke: var(--color-grey-0);

    transition: var(--animation-fast);
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

export default function Card({ title, price, id }) {
  return (
    <Box>
      <StyledButton>
        <HiOutlineHeart />
      </StyledButton>

      <ImageBox>
        <Link to={`/products/product/${id}`}>
          <Image />
        </Link>
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

      <StyledButton>
        <HiOutlineShoppingCart />
      </StyledButton>
    </Box>
  );
}
