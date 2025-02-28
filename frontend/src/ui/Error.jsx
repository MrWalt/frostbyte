import { styled } from "styled-components";

const Error = styled.span`
  color: var(--color-red-500);
  font-size: 1.4rem;

  position: absolute;
  top: 0;
  left: 1.8rem;

  animation: blink 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

export default Error;
