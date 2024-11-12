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

  &:hover svg {
    fill: var(--color-grey-0);
  }

  svg {
    font-size: 2rem;
    stroke: var(--color-grey-0);
  }
`;

const ImageBox = styled.div`
  height: 65%;
  width: 100%;
  flex-shrink: 0;
  cursor: pointer;
`;

const Image = styled.img`
  /* height: 75%; */
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

export default function Card({ title, price, id }) {
  const { cart, addItem, removeItem } = useCart();
  const {
    wishlist,
    addItem: addWishlistItem,
    removeItem: removeWishlistItem,
  } = useWishlist();

  const isInWishlist = wishlist.find((item) => item.id === id) ? true : false;
  const isInCart = cart.find((item) => item.id === id) ? true : false;

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

      <Link to={`/product/${id}`}>
        <ImageBox>
          IMAGE
          <Image />
        </ImageBox>
      </Link>
      <InformationBox>
        <Title>{title}</Title>
        <PriceBox>
          <Price price={price} size="large" />
        </PriceBox>
      </InformationBox>

      {isInCart ? (
        <StyledButton onClick={() => removeItem(id)}>
          <HiShoppingCart className="in-cart" />
        </StyledButton>
      ) : (
        <StyledButton
          onClick={() => addItem({ title, price, id, quantity: 1 })}
        >
          <HiOutlineShoppingCart />
        </StyledButton>
      )}
    </Box>
  );
}
