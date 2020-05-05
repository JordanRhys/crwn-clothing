import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem.component';

import {CollectionPreviewContainer, PreviewContainer, TitleText} from './CollectionPreview.styles';

const CollectionPreview = ({title, items}) => {

    return (
        <CollectionPreviewContainer>
            <TitleText>{title.toUpperCase()}</TitleText>
            <PreviewContainer>
                {items
                    .filter((item, index) => index < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item}/>
                    ))}
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
};

export default CollectionPreview;