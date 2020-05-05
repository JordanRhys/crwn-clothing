import React from 'react';
import { withRouter } from 'react-router-dom';

import {
    MenuItemContainer,
    BackgroundImgContainer,
    ContentContainer,
    TitleText,
    SubtitleText
} from './MenuItem.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    return (
        <MenuItemContainer className={`${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImgContainer
                className='background-image'
                imageUrl={imageUrl}
            />
            <ContentContainer>
                <TitleText>{title.toUpperCase()}</TitleText>
                <SubtitleText>SHOP NOW</SubtitleText>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default withRouter(MenuItem);