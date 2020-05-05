import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/CollectionItem/CollectionItem.component';

import {
    CollectionPageContainer,
    TitleText,
    ItemsContainer
} from './CollectionPage.styles';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <TitleText>{ title }</TitleText>
            <ItemsContainer>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </ItemsContainer>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);