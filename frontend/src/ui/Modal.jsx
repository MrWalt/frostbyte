import styled from "styled-components";

const Box = styled.div`
  width: 90rem;
  padding: 1.2rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);

  z-index: 1001;

  transition: var(--animation-slow);

  color: var(--color-grey-0);
  background-color: var(--color-grey-transparent);
  backdrop-filter: blur(12px);

  border: 1px solid var(--color-grey-800);

  pointer-events: none;
  visibility: hidden;
  opacity: 0;

  &.open {
    pointer-events: auto;
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export default function Modal({ children, isOpen }) {
  return <Box className={`${isOpen ? "open" : ""}`}>{children}</Box>;
}
