import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import numeral from 'numeral';
import {
  Container,
  Product,
  ProductImage,
  Title,
  Price,
  Button,
  ButtonText,
  ProductAmount,
  ProductAmountText,
} from './styles';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

class Home extends Component {
  static propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
    amount: PropTypes.shape().isRequired,
  };

  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormated: numeral(product.price).format('$0,00'),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  renderProducts = ({ item }) => {
    const { amount } = this.props;

    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <Title>{item.title}</Title>
        <Price>{item.priceFormated}</Price>
        <Button>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#fff" size={20} />
            <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
          </ProductAmount>
          <ButtonText onPress={() => this.handleAddProduct(item.id)}>
            Adicionar
          </ButtonText>
        </Button>
      </Product>
    );
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          extraData={this.props}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProducts}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
