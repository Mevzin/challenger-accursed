import React from "react";
import { ProductCard } from "../../components/ProductCard";
import { ProfileCard } from "../../components/ProfileCard";
import { Container, Products } from "./styles";

export function Home() {
  const name = "Thiago Torres";
  const imageUrl = "https://avatars.githubusercontent.com/u/47527659?v=4";
  const amount = 123456.56;

  return (
    <Container>
      <ProfileCard name={name} avatarUrl={imageUrl} amount={amount} />
      <Products>
        <ProductCard
          title="Ford Mustang GT"
          price={34540}
          imageUrl="https://quatrorodas.abril.com.br/wp-content/uploads/2020/01/ford-mustang-gt350r-16.jpg?resize=650,434"
          owned="22/12/2021"
        />
        <ProductCard
          title="Mitsubishi Lancer Evo"
          price={64540}
          imageUrl="https://carro.blog.br/wp-content/uploads/2021/08/lancer-evolution-x-alan-correa.jpg"
          owned="25/12/2021"
        />
      </Products>
    </Container>
  );
}
