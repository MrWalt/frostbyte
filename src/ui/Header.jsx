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

const StyledHeader = styled.header`
  position: fixed;
  height: 6.4rem;
  width: 100%;
  /* padding-right: 7.2rem; */

  z-index: 999;

  background-color: var(--color-brand-700);
  /* border-bottom: 1px solid var(--color-brand-400); */
  backdrop-filter: blur(12px);

  font-size: 1.6rem;
  color: var(--color-grey-100);
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
        <LinkContainer>
          <StyledLink to={`account`}>
            <HiOutlineUserCircle />
            Account
          </StyledLink>

          <Box>
            <StyledLink className="dropdown">
              <HiOutlineHeart />
              Wishlist
            </StyledLink>
            <DropDownMenu align="right">
              <p>This is wishlist</p>
            </DropDownMenu>

            <StyledLink to={`checkout`} className="dropdown">
              <HiOutlineShoppingCart />
              Cart
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
