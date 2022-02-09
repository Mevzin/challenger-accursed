import React from "react";
import { ProfileCard } from "../../components/ProfileCard";
import { Container } from "./styles";

export function Home() {
  const name = "Thiago Torres";
  const imageUrl = "https://avatars.githubusercontent.com/u/47527659?v=4";
  const amount = 123456;

  return (
    <Container>
      <ProfileCard name={name} avatarUrl={imageUrl} amount={amount} />
    </Container>
  );
}
