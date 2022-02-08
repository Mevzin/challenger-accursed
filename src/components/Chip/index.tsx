import React from "react";
import { AvatarImage, Container } from "./styles";

interface ChipProps {
  avatarUrl: string;
}

export function Chip({ avatarUrl }: ChipProps) {
  console.log(avatarUrl);
  return (
    <Container>
      <AvatarImage src={avatarUrl} />
    </Container>
  );
}
