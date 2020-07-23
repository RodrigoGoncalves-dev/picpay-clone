import React from 'react';

import { Wrapper, Container, Header, HeaderTitle } from './styles';

import Notifications from '../../components/Notifications';

export default function Notification() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <HeaderTitle>Notificações</HeaderTitle>
        </Header>

        <Notifications />
      </Container>
    </Wrapper>
  );
}