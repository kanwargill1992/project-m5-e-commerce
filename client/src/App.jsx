import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default () => {
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
};

const Grid = styled.div`
  display: grid;
  grid: 7vh auto 5vh / 1fr;
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

  @media (min-width: 768px) {
    height: 8vh;
  }
`;

const ContentWrapper = styled.div`
  grid-area: content;
`;

const FooterWrapper = styled.div`
  grid-area: footer;
  height: 100%;
  background: rgba(32, 48, 64, 1);
`;
