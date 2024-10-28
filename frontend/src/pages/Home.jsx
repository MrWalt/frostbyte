import styled from "styled-components";
import Carousel from "../ui/Carousel";
import FeaturedCards from "../ui/FeaturedCards";
import Giveaways from "../ui/Giveaways";
import Section from "../ui/Section";

const StyledSection = styled(Section)`
  background-image: url("/background.png");

  padding-top: 0;
  padding-bottom: 0;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default function Home() {
  return (
    <>
      <StyledSection>
        <StyledDiv>
          <Carousel />
          <FeaturedCards />
          <Giveaways />
        </StyledDiv>
      </StyledSection>
    </>
  );
}
