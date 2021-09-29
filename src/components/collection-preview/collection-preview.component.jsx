import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './collection-preview.style.scss'
import PreviewItem from '../preview-item/preview-item.component'

const CollectionPreview = ({title, items}) => {
    return (
        <div className='collection-preview'>
            <Link to={`/shop/${title.toLowerCase()}`} className = 'title'>{title.toUpperCase()}</Link>
            <div className = 'preview'>
                {items
                    .filter((item, index) => index < 4)
                    .map( (item) => <PreviewItem key={item.id} item = {item} />)}
            </div>
        </div>
    )
}

export default CollectionPreview
