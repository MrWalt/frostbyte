import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const Main = styled.main`
  width: 100%;
  padding-top: 6.4rem;

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
