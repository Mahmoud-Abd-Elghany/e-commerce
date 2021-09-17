import React from 'react'
import './shop.style.scss'
import { Route} from 'react-router'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

const ShopPage = ({match}) => {
    return (
        <div>
            <Route exact path = {`${match.path}`} component ={CollectionsOverview}/> 
            <Route path = {`${match.path}/:Id`} component ={CollectionPage}/>
        </div>

    )
}

export default ShopPage
