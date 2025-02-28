import styled from "styled-components";
import DropDownMenu from "./DropDownMenu";
import Cart from "../features/cart/Cart";
import WishList from "../features/wishlist/WishList";
import { useMenu } from "../contexts/MenuContext";
import Navigation from "./Navigation";
import Modal from "./Modal";
import { useModal } from "../contexts/ModalContext";

const StyledMain = styled.main`
  width: 100%;

  min-height: calc(100vh - 10rem);

  padding-top: 8rem;

  background-color: var(--color-grey-900);
`;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;

  z-index: 1000;

  position: fixed;
  top: 0;
  right: 0;

  background-color: var(--color-grey-transparent-sm);

  pointer-events: none;
  visibility: hidden;
  opacity: 0;

  transition: var(--animation-medium);

  &.open {
    pointer-events: auto;
    visibility: visible;
    opacity: 1;
  }
`;

export default function Main({ children }) {
  const { toggledMenu, closeMenu } = useMenu();
  const { toggledModal, closeModal } = useModal();
  return (
    <StyledMain>
      {children}
      {/* Overlay for the dim background and removal of interactivity of everything except the active Menu/Modal */}
      <Overlay
        className={`${toggledMenu !== "" || toggledModal !== "" ? "open" : ""}`}
        onClick={() => {
          closeMenu();
          closeModal();
        }}
      ></Overlay>

      <DropDownMenu align="left" isOpen={toggledMenu === "products"}>
        <Navigation />
      </DropDownMenu>
      <DropDownMenu align="right" isOpen={toggledMenu === "cart"}>
        <Cart />
      </DropDownMenu>
      <DropDownMenu align="right" isOpen={toggledMenu === "wishlist"}>
        <WishList />
      </DropDownMenu>

      <Modal isOpen={toggledModal === "addProduct"} />
    </StyledMain>
  );
}
