import React, {useState} from 'react'
import './shop.style.scss'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/preview-collection/collection-preview.component'

const ShopPage = () => {
    const [shopData, setShopData] = useState(SHOP_DATA);
    return (
        <div>
            {shopData.map(({id, ...otherItems}) => (<CollectionPreview key={id} {...otherItems}/>))}
        </div>
    )
}

export default ShopPage
