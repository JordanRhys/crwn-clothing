import React from 'react';
import { connect } from 'react-redux';
import { removeItem, addItem, reduceQuantity } from '../../redux/cart/cart.actions';

import {
    CheckoutItemContainer,
    CheckoutItemImg,
    ImageContainer,
    TextContainer,
    QuantityContainer
} from './CheckoutItem.styles';

const CheckoutItem = ({ cartItem, addItem, reduceQuantity, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <CheckoutItemImg src={process.env.PUBLIC_URL + imageUrl} alt={name}/>
            </ImageContainer>

            <TextContainer>{name}</TextContainer>

            <QuantityContainer>
                <div onClick={() => reduceQuantity(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>

            <TextContainer>£{price}</TextContainer>

            <div className='remove-button' onClick={() => removeItem(cartItem)}>&#10005;</div>
        </CheckoutItemContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    reduceQuantity: item => dispatch(reduceQuantity(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);