import styled from "styled-components";
import Price from "../../ui/Price";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

const Box = styled.div`
  width: 100%;
  height: 16rem;

  display: flex;

  position: relative;

  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-grey-800);
  }

  &:hover .clear-cart {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
`;

const Image = styled.div`
  width: 25%;

  text-align: center;
`;

const ProductInfoBox = styled.div`
  padding: 1.8rem;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 2rem;
  margin-bottom: 0.8rem;
`;

const Quantity = styled.span`
  font-size: 1.8rem;
  color: var(--color-brand-500);
`;

const RemoveItemButton = styled.span`
  font-size: 1.4rem;

  position: absolute;
  bottom: 0.8rem;
  right: 0.8rem;

  cursor: pointer;

  transition: var(--animation-fast);

  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  &:hover {
    color: var(--color-brand-500);
  }
`;

export default function SummaryItem({ title, price, quantity, id }) {
  const dispatch = useDispatch();
  return (
    <Box>
      <Image>IMAGE</Image>
      <ProductInfoBox>
        <div>
          <Title>{title}</Title>
          <Price size="medium" price={price} />
        </div>
        <span>
          <Quantity>{quantity}</Quantity> in cart
        </span>
      </ProductInfoBox>

      <RemoveItemButton
        className="clear-cart"
        onClick={() => dispatch(deleteItem(id))}
      >
        Remove Item
      </RemoveItemButton>
    </Box>
  );
}
