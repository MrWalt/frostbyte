import styled from "styled-components";
import Section from "../ui/Section";
import FilterMenu from "../ui/FilterMenu";
import Card from "../ui/Card";
import { useParams } from "react-router-dom";
import Heading from "../ui/Heading";

const Container = styled.div`
  margin: 0 auto;
  width: 140rem;

  display: grid;
  grid-template-columns: 1fr 4fr;

  gap: 2rem;
  row-gap: 3.6rem;
`;

const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;

  gap: 0.8rem;
`;

const StyledHeading = styled(Heading)`
  grid-column: 1 / -1;
  justify-self: center;
`;

export default function Products() {
  const params = useParams();
  return (
    <Section>
      <Container>
        <StyledHeading variation="secondary">
          {params?.category ? params.category : "All Products"}
        </StyledHeading>
        <FilterMenu />
        <CardBox>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardBox>
      </Container>
    </Section>
  );
}
