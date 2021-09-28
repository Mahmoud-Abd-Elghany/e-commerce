import React, { useEffect, useState }  from 'react'
import { useDispatch } from 'react-redux'
import './shop.style.scss'
import { Route } from 'react-router'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import { convertDocsArrToObj, db } from '../../firebase/firebase.utils'
import { collection, onSnapshot } from '@firebase/firestore'
import { updateShopData } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({match}) => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        const collectionRef = collection(db, 'Shop Data')
        onSnapshot(collectionRef, async snapShot => {
            const fetchedShopData = await convertDocsArrToObj(snapShot);
            dispatch(updateShopData(fetchedShopData));
            setIsLoading(false);
        })
    },[])
    return (
        <div>
            <Route exact path = {`${match.path}`} render ={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props}/>}/> 
            <Route path = {`${match.path}/:Id`} render ={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props}/>}/>
        </div>

    )
}

export default ShopPage
