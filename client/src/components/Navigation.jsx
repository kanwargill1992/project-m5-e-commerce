import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import useClickOutside from "../hooks/useClickOutside";
import { useShopContext } from '../context/ShopContext'
import { auth } from "firebase";

export default () => {
  const { state } = useShopContext();
  const { cart, currentUser, signedIn } = state;
  const [active, setActive] = useState(false);
  const toggleMenu = () => setActive(!active);
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, setActive);

  return (
    <Wrapper ref={dropdownRef}>
      <BurgerMenu onClick={toggleMenu}>
        <BurgerLine1 active={active} />
        <BurgerLine2 active={active} />
        <BurgerLine3 active={active} />
      </BurgerMenu>
      <NavLinks onClick={toggleMenu} active={active}>
        <DropdownLink to="/products">Shop</DropdownLink>
        <DropdownLink to="/cart">
          Cart
          <CartItemCount>({cart.length})</CartItemCount>
        </DropdownLink>
        {currentUser && signedIn ? (
          <DropdownLink to="/" onClick={() => auth().signOut()}>
            Sign out
          </DropdownLink>
        ) : (
          <DropdownLink to="/sign-in">Sign In</DropdownLink>
        )}
      </NavLinks>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
  }
`;

const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`;

const BurgerLine = styled.div`
  width: 35px;
  height: 3px;
  margin: 4px;
  background: white;
  transition: transform 0.2s linear, opacity 0.1s linear;
`;

const BurgerLine1 = styled(BurgerLine)`
  transform-origin: top left;
  transform: ${(p) => p.active && "rotate(45deg)"};
`;

const BurgerLine2 = styled(BurgerLine)`
  transform: ${(p) => p.active && "translateX(200%)"};
  opacity: ${(p) => (p.active ? 0 : 1)};
`;

const BurgerLine3 = styled(BurgerLine)`
  transform-origin: bottom left;
  transform: ${(p) => p.active && "rotate(-45deg)"};
`;

const NavLinks = styled.div`
  display: ${p => p.active ? "flex" : "none"};
  flex-direction: column;
  position: absolute;
  top: 7vh;
  left: 0;
  width: 100%;
  background: rgba(23, 25, 25, 0.5);
  opacity: ${(p) => (p.active ? 1 : 0)};
  transition: all 0.2s linear;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: relative;
    top: 0;
    background: none;
    opacity: 1;
  }
`;

const DropdownLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  color: #fff;
  font-size: 18px;

  &:active,
  &:visited {
    color: #fff;
  }

  &:hover {
    background: rgba(25, 25, 25, 0.55);
  }

  @media (min-width: 768px) {
    border: 3px solid transparent;
    transition: all 0.2s ease;
    width: 80px;

    &:hover {
      border-bottom: 3px solid white;
      background: none;
    }
  }
`;

const CartItemCount = styled.span``