import styled from "styled-components";
import Accordion from "../ui/Carousel";
import FeaturedCard from "../ui/FeaturedCards";
import Giveaways from "../ui/Giveaways";

const Section = styled.section`
  width: 100%;
  height: 100%;

  background-image: url("/background.png");
  /* background-size: cover; */
  /* background-position: center; */

  display: flex;
  align-items: center;
  justify-content: center;

  /* border-bottom: 1px solid var(--color-brand-200); */

  padding: 4.8rem 0 9.6rem 0;
`;

const StyledDiv = styled.div`
  /* height: 100%; */
  width: 140rem;

  /* margin: 4.8rem auto 9.6rem auto; */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4.8rem;
`;

const StyledSpan = styled.span`
  text-transform: uppercase;
  padding: 1.8rem 3.2rem;
  margin-top: 3.6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  /* align-self: start; */

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
          <FeaturedCard />
        </StyledDiv>
      </Section>
      <Giveaways />
    </>
  );
}
