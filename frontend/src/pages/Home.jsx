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

const BackgroundBlur = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-grey-transparent);
  backdrop-filter: blur(2px);
`;

export default function Home() {
  return (
    <>
      <StyledSection>
        <BackgroundBlur>
          <Carousel />
          <FeaturedCards />
          <Giveaways />
        </BackgroundBlur>
      </StyledSection>
    </>
  );
}
