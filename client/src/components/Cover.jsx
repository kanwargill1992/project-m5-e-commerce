import React from "react";
import styled from "styled-components";

import ImageSrc from "../assets/cover/cover-white-horizontal.jpg";

export default () => {
  return (
    <Wrapper>
      <Image src={ImageSrc} alt="wearables" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 93vh;
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
