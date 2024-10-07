import styled from "styled-components";
import Accordion from "../ui/Carousel";
import FeaturedCards from "../ui/FeaturedCards";
import Giveaways from "../ui/Giveaways";

const Section = styled.section`
  width: 100%;
  height: 100%;

  background-image: url("/background.png");

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4.8rem 0 9.6rem 0;
`;

const StyledDiv = styled.div`
  width: 140rem;

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
      <Section>
        <StyledDiv>
          <Accordion />
          <StyledSpan>Or</StyledSpan>
          <FeaturedCards />
        </StyledDiv>
      </Section>
      <Giveaways />
    </>
  );
}
