import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Filter from "./Filter";

import Product from "./Product";
import { useShopContext } from "../context/ShopContext";

export default () => {
  const { state } = useShopContext();
  const { items, category, itemIds } = state;
  const [filteredIds, setFilteredIds] = useState(null);

  // Filter the ids that correspond to the current category.
  useEffect(() => {
    category === "All"
      ? setFilteredIds(itemIds)
      : setFilteredIds(
          itemIds.filter((itemId) => items[itemId].category === category)
        );
  }, [itemIds, category]);

  return (
    <>
      <FilterDiv>
        <Filter>Choose A Category</Filter>
      </FilterDiv>
      <GridWrapper>
        {filteredIds &&
          filteredIds.map((itemId) => {
            const item = items[itemId];
            return <Product key={item.id} item={item} />;
          })}
      </GridWrapper>
    </>
  );
};

const FilterDiv = styled.div`
  border-bottom: 1px solid #dee0df;

  height: 150px;

  display: grid;
  grid: auto / 1fr;
  gap: 50px 30px;

  margin: 100px 30px 0px 30px;
  padding: 30px;

  align-items: center;
  justify-items: center;

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

const GridWrapper = styled.div`
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
