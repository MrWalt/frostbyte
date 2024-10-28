import styled from "styled-components";
import TextArea from "../ui/TextArea";
import Heading from "../ui/Heading";

const Container = styled.div`
  width: 90rem;
  margin: 4.8rem auto;

  font-size: 1.6rem;

  div {
    border-bottom: 1px solid var(--color-grey-800);
    padding: 3.2rem;

    &:last-of-type {
      border: none;
    }
  }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 1.2rem;
`;

const StyledSpan = styled.span`
  color: var(--color-brand-500);
`;

export default function About() {
  return (
    <Container>
      <StyledHeading variation="secondary">About us</StyledHeading>
      <TextArea>
        At FrostByte, we're more than just a tech store. We're a beacon of
        innovation, a digital haven for the tech-savvy. We're passionate about
        empowering individuals to harness the power of technology and turn their
        dreams into reality.
      </TextArea>
      <TextArea>
        Our journey began with a simple vision to provide cutting-edge products
        and exceptional customer service. We've grown from a small online store
        to a thriving community of tech enthusiasts, united by a shared love for
        innovation.
      </TextArea>
      <TextArea>
        We understand that technology is more than just hardware and software.
        It's a tool that can revolutionize the way we live, work, and play.
        That's why we meticulously curate our product selection, ensuring that
        every item we offer is of the highest quality and performance. From
        high-powered gaming rigs to sleek and stylish laptops, we have
        everything you need to elevate your digital experience.
      </TextArea>
      <TextArea>
        But we're more than just a retailer. We're a team of dedicated
        professionals who are committed to providing exceptional customer
        support. Whether you have a question about a product, need technical
        assistance, or simply want to chat about the latest tech trends, we're
        here to help.
      </TextArea>

      <StyledHeading variation="tertiary">
        Join the FrostByte community and experience the future of technology,
        <StyledSpan> today.</StyledSpan>
      </StyledHeading>
    </Container>
  );
}
