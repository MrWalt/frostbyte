import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 1.2rem 2.4rem;

  color: var(--color-grey-0);
`;

const Paragraph = styled.p`
  font-size: 1.6rem;
`;

export default function TextArea({ children }) {
  return (
    <StyledDiv>
      <Paragraph>{children}</Paragraph>
    </StyledDiv>
  );
}
