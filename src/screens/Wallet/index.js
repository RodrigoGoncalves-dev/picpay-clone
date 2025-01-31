import React, { useState } from "react";

import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

import creditCard from "../../images/credit-card.png";

import {
  Wrapper,
  Container,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardTitle,
  CardDetails,
  CardInfo,
  Creditcard,
  CardBody,
  AddButton,
  AddLabel,
  UseTicketButton,
  UseTicketLabel,
} from "./styles";
import { Switch } from "react-native";

export default function Wallet() {

  const [ isVisible, setIsVisible ] = useState(true);
  const [ useBalance, setUseBalance ] = useState(true);

  function handleToggleVisibility() {
    setIsVisible(prevState => !prevState);
  }

  function handleToggleUseBalance() {
    setUseBalance(prevState => !prevState);
  }

  return (
    <Wrapper>
      <Container>
        <Header
          colors={
            useBalance
            ? ["#52e78c", "#1ab563"]
            : ['#D3D3D3', '#868686']
          }
        >
          <HeaderContainer>
            <Title>Saldo PicPay</Title>

            <BalanceContainer>
              <Value>
                R$ <Bold>{ isVisible ? '615,98' : '----'}</Bold>
              </Value>
              <EyeButton onPress={handleToggleVisibility}>
                <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
              </EyeButton>
            </BalanceContainer>

            <Info>Seu saldo está rendendo 100% CDI</Info>

            <Actions>
              <Action>
                <MaterialCommunityIcons name="cash" size={28} color="#fff" />
                <ActionLabel>Adicionar</ActionLabel>
              </Action>

              <Action>
                <FontAwesome name="bank" size={20} color="#fff" />
                <ActionLabel>Retirar</ActionLabel>
              </Action>
            </Actions>
          </HeaderContainer>
        </Header>

        <UseBalance>
          <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
          <Switch 
            value={useBalance}
            onValueChange={handleToggleUseBalance}
          />
        </UseBalance>

        <PaymentMethods>
          <PaymentMethodsTitle>Forma de pagamento</PaymentMethodsTitle>

          <Card>
            <CardBody>
              <CardDetails>
                <CardTitle>Cadastre seu cartão de crédito</CardTitle>
                <CardInfo>
                  Cadastre seu cartão de crédito mesmo quando tiver saldo no seu
                  PicPay
                </CardInfo>
              </CardDetails>
              <Creditcard source={creditCard} resizeMode="contain" />
            </CardBody>

            <AddButton>
              <AntDesign name="pluscircleo" size={30} color="#0db060" />
              <AddLabel>Adicionar cartão de crédito</AddLabel>
            </AddButton>
          </Card>

          <UseTicketButton>
            <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060" />
            <UseTicketLabel>Usar código promocional</UseTicketLabel>
          </UseTicketButton>
        </PaymentMethods>
      </Container>
    </Wrapper>
  );
}
