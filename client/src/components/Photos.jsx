import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default ({ title, imageSrc }) => {
  return (
    <Wrapper>
      <ImageWrapper src={imageSrc} />
      <Content>
        <Title>{title}</Title>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1;
  border-radius: 1rem;
  overflow: hidden;
  height: 30rem;

  &:hover {
    cursor: pointer;
  }
`;

const ImageWrapper = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  &:hover {
    transform: scale(1.1);
    transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

const Content = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  position: absolute;
`;

const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 32px;
`;
