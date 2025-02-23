import {
  HiHeart,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiShoppingCart,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "date-fns";
import Price from "../../ui/Price";
import { useCart } from "../cart/CartContext";
import { useWishlist } from "../wishlist/WishlistContext";

const Box = styled.div`
  height: 36rem;

  color: var(--color-grey-0);

  display: flex;
  flex-direction: column;

  border: 1px solid var(--color-grey-800);

  overflow: hidden;

  transition: var(--animation-fast);

  position: relative;

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

  &:hover svg {
    fill: var(--color-grey-0);
  }

  svg {
    font-size: 2rem;
    stroke: var(--color-grey-0);
  }
`;

const ImageLink = styled(Link)`
  height: 100%;
  margin-top: 1.8rem;
`;

const ImageBox = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Image = styled.img`
  width: 85%;
`;

const InformationBox = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 0.2rem;

  padding-bottom: 0.6rem;
`;

const Title = styled.span`
  padding: 0.4rem 1.6rem;
  font-size: 1.6rem;
`;

const PriceBox = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  /* flex-grow: 1; */
  padding: 0.4rem 2.8rem;

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

const OutOfStock = styled.span`
  display: inline-block;
  padding: 0.4rem 0.8rem;

  font-size: 1.6rem;

  position: absolute;
  bottom: 1.2rem;
  right: 1.2rem;

  border: 1px solid var(--color-grey-800);
`;

const OldPrice = styled.span`
  align-self: end;
  margin-bottom: 4px;
  margin-left: 0.8rem;
`;

const Discount = styled.span`
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;

  border: 1px solid var(--color-grey-800);
  padding: 0.4rem 0.8rem;

  font-size: 1.6rem;

  backdrop-filter: blur(4px);

  span {
    color: var(--color-brand-500);
  }
`;

const Percentage = styled.span`
  font-size: 1.4rem;
`;

export default function Card({
  title,
  price,
  id,
  stock,
  discount,
  discountedPrice,
}) {
  const { addItem, removeItem, isInCart } = useCart();
  const {
    wishlist,
    addItem: addWishlistItem,
    removeItem: removeWishlistItem,
  } = useWishlist();

  const isInWishlist = wishlist.find((item) => item.id === id) ? true : false;

  return (
    <Box>
      {isInWishlist ? (
        <StyledButton onClick={() => removeWishlistItem(id)}>
          <HiHeart className="wishlisted" />
        </StyledButton>
      ) : (
        <StyledButton
          className="not-wishlisted"
          onClick={() =>
            addWishlistItem({
              title,
              price,
              id,
              dateAdded: format(new Date(), "dd/MM/yyyy"),
            })
          }
        >
          <HiOutlineHeart />
        </StyledButton>
      )}

      <ImageLink to={`/product/${id}`}>
        <ImageBox>
          <Image src={`/public/img/product-1.png`} />
        </ImageBox>
      </ImageLink>

      <InformationBox>
        <Title>{title}</Title>
        <PriceBox>
          <Price price={discount ? discountedPrice : price} size="large" />
          {discount !== 0 && (
            <OldPrice>
              <Price price={price} size="tiny" />
            </OldPrice>
          )}
        </PriceBox>
      </InformationBox>
      {stock ? (
        isInCart(id) ? (
          <StyledButton onClick={() => removeItem(id)}>
            <HiShoppingCart className="in-cart" />
          </StyledButton>
        ) : (
          <StyledButton
            onClick={() =>
              addItem({
                title,
                price,
                id,
                quantity: 1,
                discount,
                discountedPrice,
              })
            }
          >
            <HiOutlineShoppingCart />
          </StyledButton>
        )
      ) : (
        <OutOfStock>Sold Out</OutOfStock>
      )}
      {discount ? (
        <Discount>
          <span>{discount}</span>
          <Percentage>%</Percentage> off
        </Discount>
      ) : null}
    </Box>
  );
}
