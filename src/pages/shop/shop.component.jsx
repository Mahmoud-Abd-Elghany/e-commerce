import React, { useEffect }  from 'react'
import { useDispatch } from 'react-redux'
import './shop.style.scss'
import { Route } from 'react-router'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import { convertDocsArrToObj, db } from '../../firebase/firebase.utils'
import { collection, onSnapshot } from '@firebase/firestore'
import { updateShopData } from '../../redux/shop/shop.actions'

const ShopPage = ({match}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const collectionRef = collection(db, 'Shop Data')
        onSnapshot(collectionRef, async snapShot => {
            const fetchedShopData = await convertDocsArrToObj(snapShot);
            dispatch(updateShopData(fetchedShopData));
        })
    },[])
    return (
        <div>
            <Route exact path = {`${match.path}`} component ={CollectionsOverview}/> 
            <Route path = {`${match.path}/:Id`} component ={CollectionPage}/>
        </div>

    )
}

export default ShopPage
