import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;

  align-self: start;
  background-color: red;
`;

export default function FilterMenu() {
  return (
    <Box>
      <span>FILTER 1</span>
      <span>FILTER 2</span>
      <span>FILTER 3</span>
      <span>FILTER 4</span>
    </Box>
  );
}
