const { default: styled } = require("styled-components/native");
import { LinearGradient } from 'expo-linear-gradient';

export const User = styled(LinearGradient)`
  height: 250px;
  justify-content: center;
  align-items: center;
`;

export const UserImg = styled.Image`
  margin-bottom: 25px;
`;

export const UserNick = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
`;

export const UserName = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  font-weight: 800;
  font-size: 18px;
  margin-top: 10;
`;

export const SeeProfile = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10;
`;

export const SeeProfileLabel = styled.Text`
  color: #0db060;
  margin-right: 5px;
  font-size: 16px;
`;