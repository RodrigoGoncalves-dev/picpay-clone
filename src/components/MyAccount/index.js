import React from 'react';

import { AntDesign, Feather } from '@expo/vector-icons';

import {
  MyAccountContainer,
  MyAccountLabel,
  MyPicPay,
  MyPicPayLabel,
  MyPicPayName,
  MyNumber,
  MyNumberLabel,
  MyNumberText,
  MyEmail,
  MyEmailLabel,
  MyEmailText,
  MyData,
  MyBankAccount,
  MyTaxLimits,
  MyTaxLimitsLabel,
  MyAddress,
  MyFavorites,
  ValidateIdentify,
  Verification,
  MyDataLabel,
  MyBankAccountLabel,
  MyAddressLabel,
  MyFavoritesLabel,
  ValidateIdentifyLabel,
} from './styles';

export default function MyAccount() {
  return (
    <MyAccountContainer>
      <MyAccountLabel>
        minha conta
      </MyAccountLabel>
      <MyPicPay>
        <MyPicPayLabel>
          Meu MyPicPay
        </MyPicPayLabel>
        <MyPicPayName>
          @rodriguin371
        </MyPicPayName>
        <AntDesign name="right" size={14} color="#bdbdbd" />
      </MyPicPay>
      <MyNumber>
        <MyNumberLabel>
          Meu Número
        </MyNumberLabel>
        <MyNumberText>
          (**)*****-8922
        </MyNumberText>
        <AntDesign name="right" size={14} color="#bdbdbd" />
      </MyNumber>
      <MyEmail>
        <MyEmailLabel>
          Meu e-mail
        </MyEmailLabel>
        <MyEmailText>
          r*********h@g****.***
        </MyEmailText>
        <AntDesign name="right" size={14} color="#bdbdbd" />
      </MyEmail>
      <MyData>
        <MyDataLabel>
          Dados Pessoais
        </MyDataLabel>
        <AntDesign name="right" size={14} color="#bdbdbd" />
      </MyData>
      <MyBankAccount>
        <MyBankAccountLabel>
          Conta Bancária
        </MyBankAccountLabel>
        <AntDesign name="right" size={14} color="#bdbdbd" />
      </MyBankAccount>
      <MyTaxLimits>
        <MyTaxLimitsLabel>
          Taxas e limites
        </MyTaxLimitsLabel>
        <AntDesign name="right" size={14} color="#bdbdbd" />
      </MyTaxLimits>
      <MyAddress>
        <MyAddressLabel>
          Meu endereço
        </MyAddressLabel>
        <AntDesign name="right" size={14} color="#bdbdbd" />
      </MyAddress>
      <MyFavorites>
        <MyFavoritesLabel>
          Meus Favoritos
        </MyFavoritesLabel>
        <AntDesign name="right" size={14} color="#bdbdbd" />
      </MyFavorites>
      <ValidateIdentify>
        <ValidateIdentifyLabel>
          Validar identidade
        </ValidateIdentifyLabel>
        <Verification>
          Não verificado
        </Verification>
        <Feather name="alert-circle" size={18} color="#f00" />
        <AntDesign name="right" size={14} color="#bdbdbd" />
      </ValidateIdentify>
    </MyAccountContainer>
  );
}