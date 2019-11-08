import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import numeral from 'numeral';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductText,
  ProductImage,
  Title,
  Price,
  Button,
  ButtonText,
  ProductAmount,
  ProductAmountText,
  SubTotalPrice,
  TotalContainer,
  TotalText,
  TotalPrice,
  DeleteContainer,
  RemoveContainer,
  AddContainer,
  EmptyContainer,
  EmptyText,
} from './styles';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: numeral(product.price * product.amount).format('$0,00'),
    }))
  );

  const total = useSelector(state =>
    numeral(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    ).format('$0,00')
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function remove(product) {
    dispatch(CartActions.removeFromCart(product.id));
  }

  return (
    <Container>
      {cart.length ? (
        <Products>
          {cart.map(item => (
            <Product key={item.id}>
              <ProductInfo>
                <ProductImage source={{ uri: item.image }} />
                <ProductText>
                  <Title>{item.title}</Title>
                  <Price>{item.priceFormated}</Price>
                </ProductText>
                <DeleteContainer onPress={() => remove(item)}>
                  <Icon name="delete-forever" size={24} color="#7159c1" />
                </DeleteContainer>
              </ProductInfo>
              <ProductAmount>
                <RemoveContainer onPress={() => decrement(item)}>
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color="#7159c1"
                  />
                </RemoveContainer>
                <ProductAmountText>{item.amount}</ProductAmountText>
                <AddContainer onPress={() => increment(item)}>
                  <Icon name="add-circle-outline" size={20} color="#7159c1" />
                </AddContainer>
                <SubTotalPrice>{item.subtotal}</SubTotalPrice>
              </ProductAmount>
            </Product>
          ))}
          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalPrice>{total}</TotalPrice>
            <Button>
              <ButtonText>Finalizar Pedido</ButtonText>
            </Button>
          </TotalContainer>
        </Products>
      ) : (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyText>Seu carrinho esta vázio.</EmptyText>
        </EmptyContainer>
      )}
    </Container>
  );
}
