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
      <Label htmlFor="categories">Select a category</Label>
      <CategoryFilter
        onChange={(e) => dispatch(setCategory(e.target.value))}
        name="categories"
        id="categories"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </CategoryFilter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  font-size: 20px;
`;

const CategoryFilter = styled.select`
  grid-column-start: 1;
  width: 200px;
  height: 35px;
  margin-top: 10px;
  background-color: #dee0df;
  border-radius: 5px;
  cursor: pointer;
`;
