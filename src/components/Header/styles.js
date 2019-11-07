import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background: #141419;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  height: 24px;
  width: 185px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #7159c1;
  color: #fff;
  min-width: 18px;
  min-height: 18px;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  text-align: center;
  overflow: hidden;
`;
