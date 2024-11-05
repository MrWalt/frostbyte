import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  HiOutlineHeart,
  HiOutlineUserCircle,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { useCart } from "../features/cart/CartContext";

const StyledHeader = styled.header`
  height: 8rem;
  width: 100%;

  z-index: 9999;

  background-color: var(--color-brand-800);
  border-bottom: 1px solid var(--color-brand-400);

  position: fixed;

  font-size: 1.6rem;
  color: var(--color-grey-0);
`;

const Container = styled.div`
  max-width: 120rem;
  height: 100%;
  display: flex;
  margin: 0 auto;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  flex: 1 1 0%;
`;

const StyledLink = styled(Link)`
  transition: var(--animation-fast);

  &:hover {
    font-weight: 500;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto;

  flex: 1 1 0%;
`;

const Image = styled.img`
  display: block;
  max-width: 20rem;

  object-fit: contain;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 2.4rem;

  flex: 1 1 0%;

  svg {
    width: 2.4rem;
    height: 2.4rem;

    color: var(--color-grey-0);

    transition: var(--animation-fast);

    &:hover {
      transform: scale(1.1);
    }
  }

  & .cart {
    position: relative;

    span {
      position: absolute;
      top: 0%;
      right: 0%;

      transform: translate(50%, -50%);

      width: 2rem;
      height: 2rem;
      border-radius: 50%;

      background-color: var(--color-brand-900);
      border: 1px solid var(--color-grey-0);

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 1.2rem;
    }
  }
`;

export default function Header() {
  const { cart } = useCart();
  const itemsInCart = cart.length;

  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <StyledLink to="/products">Shop</StyledLink>
          <StyledLink to="/contact">Support</StyledLink>
        </StyledNav>

        <Logo>
          <Link to="/">
            <Image src="/logo.png" />
          </Link>
        </Logo>

        <Box>
          <Link to="/account/profile">
            <HiOutlineUserCircle />
          </Link>
          <Link>
            <HiOutlineHeart />
          </Link>
          <Link to="/cart-summary" className="cart">
            <HiOutlineShoppingCart />
            {itemsInCart ? <span>{itemsInCart}</span> : null}
          </Link>
        </Box>
      </Container>
    </StyledHeader>
  );
}
