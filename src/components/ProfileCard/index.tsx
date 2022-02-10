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
  function MoneyFormatted(value: number) {
    return value.toLocaleString("br");
  }
  return (
    <Container>
      <AvatarImage src={avatarUrl} />
      <UserData>
        <UserName>Olá, {name}</UserName>
        <CurrentAmount>Saldo: R$ {MoneyFormatted(amount)}</CurrentAmount>
      </UserData>
      <DropDownButton></DropDownButton>
    </Container>
  );
}
