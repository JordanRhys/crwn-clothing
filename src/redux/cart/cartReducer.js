import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';

const intitialState = {
    cartDropdownHidden: true,
    cartItems: []
};

const cartReducer = (state = intitialState, action) => {

    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                cartDropdownHidden: !state.cartDropdownHidden
            };

        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
};

export default cartReducer;