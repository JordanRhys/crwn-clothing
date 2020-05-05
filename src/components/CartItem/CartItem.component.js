import React from 'react';

import { CartItemContainer, CartItemImg, ItemDetailsContainer} from './CartItem.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {

    return (
        <CartItemContainer>
            <CartItemImg src={process.env.PUBLIC_URL + imageUrl} alt={name} />
            <ItemDetailsContainer>
                <span>{name}</span>
                <span>
                    {quantity} x £{price}
                </span>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
};

export default CartItem;