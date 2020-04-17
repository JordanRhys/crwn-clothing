import React, { useState } from 'react';
import MenuItem from '../Menu-Item/Menu-Item.component';

import './Directory.styles.scss';

const Directory = () => {
    const [sections, setSections] = useState([
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2
        },
        {
            title: 'shoes',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
            size: 'large',
            id: 5
        }
    ])

    return (
        <div className='directory-menu'>
            {sections.map(({title, imageUrl, size, id}) => (
                <MenuItem key={id} imageUrl={imageUrl} size={size} title={title}/>
            ))}
        </div>
    )
}

export default Directory;