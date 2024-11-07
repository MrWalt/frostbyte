import styled from "styled-components";
import DropDownMenu from "./DropDownMenu";
import Cart from "../features/cart/Cart";
import WishList from "../features/wishlist/WishList";
import { useMenu } from "../contexts/MenuContext";

const StyledMain = styled.main`
  width: 100%;

  min-height: calc(100vh - 10rem);

  padding-top: 8rem;

  background-color: var(--color-grey-900);
`;

export default function Main({ children }) {
  const { toggledMenu } = useMenu();
  return (
    <StyledMain>
      {children}

      <DropDownMenu align="left" isOpen={toggledMenu === "products"}>
        <p>This is products</p>
      </DropDownMenu>
      <DropDownMenu align="right" isOpen={toggledMenu === "cart"}>
        <Cart />
      </DropDownMenu>
      <DropDownMenu align="right" isOpen={toggledMenu === "wishlist"}>
        <WishList />
      </DropDownMenu>
    </StyledMain>
  );
}
