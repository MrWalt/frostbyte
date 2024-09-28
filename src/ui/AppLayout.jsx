import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "./Header";

const Main = styled.main`
  width: 100%;
  padding-top: 6.4rem;
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
