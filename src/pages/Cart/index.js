import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

class Cart extends Component {
  static propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    total: PropTypes.string.isRequired,
    updateAmountRequest: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
  };

  increment = product => {
    const { updateAmountRequest } = this.props;
    updateAmountRequest(product.id, product.amount + 1);
  };

  decrement = product => {
    const { updateAmountRequest } = this.props;
    updateAmountRequest(product.id, product.amount - 1);
  };

  remove = product => {
    const { removeFromCart } = this.props;
    removeFromCart(product.id);
  };

  renderProducts = ({ item }) => {
    return (
      <Product>
        <ProductInfo>
          <ProductImage source={{ uri: item.image }} />
          <ProductText>
            <Title>{item.title}</Title>
            <Price>{item.priceFormated}</Price>
          </ProductText>
          <DeleteContainer onPress={() => this.remove(item)}>
            <Icon name="delete-forever" size={24} color="#7159c1" />
          </DeleteContainer>
        </ProductInfo>
        <ProductAmount>
          <RemoveContainer onPress={() => this.decrement(item)}>
            <Icon name="remove-circle-outline" size={20} color="#7159c1" />
          </RemoveContainer>
          <ProductAmountText>{item.amount}</ProductAmountText>
          <AddContainer onPress={() => this.increment(item)}>
            <Icon name="add-circle-outline" size={20} color="#7159c1" />
          </AddContainer>
          <SubTotalPrice>{item.subtotal}</SubTotalPrice>
        </ProductAmount>
      </Product>
    );
  };

  render() {
    const { cart, total } = this.props;

    return (
      <Container>
        {cart.length ? (
          <Products>
            <FlatList
              data={cart}
              keyExtractor={item => String(item.id)}
              renderItem={this.renderProducts}
            />
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
}
const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: numeral(product.price * product.amount).format('$0,00'),
  })),
  total: numeral(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ).format('$0,00'),
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
