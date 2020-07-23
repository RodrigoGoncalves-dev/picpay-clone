const { default: styled } = require("styled-components/native");

export const Container = styled.View`
  
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  padding: 0 16px;
`;

export const Card = styled.View`
  background: #1e222b;
  padding: 15px;
  border: 1px solid #000;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  padding-left: 20px;
`;

export const Description = styled.Text`
  color: #fff;
  flex: 1;
  font-size: 15px;
  margin-left: 20px;
`;

export const Bold = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;

export const CardFooter = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Date = styled.Text`
  color: #fff;
  margin-left: 5px;
`;

export const Actions = styled.View`
  flex-direction: row;

`;
export const Option = styled.TouchableOpacity`
  margin-left: 15px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 100px;
  flex-direction: row;
  border: 1px solid #10c86e;
  border-radius: 15px;
`;
export const OptionLabel = styled.Text`
  color: #10c86e;
  margin-left: 5px;
  font-size: 14px;
`;