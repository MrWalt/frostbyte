import styled from "styled-components";
import Price from "../../ui/Price";
import Button from "../../ui/Button";
import { useCart } from "../cart/CartContext";

const Box = styled.div`
  align-self: start;

  border: 1px solid var(--color-grey-800);
  margin-top: 4.8rem;
`;

const Title = styled.p`
  font-size: 2rem;
  padding: 2.4rem 1.8rem;
  border-left: 1px solid var(--color-brand-500);
  border-bottom: 1px solid var(--color-grey-800);
  /* background-color: var(--color-grey-800); */
`;

const InfoBox = styled.div`
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;

  padding: 0 2.4rem;

  align-items: end;
  justify-content: space-between;
  display: flex;
`;

const Stock = styled.span`
  display: inline-block;
  font-size: 1.4rem;
  color: var(--color-grey-400);

  /* text-decoration: underline; */
`;

export default function Details({ id, title, price, stock }) {
  const { isInCart, addItem, removeItem } = useCart();

  return (
    <Box>
      <Title>{title}</Title>
      <InfoBox>
        <Price size="large" price={price} />
        {stock < 4 && <Stock>Only {stock} left</Stock>}
      </InfoBox>

      {isInCart(id) ? (
        <Button onClick={() => removeItem(id)}>Remove from cart</Button>
      ) : (
        <Button onClick={() => addItem({ id, title, price, quantity: 1 })}>
          Add to cart
        </Button>
      )}
    </Box>
  );
}
