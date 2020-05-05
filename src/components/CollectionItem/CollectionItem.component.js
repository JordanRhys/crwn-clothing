import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import {
    CollectionItemContainer,
    CollectionItemImg,
    CollectionFooterContainer,
    NameContainer,
    PriceContainer,
    AddButton
} from './CollectionItem.styles';



const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <CollectionItemContainer>
            <CollectionItemImg
                className='image'
                imageUrl={process.env.PUBLIC_URL + imageUrl}
            />
            <CollectionFooterContainer>
                <NameContainer>{ name }</NameContainer>
                <PriceContainer>£{ price }</PriceContainer>
            </CollectionFooterContainer>

            <AddButton onClick={() => addItem(item)} inverted>
                Add to cart
            </AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);