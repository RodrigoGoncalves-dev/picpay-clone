const { default: styled } = require("styled-components/native");

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView`

`;

export const Header = styled.View`
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const Version = styled.View`
  margin-bottom: 25px;
  align-items: center;
  justify-content: center;
`;

export const VersionText = styled.Text`
  color: rgba(255, 255, 255, 0.4);
`;