import styled from "styled-components";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

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
