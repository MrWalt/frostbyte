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
`;

const PriceBox = styled.div`
  display: flex;
  align-items: end;
`;

const PriceContainer = styled.div`
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

const OldPrice = styled.span`
  display: inline-block;
  margin-bottom: 2px;
  margin-left: 0.8rem;
`;

const Heading = styled.p`
  font-size: 1.6rem;
  color: var(--color-brand-500);
  margin-left: 1.2rem;
  margin-bottom: 0.8rem;

  font-weight: 500;
`;

const Description = styled.p`
  font-size: 1.8rem;

  line-height: 1.5;
`;

const InfoBox = styled.div`
  padding: 2.4rem 2.4rem 1.2rem 2.4rem;
`;

const SoldOut = styled.p`
  text-align: center;
  padding: 1.2rem;
  border-top: 1px solid var(--color-grey-800);
  font-size: 2rem;
`;

export default function Details({
  id,
  title,
  price,
  stock,
  discount,
  description,
  discountedPrice,
}) {
  const { isInCart, addItem, removeItem } = useCart();

  return (
    <Box>
      <Title>{title}</Title>
      <InfoBox>
        <Heading>About this product</Heading>
        <Description>{description}</Description>
      </InfoBox>

      <PriceContainer>
        <PriceBox>
          <Price size="large" price={discount ? discountedPrice : price} />
          {discount !== 0 && (
            <OldPrice>
              <Price size="tiny" price={price} />
            </OldPrice>
          )}
        </PriceBox>
        {stock < 4 && stock !== 0 && <Stock>Only {stock} left</Stock>}
      </PriceContainer>

      {stock ? (
        isInCart(id) ? (
          <Button onClick={() => removeItem(id)}>Remove from cart</Button>
        ) : (
          <Button
            onClick={() =>
              addItem({
                id,
                title,
                price,
                quantity: 1,
                discount,
                discountedPrice,
              })
            }
          >
            Add to cart
          </Button>
        )
      ) : (
        <SoldOut>Sold Out</SoldOut>
      )}
    </Box>
  );
}
