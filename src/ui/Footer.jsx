import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 10rem;

  background-color: var(--color-brand-900);
  border-top: 1px solid var(--color-brand-500);
  /* margin-top: auto; */
`;

export default function Footer() {
  return <StyledFooter>This is the footer</StyledFooter>;
}
