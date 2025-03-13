import styled from "styled-components";
import TextArea from "../ui/TextArea";
import Heading from "../ui/Heading";

const Container = styled.div`
  width: 90rem;
  margin: 4.8rem auto;

  div {
    border-bottom: 1px solid var(--color-grey-800);
    padding: 3.2rem;

    &:last-of-type {
      border: none;
    }
  }
`;

export default function Legal() {
  return (
    <Container>
      <Heading $variation="secondary">Legal</Heading>
      <TextArea>
        By accessing and using the FrostByte website, you agree to be bound by
        these terms and conditions. FrostByte reserves the right to modify these
        terms at any time without prior notice. Your continued use of the
        website after any such changes constitutes your acceptance of the new
        terms.
      </TextArea>

      <TextArea>
        FrostByte makes no warranties, expressed or implied, and hereby
        disclaims and negates all other warranties, including without
        limitation, implied warranties or conditions of merchantability, fitness
        for a particular purpose, or non-infringement of intellectual property
        or other violation of rights.
      </TextArea>

      <TextArea>
        FrostByte is not responsible for any damages, losses, or liabilities
        arising from the use of our website or products. This includes, but is
        not limited to, direct, indirect, incidental, consequential, or punitive
        damages.
      </TextArea>

      <TextArea>
        The information provided on this website is for general informational
        purposes only and does not constitute professional advice. While we
        strive to ensure accuracy, we cannot guarantee the completeness or
        reliability of the information.
      </TextArea>

      <TextArea>
        It is important to consult with appropriate professionals for specific
        advice tailored to your circumstances. We assume no liability for any
        actions taken based on the information provided on this website.
      </TextArea>
    </Container>
  );
}
