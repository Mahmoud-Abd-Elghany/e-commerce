import React from 'react'
import { useSelector } from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component';
import {objToArrCollectionSelector} from '../../redux/shop/shop.selector';

const CollectionsOverview= () => {
    const shopData = useSelector(state => objToArrCollectionSelector(state));
    return (
        <div>
            {shopData.map(({id, ...otherItems}) => (<CollectionPreview key={id} {...otherItems}/>))}
        </div>
    )
}

export default CollectionsOverview
