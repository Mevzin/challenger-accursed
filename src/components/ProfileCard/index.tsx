import React from "react";

import {
  Container,
  UserName,
  AvatarImage,
  CurrentAmount,
  UserData,
  DropDownButton
} from "./styles";

interface ProfileProps {
  name: string;
  avatarUrl: string;
  amount: number;
}

export function ProfileCard({ name, avatarUrl, amount }: ProfileProps) {
  return (
    <Container>
      <AvatarImage src={avatarUrl} />
      <UserData>
        <UserName>Olá, {name}</UserName>
        <CurrentAmount>{amount}</CurrentAmount>
      </UserData>
      <DropDownButton></DropDownButton>
    </Container>
  );
}
