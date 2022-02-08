import React from "react";
import { Chip } from "../../components/Chip";
import { Container } from "./styles";

export function Home() {
  const AvatarUrl = "https://avatars.githubusercontent.com/u/47527659?v=4";

  return (
    <Container>
      <Chip avatarUrl={AvatarUrl} />
    </Container>
  );
}
