import styled from "styled-components";
import Accordion from "../ui/Carousel";
import FeaturedCard from "../ui/FeaturedCards";
import Giveaways from "../ui/Giveaways";

const Section = styled.section`
  height: 100%;
  width: 120rem;

  margin: 4.8rem auto 9.6rem auto;

  display: grid;
  grid-template-columns: 1fr 8rem 1fr;
  gap: 4.8rem;
`;

const StyledSpan = styled.span`
  text-transform: uppercase;
  padding: 1.8rem 2.4rem;
  margin-top: 3.6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  align-self: start;

  font-size: 1.8rem;
  color: var(--color-grey-0);
  background-color: var(--color-brand-900);
`;

export default function Home() {
  return (
    <>
      <Section>
        <Accordion />
        <StyledSpan>Or</StyledSpan>
        <FeaturedCard />
      </Section>
      <Giveaways />
    </>
  );
}
