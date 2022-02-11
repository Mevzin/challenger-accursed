import styled from "styled-components";

export const Container = styled.div`
  height: 106px;
  width: 371px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 24px;
  margin-top: 46px;
  margin-left: 58px;
`;

export const AvatarImage = styled.img`
  height: 80px;
  width: 80px;
  margin-left: 27px;
  border-radius: 50%;
  border: 1px solid white;
`;

export const UserData = styled.div`
  text-align: flex-start;
`;

export const UserName = styled.h2`
  font-size: 20px;
`;

export const CurrentAmount = styled.h2`
  font-size: 16px;
  text-align: start;
`;

export const DropDownButton = styled.button`
  height: 50px;
  width: 90px;
  border: 0.5px solid #cfc9c9;
  background: rgba(0, 0, 0, 0);
  font-size: 20px;
  color: white;
  border-radius: 10px;
  transition: 1s;
  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;
