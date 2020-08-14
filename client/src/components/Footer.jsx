import React from "react";
import styled from "styled-components";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

export default () => {
  return (
    <Wrapper>
      <Copyright>&copy; 2020 The ARK Project. All rights reserved.</Copyright>
      <IconWrapper>
        <IconWrap>
          <FiFacebook style={{ color: "#ccc" }} size={20} />
        </IconWrap>
        <IconWrap>
          <FiInstagram style={{ color: "#ccc" }} size={20} />
        </IconWrap>
        <IconWrap>
          <FiLinkedin style={{ color: "#ccc" }} size={20} />
        </IconWrap>
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  height: 100%;

  @media (min-width: 1200px) {
    padding: 0 10%;
  }
`;

const IconWrapper = styled.div`
  display: flex;
`;

const IconWrap = styled.button`
  margin: 0.5rem;
  border: none;
  cursor: pointer;
`;

const Copyright = styled.span`
  font-size: 1rem;
  color: #ccc;
  margin-left: 0.5rem;
`;
