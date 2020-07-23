import React from "react";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Wrapper, Container, Header, HeaderSearch, HeaderSearchContainer, SuggestionsLabel, ServicesLabel } from "./styles";

import Suggestions from '../../components/Suggestion';
import Services from '../../components/Services';

export default function Pay() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />
          <HeaderSearchContainer>
            <HeaderSearch 
              placeholder="Quem você quer pagar?"
              placeholderTextColor="#000"
              maxLength={20}
            />
            <AntDesign name="search1" size={16} color="#000" />
          </HeaderSearchContainer>
        </Header>
        <SuggestionsLabel>Sugestões para você</SuggestionsLabel>
        <Suggestions />
        <ServicesLabel>Serviços</ServicesLabel>
        <Services />
      </Container>
    </Wrapper>
  );
}
