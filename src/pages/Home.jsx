import styled from "styled-components";
import Carousel from "../ui/Carousel";
import FeaturedCards from "../ui/FeaturedCards";
import Giveaways from "../ui/Giveaways";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const StyledSection = styled(Section)`
  background-image: url("/background.png");

  padding-top: 0;
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
          <Heading variation="secondary" decoration="box">
            Join our giveaways
          </Heading>
          <Giveaways />
        </StyledDiv>
      </StyledSection>
    </>
  );
}
