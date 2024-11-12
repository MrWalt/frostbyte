import styled from "styled-components";
import { HiMinus, HiPlus, HiXMark } from "react-icons/hi2";

import Price from "../../ui/Price";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const Box = styled.div`
  height: 14rem;
  width: 100%;

  background-color: var(--color-grey-900);
  border: 1px solid var(--color-grey-800);

  font-size: 1.6rem;
  color: var(--color-grey-0);

  display: flex;
  gap: 1.2rem;

  padding: 1.2rem;

  margin-bottom: 0.8rem;

  position: relative;

  &:first-of-type {
    margin-top: 0.8rem;
  }

  &:last-of-type {
    margin-bottom: 0.8rem;
  }
`;

const Image = styled.div`
  height: 100%;
  text-align: center;
  width: 12rem;
  /* border: 1px solid var(--color-grey-800); */

  /* flex-grow: 0; */
  flex-shrink: 0;
`;

const InfoBox = styled.div`
  width: 50%;
  text-align: start;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemName = styled.span`
  display: inline-block;

  font-size: 1.8rem;

  margin-bottom: 0.8rem;
`;

const ButtonBox = styled.div`
  position: absolute;

  bottom: 1rem;
  right: 1rem;

  font-size: 1.4rem;

  height: 2.8rem;

  display: flex;
  gap: 0.8rem;
  align-items: center;

  svg {
    background-color: var(--color-grey-900);
    border: 1px solid var(--color-grey-800);

    width: 2.8rem;
    height: 2.8rem;

    color: var(--color-grey-0);

    padding: 0.4rem;

    cursor: pointer;

    transition: var(--animation-fast);

    &:hover {
      background-color: var(--color-grey-800);
    }
  }
`;

const StyledSpan = styled.span`
  display: inline-block;
  width: 1.2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeleteButton = styled.button`
  width: 2.8rem;
  height: 2.8rem;

  position: absolute;

  top: 1.2rem;
  right: 1.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-grey-900);
  border: 1px solid var(--color-grey-800);

  cursor: pointer;

  transition: var(--animation-fast);

  &:hover {
    background-color: var(--color-grey-800);
  }

  svg {
    font-size: 1.8rem;

    color: var(--color-grey-0);
  }
`;

export default function CartItem({ title, price, quantity, id }) {
  const { removeItem, increaseQuantity, decreaseQuantity } = useCart();
  return (
    <Box>
      <DeleteButton onClick={() => removeItem(id)}>
        <HiXMark />
      </DeleteButton>
      <Link to={`/product/${id}`}>
        <Image>IMAGE</Image>
      </Link>
      <InfoBox>
        <ItemName>{title}</ItemName>
        <Price price={price} size="medium" />
      </InfoBox>
      <ButtonBox>
        <button onClick={() => decreaseQuantity({ id, quantity })}>
          <HiMinus />
        </button>
        <StyledSpan>{quantity}</StyledSpan>
        <button onClick={() => increaseQuantity(id)}>
          <HiPlus />
        </button>
      </ButtonBox>
    </Box>
  );
}
