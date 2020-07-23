const { default: styled } = require("styled-components/native");
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView`

`;

export const Header = styled(LinearGradient)`
  height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;
export const Value = styled.Text`
  color: #fff;
  font-size: 38px;
  font-weight: 200;
`;
export const Bold = styled.Text`
  font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Info = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const Actions = styled.View`
  flex-direction: row;
  margin-top: 40px;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  height: 45px;
  width: 130px;
  border-radius: 25px;
  margin: 0 10px;
`;
export const ActionLabel = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
`;

export const UseBalance = styled.View`
  background: #1c1c1e;
  height: 60px;
  flex-direction: row;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: #8e8e93;
  text-transform: uppercase;
`;

export const Card = styled.View`
  background: #1e232a;
  padding: 20px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const CardBody = styled.View`
  flex-direction: row;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 25px;
`;

export const CardTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const CardInfo = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  margin-top: 15px;
`;

export const Creditcard = styled.Image`
  width: 60px;
`;

export const AddButton = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
`;

export const AddLabel = styled.Text`
  margin-left: 10px;
  color: #0db060;
  font-size: 18px;
  font-weight: bold;
`;

export const UseTicketButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const UseTicketLabel = styled.Text`
  color: #0db060;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
  text-decoration-line: underline;
`;
