import { dotWave } from "ldrs";
import styled from "styled-components";

dotWave.register();

const Box = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
`;

export default function Loader({ size = 60 }) {
  return (
    <Box>
      <l-dot-wave speed="1" color="white" size={size}></l-dot-wave>
    </Box>
  );
}
