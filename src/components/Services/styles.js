const { default: styled } = require("styled-components/native");

export const Container = styled.View`
  
`;

export const Option = styled.View`
  background: #1e222b;
  height: 130px;
  border: 1px solid #000;
  flex-direction: row;
  padding: 15px;
  align-items: center;
`;

export const Details = styled.View`
  flex: 1;
  margin-left: 15px;
`;

export const OptionLabel = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const OptionDescription = styled.Text`
  color: #fff;
  padding-right: 20px;
  margin-top: 10px;
  font-size: 14px;
`;

export const Img = styled.Image`
  align-self: flex-start;
  margin-top: 15px;
  justify-content: center;
`;
