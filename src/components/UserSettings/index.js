import React from 'react';

import { AntDesign } from '@expo/vector-icons';

import img13 from '../../images/13.png';

import {
  UserImg,
  User,
  UserNick,
  UserName,
  SeeProfile,
  SeeProfileLabel,
} from './styles';

export default function UserSettings() {
  return (
    <User
      colors={['#000', '#1e222b']}
    >
        <UserImg source={img13} />
          <UserNick>@rodriguin371</UserNick>
          <UserName>Rodrigo Gonçalves</UserName>
          <SeeProfile>
            <SeeProfileLabel>Ver meu perfil</SeeProfileLabel>
            <AntDesign name="right" size={18} color="#0db060" />
          </SeeProfile>
    </User>
  );
}