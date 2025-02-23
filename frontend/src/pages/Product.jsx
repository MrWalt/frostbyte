import styled from "styled-components";
import FullProduct from "../features/products/FullProduct";
import Section from "../ui/Section";

const StyledSection = styled(Section)`
  background-image: url("/background.webp");

  padding: 0;
`;

export default function Product() {
  return (
    <StyledSection>
      <FullProduct />
    </StyledSection>
  );
}
