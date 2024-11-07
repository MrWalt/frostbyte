import styled from "styled-components";
import Carousel from "../ui/Carousel";
import FeaturedCards from "../ui/FeaturedCards";
import Giveaways from "../ui/Giveaways";
import Section from "../ui/Section";

const StyledSection = styled(Section)`
  background-image: url("/background.webp");

  padding-top: 0;
  padding-bottom: 0;
`;

export default function Home() {
  return (
    <>
      <StyledSection>
        <Carousel />
        <FeaturedCards />
        <Giveaways />
      </StyledSection>
    </>
  );
}
