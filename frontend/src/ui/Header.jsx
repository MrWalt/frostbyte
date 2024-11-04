import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  HiOutlineBars3,
  HiOutlineHeart,
  HiOutlineUserCircle,
  HiOutlineShoppingCart,
} from "react-icons/hi2";

import DropDownMenu from "./DropDownMenu";
import Cart from "../features/cart/Cart";
import WishList from "../features/wishlist/WishList";
import { useUser } from "../features/authentication/UserContext";
import { useCart } from "../features/cart/CartContext";

const StyledHeader = styled.header`
  position: fixed;
  height: 6.4rem;
  width: 100%;

  z-index: 999;

  background-color: var(--color-brand-700);
  backdrop-filter: blur(12px);

  font-size: 1.6rem;
  color: var(--color-grey-100);
`;

const ImageLink = styled(Link)`
  padding: 1.6rem;
  height: 100%;

  width: 20rem;
  padding: 1.6rem;
`;

const Image = styled.img`
  width: 100%;
`;

const StyledLink = styled(Link)`
  padding: 0 2.4rem;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 1px solid var(--color-brand-700);
  border-left: 1px solid var(--color-brand-700);

  transition: var(--animation-fast);

  &:hover {
    border-color: var(--color-brand-400);
    background-color: var(--color-brand-800);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.4rem;
  }

  &.cart {
    position: relative;

    span {
      display: inline-block;
      position: absolute;
      top: 1.2rem;
      right: 2.8rem;

      font-size: 1.2rem;
      width: 2rem;
      height: 2rem;

      background-color: var(--color-grey-800);
      border: 1px solid var(--color-brand-100);
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const ProductsDropDownLink = styled(Link)`
  width: 28rem;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: var(--animation-fast);

  border-right: 1px solid var(--color-brand-700);

  &:hover {
    border-color: var(--color-brand-400);
    background-color: var(--color-brand-800);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.4rem;
  }
`;

const Box = styled.div`
  width: 28rem;
  height: 100%;

  display: flex;

  a {
    width: 50%;

    &:last-of-type {
      border-right: none;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  display: flex;
  justify-content: space-between;
`;

const LinkContainer = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Header() {
  const { isAuthenticated } = useUser();
  const { cart } = useCart();

  const itemsInCart = cart.reduce((acc, cur) => (acc += cur.quantity), 0);

  return (
    <StyledHeader>
      <Container>
        <ProductsDropDownLink to={"products"} className="dropdown">
          <HiOutlineBars3 />
          Products
        </ProductsDropDownLink>
        <DropDownMenu align="left">
          <DropDownMenu.Products />
        </DropDownMenu>

        <ImageLink to="/">
          <Image src="/logo.png" />
        </ImageLink>

        <LinkContainer>
          <StyledLink to={`account`}>
            <HiOutlineUserCircle />
            {isAuthenticated ? "Account" : "Login"}
          </StyledLink>

          <Box>
            <StyledLink className="dropdown">
              <HiOutlineHeart />
              Wishlist
            </StyledLink>
            <DropDownMenu align="right">
              <WishList />
            </DropDownMenu>

            <StyledLink to={`cart-summary`} className="dropdown cart">
              <HiOutlineShoppingCart />
              Cart
              {itemsInCart ? <span>{itemsInCart}</span> : null}
            </StyledLink>

            <DropDownMenu align="right">
              <Cart />
            </DropDownMenu>
          </Box>
        </LinkContainer>
      </Container>
    </StyledHeader>
  );
}
