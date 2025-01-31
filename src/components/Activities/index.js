import React from "react";
import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  UserName,
  Avatar,
  Description,
  Bold,
  Value,
  Details,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from "./styles";

import avatar from "../../images/avatar.png";

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@matheussilva_</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Rodrigo Gonçalves</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 20,00</Value>

            <Divider />

            <Feather name="lock" color="#fff" />
            <Date>há 3 dias</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
            
            <Option>
              <AntDesign name="hearto" size={14} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
