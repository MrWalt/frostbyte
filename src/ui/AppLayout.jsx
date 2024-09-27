import styled from "styled-components";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const StyledContainer = styled.div`
  width: 100%;
  padding: 96px 48px 0px 48px;
`;

export default function AppLayout() {
  return (
    <>
      <Header />
      <StyledContainer>
        <Outlet />
      </StyledContainer>
    </>
  );
}
