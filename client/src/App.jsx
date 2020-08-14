import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./GlobalStyle";
import { useShopContext } from "./context/ShopContext";
import { STATUS } from "./context/actions";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";
import Error from "./components/Error";

export default () => {
  const { state } = useShopContext();
  const { status } = state;

  switch (status) {
    case STATUS.IDLE:
      return (
        <Router>
          <Grid>
            <GlobalStyle />

            <HeaderWrapper>
              <Header />
            </HeaderWrapper>

            <ContentWrapper>
              <Content />
            </ContentWrapper>

            <FooterWrapper>
              <Footer />
            </FooterWrapper>
          </Grid>
        </Router>
      );

    case STATUS.LOADING:
      return <Spinner />;

    case STATUS.ERROR:
      return <Error />;

    default:
      return <Error />;
  }
};

const Grid = styled.div`
  display: grid;
  grid: 7vh auto 6vh / 1fr;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;

const HeaderWrapper = styled.div`
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 1vh 15px;
  width: 100%;
  height: 100%;
  background: rgba(32, 48, 64, 1);
`;

const ContentWrapper = styled.div`
  grid-area: content;
`;

const FooterWrapper = styled.div`
  grid-area: footer;
  height: 100%;
  background: rgba(32, 48, 64, 1);
`;
