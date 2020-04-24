import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartDropdownHidden = createSelector(
    [selectCart],
    (cart) => cart.cartDropdownHidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (acc, cartItem) => acc + cartItem.quantity, 0
    )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (acc, {price, quantity}) => acc + (price * quantity), 0
    )
);