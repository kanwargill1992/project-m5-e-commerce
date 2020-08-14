import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Filter from "./Filter";
import { useShopContext } from "../context/ShopContext";
import filterBgSrc from "../assets/filter/filter-bg-1.jpg";
import ProductList from "./ProductList";

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
  }, [itemIds, category, items]);

  return (
    <Wrapper>
      <FilterDiv>
        <FilterSection>
          <Filter />
        </FilterSection>
        <FilterBg src={filterBgSrc} />
      </FilterDiv>
      <ProductList filteredIds={filteredIds} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterDiv = styled.div`
  display: grid;
  grid: 400px / 1fr 1fr 1fr 1fr;
  grid-template-areas: ". filter .";
  padding: 30px 0;
  width: 100%;
  position: relative;
`;

const FilterSection = styled.div`
  grid-area: filter;
`;

const FilterBg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
`;
