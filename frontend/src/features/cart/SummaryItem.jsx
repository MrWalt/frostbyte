import styled from "styled-components";
import Price from "../../ui/Price";
import { useCart } from "./CartContext";
import Button from "../../ui/Button";
import { HiOutlineTrash } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Box = styled.div`
  width: 100%;
  height: 16rem;

  display: flex;

  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 0.8rem;
  }

  border: 1px solid var(--color-grey-800);

  background-color: var(--color-grey-transparent);
  backdrop-filter: blur(4px);

  &:hover .clear-cart {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
`;

const ImageLink = styled(Link)`
  padding: 0.8rem 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 0 0;
`;

const Image = styled.img`
  height: 100%;

  flex-shrink: 0;

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

const RemoveItemButton = styled(Button)`
  position: absolute;
  bottom: 1.2rem;
  right: 1.2rem;

  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2rem;

  &:hover {
    color: var(--color-brand-500);
  }
`;

const Details = styled.div`
  display: flex;
  align-items: center;

  gap: 0.6rem;
`;

const PriceBox = styled.div`
  display: flex;
  align-items: end;
  gap: 0.8rem;
`;

export default function SummaryItem({
  title,
  price,
  quantity,
  id,
  discount,
  discountedPrice,
  image,
}) {
  const { removeItem } = useCart();

  let totalPrice = discountedPrice || price;
  totalPrice *= quantity;

  const priceBeforeDiscount = price * quantity;

  return (
    <Box>
      <ImageLink to={`/product/${id}`}>
        <Image src={`http://localhost:8000/public/img/${image}`} />
      </ImageLink>
      <ProductInfoBox>
        <Title>{title}</Title>

        <Details>
          <Quantity>{quantity}</Quantity> in cart &mdash;
          <PriceBox>
            <Price size="medium" price={totalPrice} />
            {discount !== 0 && (
              <Price size="tiny" price={priceBeforeDiscount} />
            )}
          </PriceBox>
        </Details>
      </ProductInfoBox>

      <RemoveItemButton
        $variation="mediumNoBox"
        className="clear-cart"
        onClick={() => removeItem(id)}
      >
        <HiOutlineTrash />
      </RemoveItemButton>
    </Box>
  );
}
