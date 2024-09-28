import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "./Header";

const Main = styled.main`
  width: 100%;
  padding: 96px 48px 0px 48px;
`;

export default function AppLayout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
