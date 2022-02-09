import React from "react";

import {
  Container,
  ImageProduct,
  ProductName,
  ProductOwned,
  ProductPrice
} from "./styles";

interface ProductsProps {
  title: string;
  price: number;
  imageUrl: string;
  owned: string;
}

export function ProductCard({ title, price, imageUrl, owned }: ProductsProps) {
  return (
    <Container>
      <ImageProduct src={imageUrl} />
      <ProductName>{title}</ProductName>
      <ProductPrice>U$ {price}</ProductPrice>
      <ProductOwned>Obtido em {owned}</ProductOwned>
    </Container>
  );
}
