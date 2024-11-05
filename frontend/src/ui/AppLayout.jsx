import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const Main = styled.main`
  width: 100%;

  min-height: calc(100vh - 10rem);

  padding-top: 8rem;

  background-color: var(--color-grey-900);
`;

export default function AppLayout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
