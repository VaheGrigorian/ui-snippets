import React from "react";
import styled from "styled-components";

const Figure = styled.figure``;
const Title = styled.p``;
const Category = styled.p``;
const Rating = styled.span``;
const SoldCount = styled.span``;
const Price = styled.span``;
const PrevPrice = styled.span`
  text-decoration: line-through;
`;
const Discount = styled.span``;

export default ({
  title,
  img,
  alt,
  category,
  rating,
  soldCount,
  price,
  currency,
  discount
}) => (
  <Figure>
    <img srcSet={img} alt={alt} />
    <figcaption>
      <Title>{title}</Title>
      <Category>{category}</Category>
      <Rating points={rating} />
      <SoldCount>({soldCount})</SoldCount>

      <p>
        <Price>
          {currency} {price}
        </Price>
        <PrevPrice>{price + price / discount}</PrevPrice>
        <Discount>({discount}% off)</Discount>
      </p>
    </figcaption>
  </Figure>
);
