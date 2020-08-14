import React from "react";
import styled from "styled-components";

import Cover from "./Cover";
import CategoryGallery from "./CategoryGallery";

export default () => {
  return (
    <Wrapper>
      <Cover />
      <CategoryGallery />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
