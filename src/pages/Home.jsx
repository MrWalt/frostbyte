import styled from "styled-components";
import Accordion from "../ui/Accordion";
import FeaturedCard from "../ui/FeaturedCards";

const Container = styled.div`
  height: 100%;
  width: 120rem;

  margin: 4.8rem auto;

  display: flex;
  justify-content: space-between;
  align-items: start;
  /* padding: 4.8rem 12.8rem; */
  gap: 4.8rem;
`;

export default function Home() {
  return (
    <Container>
      <Accordion />
      <FeaturedCard />
    </Container>
  );
}
