import React from "react";

import {
  Wrapper,
  Container,
  Header,
  HeaderTitle,
  Version,
  VersionText,
} from "./styles";

import UserSettings from "../../components/UserSettings";
import MyAccount from "../../components/MyAccount";

export default function Settings() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <HeaderTitle>Ajustes</HeaderTitle>
        </Header>

        <UserSettings />
        <MyAccount />
        <Version>
          <VersionText>
            1.0.1
          </VersionText>
        </Version>
      </Container>
    </Wrapper>
  );
}
