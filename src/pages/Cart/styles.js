import styled from 'styled-components/native';

export const Container = styled.View`
  background: #191920;
  flex: 1;
`;

export const Products = styled.View`
  background: #fff;
  margin: 15px;
  padding: 10px;
  border-radius: 4px;
`;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 100px;
  width: 100px;
`;

export const ProductText = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 12px;
  line-height: 20px;
  color: #333;
  margin-top: 5px;
`;

export const Price = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  align-items: center;
  background: #eee;
  padding: 8px;
  border-radius: 4px;
`;

export const ProductAmountText = styled.Text`
  background: #fff;
  color: #999;
  text-align: center;
  border-radius: 4px;
  padding: 2px 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  min-width: 52px;
`;

export const SubTotalPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
  flex: 1;
  text-align: right;
`;

export const TotalContainer = styled.View`
  margin-top: 30px;
  align-items: center;
`;

export const TotalText = styled.Text`
  text-align: center;
  color: #999;
  font-weight: bold;
`;

export const TotalPrice = styled.Text`
  font-size: 32px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 30px;
`;

export const Button = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 4px;
  padding: 5px;
  width: 100%;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export const DeleteContainer = styled.TouchableOpacity``;

export const RemoveContainer = styled.TouchableOpacity``;

export const AddContainer = styled.TouchableOpacity``;

export const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
  background: #fff;
  margin: 15px;
  padding: 10px;
  border-radius: 4px;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 18px;
  color: #333;
  margin-bottom: 10px;
`;
