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
  function MoneyFormatted(value: number) {
    return value.toLocaleString("br");
  }

  return (
    <Container>
      <ImageProduct src={imageUrl} />
      <ProductName>{title}</ProductName>
      <ProductPrice>R$ {MoneyFormatted(price)}</ProductPrice>
      <ProductOwned>Obtido em {owned}</ProductOwned>
    </Container>
  );
}
