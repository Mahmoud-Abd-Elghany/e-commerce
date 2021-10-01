import React from 'react'
import { useSelector } from 'react-redux'
import PreviewItem from '../../components/preview-item/preview-item.component'
import { collectionSelector } from '../../redux/shop/shop.selector'
import './collection.style.scss'

const CollectionPage = ({match}) => {
    const collection = useSelector(state => collectionSelector(match.params.Id)(state));
    console.log(collection)

    return (
        <div className="container">
            <h1 className="title">{collection.title.toUpperCase()}</h1>
            <div className="items-container">
            {
                collection.items.map( item => <PreviewItem className="item" key={item.id} item={item}/>)
            }
            </div>
            
        </div>   
    )
}

export default CollectionPage
