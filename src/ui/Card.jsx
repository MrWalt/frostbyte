import {
  HiHeart,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiShoppingCart,
} from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  addCartItem,
  deleteCartItem,
  getCart,
} from "../features/cart/cartSlice";
import Price from "./Price";
import {
  addWishlistItem,
  getWishlist,
  deleteWishlistItem,
} from "../features/wishlist/wishlistSlice";
import { format } from "date-fns";

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

export default function Card({ title, price, id }) {
  const dispatch = useDispatch();

  const cart = useSelector(getCart);
  const wishlist = useSelector(getWishlist);

  const isInWishlist = wishlist.find((item) => item.id === id) ? true : false;
  const isInCart = cart.find((item) => item.id === id) ? true : false;

  function handleAddCartItem() {
    const newItem = {
      title,
      price,
      id,
      quantity: 1,
    };

    dispatch(addCartItem(newItem));
  }

  function handleDeleteCartItem() {
    dispatch(deleteCartItem(id));
  }

  function handleAddWishlistItem() {
    const newItem = {
      title,
      price,
      id,
      dateAdded: format(new Date(), "dd/MM/yyyy"),
    };

    dispatch(addWishlistItem(newItem));
  }

  function handleDeleteWishlistItem() {
    dispatch(deleteWishlistItem(id));
  }

  return (
    <Box>
      {isInWishlist ? (
        <StyledButton onClick={handleDeleteWishlistItem}>
          <HiHeart className="wishlisted" />
        </StyledButton>
      ) : (
        <StyledButton
          className="not-wishlisted"
          onClick={handleAddWishlistItem}
        >
          <HiOutlineHeart />
        </StyledButton>
      )}

      <ImageBox>
        <Link to={`/products/product/${id}`}>
          <Image />
        </Link>
      </ImageBox>
      <InformationBox>
        <Title>{title}</Title>
        <PriceBox>
          <Price price={price} size="large" />
        </PriceBox>
      </InformationBox>

      {isInCart ? (
        <StyledButton onClick={handleDeleteCartItem}>
          <HiShoppingCart className="in-cart" />
        </StyledButton>
      ) : (
        <StyledButton onClick={handleAddCartItem}>
          <HiOutlineShoppingCart />
        </StyledButton>
      )}
    </Box>
  );
}
