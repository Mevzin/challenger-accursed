import React, { useState } from "react";
import { DropDown } from "../DropDown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

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
  const [isActivy, setIsActivy] = useState(false);

  const options = [
    { label: "Sua Conta", value: 1 },
    { label: "Utilidades", value: 2 },
    { label: "Depositos", value: 3 },
    { label: "Saques", value: 4 },
    { label: "Converções", value: 5 },
    { label: "Inventario", value: 6 },
    { label: "Configurações", value: 7 }
  ];

  function MoneyFormatted(value: number) {
    return value.toLocaleString("br");
  }

  function handleDropDown() {
    setIsActivy(!isActivy);
  }

  return (
    <Container>
      <AvatarImage src={avatarUrl} />
      <UserData>
        <UserName>Olá, {name}</UserName>
        <CurrentAmount>Saldo: R$ {MoneyFormatted(amount)}</CurrentAmount>
        <FontAwesomeIcon icon={faCoffee} />
      </UserData>
      <DropDownButton onClick={handleDropDown}>
        {isActivy && <DropDown options={options} />}
      </DropDownButton>
    </Container>
  );
}
