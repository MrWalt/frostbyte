import styled from "styled-components";
import Heading from "./Heading";
import questions from "../data/frequentlyAskedQuestions";
import Accordion from "./Accordion";

const Container = styled.div`
  margin-top: 3.2rem;
  margin-bottom: 4.8rem;
`;

export default function FrequentlyAskedQuestions() {
  return (
    <Container>
      <Heading variation="tertiary">Frequently Asked Questions</Heading>
      {questions.map((item) => (
        <Accordion
          question={item.question}
          answer={item.answer}
          key={item.question}
        />
      ))}
    </Container>
  );
}
