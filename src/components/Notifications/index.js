import React from "react";
import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import {
  Container,
  Card,
  CardHeader,
  CardFooter,
  Avatar,
  Description,
  Bold,
  Details,
  Date,
  Actions,
  Option,
  OptionLabel,
} from "./styles";

import avatar from "../../images/avatar.png";
import img8 from "../../images/08.png";
import img9 from "../../images/09.png";

const item = [
  {
    key: String(Math.random()),
    img: avatar,
    user: "Rodrigo",
    userName: "@rodriguin221",
    date: '2 dias'
  },
  {
    key: String(Math.random()),
    img: img9,
    user: "Luciana",
    userName: "@lucy221jet",
    date: '3 horas'
  },
  {
    key: String(Math.random()),
    img: img8,
    user: "Stephanie",
    userName: "@ste",
    date: '5 minutos'
  },
];

export default function Notifications() {
  return (
    <Container>

      {item.map(item => (
        <Card key={item.key}>
          <CardHeader>
            <Avatar source={item.img} />
            <Description>
              <Bold>{item.user}</Bold> entrou no PicPay como <Bold>{item.userName}</Bold> Agora, vocês podem enviar ou receber dinheiro entre si pelo smartphone gratuitamente
            </Description>
          </CardHeader>

          <CardFooter>
            <Details>
              <Date>há {item.date}</Date>
            </Details>

            <Actions>
              <Option>
                <AntDesign name="addusergroup" size={14} color="#10c86e" />
                <OptionLabel>Seguir</OptionLabel>
              </Option>
            </Actions>
          </CardFooter>
        </Card>
      ))}
    </Container>
  );
}
