import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  width: 40rem;
  height: 60rem;

  background-color: rgb(17, 24, 39, 0.95);
  border: 1px solid var(--color-grey-800);
  backdrop-filter: blur(8px);
`;

export default function LoginForm() {
  return <Container></Container>;
}
