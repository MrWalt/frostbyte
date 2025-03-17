import styled from "styled-components";

import Heading from "../ui/Heading";
import Section from "../ui/Section";
import TextArea from "../ui/TextArea";
import FrequentlyAskedQuestions from "../ui/FrequentlyAskedQuestions";
import ContactOptions from "../ui/ContactOptions";
import Background from "../ui/Background";

const StyledDiv = styled.div`
  width: 92rem;
  margin: 0 auto;
`;

const StyledSpan = styled.span`
  color: var(--color-brand-500);
`;

export default function Contact() {
  return (
    <Section id="contact">
      <Background>
        <StyledDiv>
          <Heading $variation="secondary">Contact us</Heading>
          <TextArea>
            Before reaching out to our support team, please take a look at our
            <StyledSpan> Frequently Asked Questions</StyledSpan> below. You may
            find answers to your questions there, saving you time and effort.
          </TextArea>
          <FrequentlyAskedQuestions />
          <Heading $variation="secondary">Still need help?</Heading>
          <TextArea>
            If you've tried our troubleshooting tips and still need assistance,
            please contact our dedicated support team. We're committed to
            providing prompt and effective solutions to your technical issues.
            You can reach us through the following methods.
          </TextArea>
          <ContactOptions />
        </StyledDiv>
      </Background>
    </Section>
  );
}
