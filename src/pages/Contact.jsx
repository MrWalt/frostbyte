import styled from "styled-components";

import Heading from "../ui/Heading";
import Section from "../ui/Section";
import TextArea from "../ui/TextArea";
import FrequentlyAskedQuestions from "../ui/FrequentlyAskedQuestions";

const StyledDiv = styled.div`
  width: 92rem;
  margin: 0 auto;
`;

export default function Contact() {
  return (
    <Section id="contact">
      <StyledDiv>
        <Heading variation="secondary">Contact us</Heading>
        <TextArea>
          Before you submit a ticket or call us, please take a look at our FAQ
          below, you may find your answer there.
        </TextArea>
        <FrequentlyAskedQuestions />
        <Heading variation="secondary">Still need help?</Heading>
        <TextArea>
          You may select one or more options, we recommend just chosing one as
          it will become very difficult for our support team to organize your
          ticket and please do not send tickets repeatedly, this only increases
          the wait.
        </TextArea>
      </StyledDiv>
    </Section>
  );
}
