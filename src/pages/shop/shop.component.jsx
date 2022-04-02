import React, { useEffect }  from 'react'
import { useDispatch} from 'react-redux'
import './shop.style.scss'
import { Route } from 'react-router'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container'
import { fetchShopDataStart } from '../../redux/shop/shop.actions'

const ShopPage = ({match}) => {
    const dispatch = useDispatch();
    //Updating State Shop Data
    useEffect(() => {
        dispatch(fetchShopDataStart());
    })
    
    return (
        <div>
            <Route exact path = {`${match.path}`} component={CollectionsOverviewContainer}/> 
            <Route path = {`${match.path}/:Id`} component={CollectionPageContainer}/>
        </div>

    )
}

export default ShopPage
