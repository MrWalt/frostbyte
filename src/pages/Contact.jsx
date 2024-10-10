import styled from "styled-components";

import Heading from "../ui/Heading";
import Section from "../ui/Section";
import TextArea from "../ui/TextArea";
import FrequentlyAskedQuestions from "../ui/FrequentlyAskedQuestions";
import ContactOptions from "../ui/ContactOptions";

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
          below, you may find your answer there. If you require further
          assistance, please contact our support team by any means.
        </TextArea>
        <FrequentlyAskedQuestions />
        <Heading variation="secondary">Still need help?</Heading>
        <TextArea>
          You may select one or more options, we recommend just chosing one as
          it will become very difficult for our support team to organize your
          ticket and provide you the best support possible. Please do not send
          tickets repeatedly, this only increases the wait.
        </TextArea>
        <ContactOptions />
      </StyledDiv>
    </Section>
  );
}
