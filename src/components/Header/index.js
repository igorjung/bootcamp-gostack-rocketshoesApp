import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Logo, BasketContainer, ItemCount } from './styles';

function Header({ cartSize = 0, navigation }) {
  return (
    <Container>
      <Logo />

      <BasketContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={24} color="#fff" />
        <ItemCount>{cartSize}</ItemCount>
      </BasketContainer>
    </Container>
  );
}

Header.propTypes = {
  cartSize: PropTypes.number.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});
export default connect(mapStateToProps)(Header);
