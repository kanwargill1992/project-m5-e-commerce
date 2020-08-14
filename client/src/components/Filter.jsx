import React from "react";
import styled from "styled-components";

import { useShopContext } from "../context/ShopContext";
import { setCategory } from "../context/actions";

export default function Filter() {
  const {
    state: { categories },
    dispatch,
  } = useShopContext();

  return (
    <Wrapper>
      <label htmlFor="categories">Select a category</label>
      <CategoryFilter
        onChange={(e) => dispatch(setCategory(e.target.value))}
        name="categories"
        id="categories"
      >
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </CategoryFilter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border-top: 1px solid #dee0df; */
  /* padding-top: 10px; */
`;

const CategoryFilter = styled.select`
  grid-column-start: 1;
  width: 180px;
  height: 35px;
  margin-top: 10px;
  background-color: #dee0df;
  border-radius: 5px;
  cursor: pointer;
`;
