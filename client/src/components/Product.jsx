import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { addItemToCart } from "../context/actions";
import { useShopContext } from "../context/ShopContext";

export const checkAvailability = (numInStock) => {
  const available = numInStock > 0;
  const availability = available ? "In stock" : "Out of stock";
  return { available, availability };
};

export default ({ item }) => {
  const { dispatch } = useShopContext();
  const { id, imageSrc, name, price, numInStock } = item;
  const { available, availability } = checkAvailability(numInStock);
  const handleAddToCart = () => dispatch(addItemToCart(id));

  return (
    <Card>
      <ImageContainer>
        <Image src={imageSrc} alt={name} />
      </ImageContainer>

      <InfoWrapper>
        <Name>{name}</Name>

        <PriceAvailability>
          <Price>{price}</Price>
          <Availability available={available}>{availability}</Availability>
        </PriceAvailability>

        <ActionWrapper>
          <Link to={`/products/${id}`}>
            <MoreInfo>More info</MoreInfo>
          </Link>

          <AddToCart onClick={handleAddToCart} disabled={!available}>
            Add to Cart
          </AddToCart>
        </ActionWrapper>
      </InfoWrapper>
    </Card>
  );
};

/*
The product wrapper displays flex-direction column in order to acheive a card format for each
item. It is clear that there is just not enough text info in the data for the img to be display
inline with the text, as the image takes up much more room, and thus looks totally lopsided.
*/

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 325px;
  height: 500px;
  padding: 30px;
  text-align: center;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 60%;
  padding: 10px;
`;

const Image = styled.img`
  object-fit: contain;
  height: 100%;
  max-width: 100%;
`;

const InfoWrapper = styled.div`
  width: 90%;
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 40%;
  margin-top: 20px;
  justify-content: space-between;
`;

const PriceAvailability = styled.div`
  display: flex;
  flex-direction: row;
`;

const Name = styled.p`
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 600;
`;

const Price = styled.p`
  padding: 5px;
  font-weight: bold;
  font-size: 20px;
`;

const Availability = styled.p`
  padding: 5px;
  font-size: 20px;
  color: ${(p) => (p.available ? "green" : "gray")};
`;

const ActionWrapper = styled.div`
  display: flex;
`;

const MoreInfo = styled.button`
  width: 120px;
  font-size: 18px;
  cursor: pointer;
`;

const AddToCart = styled(MoreInfo)`
  &:hover {
    background: green;
  }

  ${(p) =>
    p.disabled &&
    css`
      &:hover {
        background: none;
        cursor: not-allowed;
        color: #ccc;
      }
    `}
`;
