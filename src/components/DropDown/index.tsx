import React from "react";

import { Container, OptionDrop } from "./styles";

interface DropDownProps {
  options: [];
}

export function DropDown({ options }: DropDownProps) {
  return (
    <Container>
      {options.map((options: any) => (
        <>
          <OptionDrop key={options.value}>{options.label}</OptionDrop>
        </>
      ))}
    </Container>
  );
}
