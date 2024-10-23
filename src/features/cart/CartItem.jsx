import styled from "styled-components";
import { HiMinus, HiPlus } from "react-icons/hi2";

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
  padding-bottom: 2rem;

  margin-bottom: 1.2rem;

  position: relative;
`;

const Image = styled.div`
  height: 100%;

  border: 1px solid var(--color-grey-700);
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

  margin-bottom: 0.6rem;
`;

const Price = styled.span`
  font-size: 1.6rem;
`;

const Currency = styled.span`
  font-size: 1.2rem;
  color: var(--color-brand-500);
  margin-right: 0.2rem;
`;

const Cents = styled.span`
  font-size: 1.2rem;
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

    &:hover {
      background-color: var(--color-grey-800);
    }
  }
`;

export default function CartItem({ title, price, quantity }) {
  const formattedPrice = price.split(",");
  return (
    <Box>
      <Image>IMAGE</Image>
      <InfoBox>
        <ItemName>{title}</ItemName>
        <div>
          <Currency>$</Currency>
          <Price>{formattedPrice.at(0)},</Price>
          <Cents>{formattedPrice.at(1)}</Cents>
        </div>
      </InfoBox>
      <ButtonBox>
        <HiMinus />
        {quantity}
        <HiPlus />
      </ButtonBox>
    </Box>
  );
}
