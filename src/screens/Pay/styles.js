const { default: styled } = require("styled-components/native");

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView`

`;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const HeaderSearchContainer = styled.View`
  margin-top: 10px;
  height: 40px;
  width: 240px;
  background: #ECEFF1;  
  border-radius: 20px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderSearch = styled.TextInput`
  font-size: 18px;
`;

export const SuggestionsLabel = styled.Text`
  padding: 0 16px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

export const ServicesLabel = styled.Text`
  padding: 0 16px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 15px;
  margin-bottom: 15px;
`;