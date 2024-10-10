import styled from "styled-components";
import Button from "./Button";
import { HiEnvelope, HiPhone } from "react-icons/hi2";

const StyledDiv = styled.div`
  height: 24rem;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2.4rem;

  margin-top: 2.4rem;

  color: var(--color-grey-0);
  font-size: 1.6rem;
`;

const Card = styled.div`
  width: 20rem;
  height: 100%;

  padding-top: 2.4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  text-align: center;

  border: 1px solid var(--color-grey-700);
  background-color: var(--color-grey-800);

  svg {
    width: 6.4rem;
    height: 6.4rem;
  }

  div {
    padding: 0 1.2rem;
  }
`;

const StyledP = styled.p`
  font-size: 2rem;
`;

const HoursSpan = styled.span`
  font-size: 2.4rem;
  color: var(--color-brand-500);
  font-weight: 600;
`;

const DaysSpan = styled.span`
  font-size: 1.6rem;
`;

const ResponseParagraph = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-400);
`;

export default function ContactOptions() {
  return (
    <StyledDiv>
      <Card>
        <div>
          <HiEnvelope />
          <StyledP>
            Available <HoursSpan>24</HoursSpan>/<DaysSpan>7</DaysSpan>
          </StyledP>
          <ResponseParagraph>Reply within 24 hours</ResponseParagraph>
        </div>
        <Button>Email Us</Button>
      </Card>
      <Card>
        <div>
          <HiPhone />
          <StyledP>
            Available <HoursSpan>9</HoursSpan>
            <DaysSpan>AM</DaysSpan> to <HoursSpan>8</HoursSpan>
            <DaysSpan>PM</DaysSpan>
          </StyledP>
          <ResponseParagraph>Immediate reply</ResponseParagraph>
        </div>
        <Button>+389 71 387 179</Button>
      </Card>
    </StyledDiv>
  );
}
