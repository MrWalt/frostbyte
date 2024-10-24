import styled from "styled-components";
import { HiMinus, HiPlus, HiXMark } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "./cartSlice";
import Price from "../../ui/Price";

const Box = styled.div`
  height: 28rem;
  width: 100%;

  background-color: var(--color-grey-800);
  border: 1px solid var(--color-grey-700);

  font-size: 1.6rem;
  color: var(--color-grey-0);

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  padding: 1.6rem;

  margin-bottom: 1.2rem;

  position: relative;

  &:first-of-type {
    margin-top: 0.8rem;
  }

  &:last-of-type {
    margin-bottom: 0.4rem;
  }
`;

const Image = styled.div`
  height: 100%;
  text-align: center;
  /* border: 1px solid var(--color-grey-700); */
`;

const InfoBox = styled.div`
  height: 35%;
  width: 100%;
  text-align: start;

  display: flex;
  flex-direction: column;
  justify-content: end;

  flex-shrink: 0;
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
    border: 1px solid var(--color-grey-700);

    width: 2.8rem;
    height: 2.8rem;

    padding: 0.4rem;

    cursor: pointer;

    transition: var(--animation-fast);

    &:hover {
      background-color: var(--color-grey-700);
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
  border: 1px solid var(--color-grey-700);

  cursor: pointer;

  transition: var(--animation-fast);

  &:hover {
    background-color: var(--color-grey-700);
  }

  svg {
    font-size: 1.8rem;

    color: var(--color-grey-0);
  }
`;

export default function CartItem({ title, price, quantity, id }) {
  const dispatch = useDispatch();

  return (
    <Box>
      <DeleteButton onClick={() => dispatch(deleteItem(id))}>
        <HiXMark />
      </DeleteButton>
      <Image>IMAGE</Image>
      <InfoBox>
        <ItemName>{title}</ItemName>
        <Price price={price} size="small" />
      </InfoBox>
      <ButtonBox>
        <HiMinus onClick={() => dispatch(decreaseItemQuantity(id))} />
        <StyledSpan>{quantity}</StyledSpan>
        <HiPlus onClick={() => dispatch(increaseItemQuantity(id))} />
      </ButtonBox>
    </Box>
  );
}
