import styled from "styled-components";

export const Container = styled.div`
  height: 324px;
  width: 310px;
  display: row;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 24px;
  margin-top: 46px;
  margin-left: 58px;
  transition: 0.5s;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    transition: 0.5s;
    top: -4px;
    box-shadow: 0 4px 10px #999;
  }
`;

export const ProductName = styled.h1`
  text-align: start;
  font-size: 25px;
  margin: 0px 0px -10px 15px;
`;

export const ProductPrice = styled.p`
  text-align: start;
  margin-left: 15px;
`;

export const ProductOwned = styled.p`
  text-align: start;
  margin-left: 15px;
`;

export const ImageProduct = styled.img`
  margin-top: 15px;
  height: 190px;
  width: 90%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;
