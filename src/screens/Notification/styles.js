const { default: styled } = require("styled-components/native");

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView`

`;

export const Header = styled.View`
  height: 50px;
  padding: 15px;
  align-items: center;
  justify-content: center;
`;
export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;