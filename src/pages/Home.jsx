import styled from "styled-components";
import Carousel from "../ui/Carousel";
import FeaturedCards from "../ui/FeaturedCards";
import Giveaways from "../ui/Giveaways";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const StyledSection = styled(Section)`
  background-image: url("/background.png");
`;

const StyledDiv = styled.div`
  width: 140rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 3.2rem;
`;

const StyledSpan = styled.span`
  text-transform: uppercase;
  padding: 1.8rem 3.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.8rem;
  color: var(--color-grey-0);
  border: 1px solid var(--color-brand-700);
  background-color: var(--color-brand-900);
`;

export default function Home() {
  return (
    <>
      <StyledSection>
        <StyledDiv>
          <Carousel />
          <StyledSpan>Or</StyledSpan>
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
