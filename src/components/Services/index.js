import React from "react";

import img1 from "../../images/01.png";
import img5 from "../../images/05.png";
import img6 from "../../images/06.png";
import img7 from "../../images/07.png";

import {
  Container,
  Option,
  Details,
  OptionLabel,
  OptionDescription,
  Img,
} from "./styles";
import { SimpleLineIcons } from "@expo/vector-icons";

const item = [
  {
    key: String(Math.random()),
    img: img1,
    title: "Recarga",
    description: "Recarregue seu celular em qualquer lugar e qualquer hora!",
  },
  {
    key: String(Math.random()),
    img: img5,
    title: "Doações",
    description: "Doe, beneficie aqueles ques estão precisando",
  },
  {
    key: String(Math.random()),
    img: img6,
    title: "Cod. de Barras",
    description: "Faça seus pagamentos com código de barras",
  },
  {
    key: String(Math.random()),
    img: img7,
    title: "FAQ",
    description: "Faça pagamentos ou cobre!",
  },
];

export default function Services() {
  return (
    <Container>
      {item.map((item) => (
        <Option key={item.key}>
          <Img source={item.img} />
          <Details>
            <OptionLabel>{item.title}</OptionLabel>
            <OptionDescription>{item.description}</OptionDescription>
          </Details>
        </Option>
      ))}
    </Container>
  );
}
