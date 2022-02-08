import React from "react";
import { AvatarImage, Container } from "./styles";

export function Avatar(ImageUrl: string) {
  console.log(ImageUrl);
  return (
    <Container>
      <AvatarImage src="https://avatars.githubusercontent.com/u/47527659?v=4" />
    </Container>
  );
}
