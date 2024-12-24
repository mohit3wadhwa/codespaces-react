import React from 'react';
import styled from 'styled-components';

const ProductItemContainer = styled.div`
  text-align: center;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
`;

const ProductImage = styled.img`
  width: ${({ imageSize }) => `${imageSize}px`};
  height: ${({ imageSize }) => `${imageSize}px`};
  object-fit: cover;
  border-radius: 8px;
`;

const ProductItem = ({ name, imageUrl, imageSize }) => {
  return (
    <ProductItemContainer>
      <ProductImage src={imageUrl} alt={name} imageSize={imageSize} />
      <h4>{name}</h4>
    </ProductItemContainer>
  );
};

export default ProductItem;
