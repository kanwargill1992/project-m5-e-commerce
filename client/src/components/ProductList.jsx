import React from "react";
import styled from "styled-components";

import { useShopContext } from "../context/ShopContext";
import Product from "./Product";

export default ({ filteredIds }) => {
  const { state } = useShopContext();
  const { items } = state;

  return (
    <ProductsDiv>
      {filteredIds &&
        filteredIds.map((itemId) => {
          const item = items[itemId];
          return <Product key={item.id} item={item} />;
        })}
    </ProductsDiv>
  );
};

const ProductsDiv = styled.div`
  display: grid;
  grid: auto / 1fr;
  gap: 50px 30px;
  padding: 30px;
  margin: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1920px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
