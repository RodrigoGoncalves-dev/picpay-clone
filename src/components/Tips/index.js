import React from 'react';

import { Container, Option, Title, Img } from './styled';

import img8 from '../../images/08.png';
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

const item = [
  {
    key: String(Math.random()),
    bgColor: '#172c4a',
    img: img8,
    title: "Pague suas contas sem sair de casa"
  },
  {
    key: String(Math.random()),
    bgColor: '#6a0159',
    img: img9,
    title: "Pague suas contas sem sair de casa"
  },
  {
    key: String(Math.random()),
    bgColor: '#4139c8',
    img: img10,
    title: "Pague suas contas sem sair de casa"
  },
  {
    key: String(Math.random()),
    bgColor: '#00ab4b',
    img: img11,
    title: "Pague suas contas sem sair de casa"
  },
  {
    key: String(Math.random()),
    bgColor: '#ba2f76',
    img: img12,
    title: "Pague suas contas sem sair de casa"
  },
]

export default function Tips() {
  return (
    <Container>
      {item.map(item => (
        <Option bgColor={item.bgColor} key={item.key}>
          <Title>{item.title}</Title>
          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  );
}