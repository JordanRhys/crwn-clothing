import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.component';
import StripeCheckoutButton from '../../components/StripeButton/StripeButton.component';

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    CheckoutHeaderBlockContainer,
    CheckoutTotalContainer,
    TestWarningContainer
} from './CheckoutPage.styles';

const CheckoutPage = ({ cartItems, cartTotal }) => {

    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <CheckoutHeaderBlockContainer>
                    <span>Product</span>
                </CheckoutHeaderBlockContainer>

                <CheckoutHeaderBlockContainer>
                    <span>Description</span>
                </CheckoutHeaderBlockContainer>

                <CheckoutHeaderBlockContainer>
                    <span>Quantity</span>
                </CheckoutHeaderBlockContainer>

                <CheckoutHeaderBlockContainer>
                    <span>Price</span>
                </CheckoutHeaderBlockContainer>

                <CheckoutHeaderBlockContainer>
                    <span>Remove</span>
                </CheckoutHeaderBlockContainer>
            </CheckoutHeaderContainer>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                ))
            }
            <CheckoutTotalContainer>
                <span>TOTAL: £{cartTotal}</span>
            </CheckoutTotalContainer>
            <TestWarningContainer>
                *Please you the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/21 -  CVV: 123
            </TestWarningContainer>
            <StripeCheckoutButton price={cartTotal} />
        </CheckoutPageContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);