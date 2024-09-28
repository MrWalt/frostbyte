import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: 3.6rem;
  /* text-transform: uppercase; */
  font-weight: 500;
  margin: 3.2rem auto;
  letter-spacing: -1px;

  text-align: center;
`;

export default function PrimaryHeading({ text }) {
  return <StyledHeading>{text}</StyledHeading>;
}
