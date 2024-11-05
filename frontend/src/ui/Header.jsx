import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  HiOutlineHeart,
  HiOutlineUserCircle,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { useCart } from "../features/cart/CartContext";
import DropDownMenu from "./DropDownMenu";
import { useState } from "react";
import Cart from "../features/cart/Cart";
import WishList from "../features/wishlist/WishList";

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

      width: 1.8rem;
      height: 1.8rem;
      border-radius: 50%;

      background-color: var(--color-grey-800);

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 1.2rem;
    }
  }
`;

const StyledButton = styled.button`
  cursor: pointer;
  color: var(--color-grey-0);

  font-size: 1.6rem;

  transition: var(--animation-fast);

  &.link {
    &:hover {
      font-weight: 500;
    }
  }
`;

export default function Header() {
  const [toggledMenu, setToggledMenu] = useState("");
  const { cart } = useCart();
  const itemsInCart = cart.length;

  function handleSetToggledMenu(menu) {
    if (toggledMenu === menu) {
      closeMenu();
      return;
    }
    setToggledMenu(menu);
  }

  function closeMenu() {
    setToggledMenu("");
  }

  return (
    <StyledHeader className="header">
      <Container>
        <StyledNav>
          <StyledButton
            onClick={() => handleSetToggledMenu("products")}
            className="link products"
          >
            Shop
          </StyledButton>
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
          <StyledButton
            onClick={() => handleSetToggledMenu("wishlist")}
            className="wishlist"
          >
            <HiOutlineHeart />
          </StyledButton>
          <StyledButton
            onClick={() => handleSetToggledMenu("cart")}
            className="cart"
          >
            <HiOutlineShoppingCart />
            {itemsInCart ? <span>{itemsInCart}</span> : null}
          </StyledButton>
        </Box>
      </Container>
      <DropDownMenu
        align="left"
        isOpen={toggledMenu === "products"}
        closeMenu={closeMenu}
        menuName="products"
      >
        <p>This is products</p>
      </DropDownMenu>
      <DropDownMenu
        align="right"
        isOpen={toggledMenu === "cart"}
        closeMenu={closeMenu}
        menuName="cart"
      >
        <Cart />
      </DropDownMenu>
      <DropDownMenu
        align="right"
        isOpen={toggledMenu === "wishlist"}
        closeMenu={closeMenu}
        menuName="wishlist"
      >
        <WishList />
      </DropDownMenu>
    </StyledHeader>
  );
}
