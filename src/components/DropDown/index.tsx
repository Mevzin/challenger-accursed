import React from "react";

import { Container, OptionDrop } from "./styles";

type OptionProps = Array<{
  value: number;
  label: string;
}>;

interface DropDownProps {
  options: OptionProps;
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
