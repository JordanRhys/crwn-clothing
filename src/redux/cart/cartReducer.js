import CartActionTypes from './cart.types';

const intitialState = {
    cartDropdownHidden: true
};

const cartReducer = (state = intitialState, action) => {

    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                cartDropdownHidden: !state.cartDropdownHidden
            };
        default:
            return state;
    }
};

export default cartReducer;