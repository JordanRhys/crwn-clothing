import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview.component';
import CollectionPage from '../CollectionPage/CollectionPage.component';

import './ShopPage.styles';


const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );
}

export default ShopPage;