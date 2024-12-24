import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  gap: 20px;
  width: 100%;
`;

const Gallery = ({ columns, imageSize }) => {
  const products = [
    { id: 1, name: 'Product 1', imageUrl: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Product 2', imageUrl: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Product 3', imageUrl: 'https://via.placeholder.com/200' },
    { id: 4, name: 'Product 4', imageUrl: 'https://via.placeholder.com/200' },
    { id: 5, name: 'Product 5', imageUrl: 'https://via.placeholder.com/200' },
    { id: 6, name: 'Product 6', imageUrl: 'https://via.placeholder.com/200' },
  ];

  return (
    <GalleryContainer columns={columns}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          name={product.name}
          imageUrl={product.imageUrl}
          imageSize={imageSize}
        />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
