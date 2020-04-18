import React, { useState } from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component';

import './ShopPage.styles.scss';

import SHOP_DATA from './ShopPage.data';

const ShopPage = () => {
    const [collections, setCollections] = useState(SHOP_DATA);
    return (
        <div className='shop-page'>
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))}
        </div>
    );
}

export default ShopPage;