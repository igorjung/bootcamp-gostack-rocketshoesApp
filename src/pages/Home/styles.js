import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  background: #191920;
  flex: 1;
`;

export const Product = styled.View`
  background: #fff;
  padding: 15px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
  height: 400px;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  align-self: center;
  width: 200px;
  height: 200px;
`;

export const Title = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: auto;
`;

export const Price = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 5px 0px;
`;

export const Button = styled.TouchableOpacity`
  background: #7159c1;
  border: 0;
  border-radius: 4px;
  margin-top: 5px;

  flex-direction: row;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  flex: 1;
  text-align: center;
  font-weight: bold;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  flex-direction: row;
  align-items: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  background: ${darken(0.03, '#7159c1')};
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0 4px 0 10px;
`;
