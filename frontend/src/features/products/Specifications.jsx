import { HiOutlineDocumentText } from "react-icons/hi2";
import styled from "styled-components";
import Heading from "../../ui/Heading";

const Box = styled.div`
  padding-top: 1.8rem;
  padding-left: 2.4rem;
  grid-column: 1 / 3;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 1.2rem;
`;

const WarrantyBox = styled.div`
  padding: 1.2rem;

  display: flex;
  align-items: center;

  font-size: 1.8rem;

  gap: 0.4rem;

  margin-bottom: 0.4rem;

  svg {
    font-size: 2.4rem;
  }
`;

const Warranty = styled.span`
  color: var(--color-brand-500);
`;

const Specification = styled.p`
  font-size: 1.6rem;

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;

export default function Specifications({ specs, warranty }) {
  return (
    <Box>
      <StyledHeading variation="secondary">Specifications</StyledHeading>
      <WarrantyBox>
        <HiOutlineDocumentText />
        <Warranty>{warranty}</Warranty>{" "}
        {warranty !== "No Warranty" ? "warranty" : ""}
      </WarrantyBox>
      {specs.map((item) => (
        <Specification key={item}>&mdash; {item}</Specification>
      ))}
    </Box>
  );
}
