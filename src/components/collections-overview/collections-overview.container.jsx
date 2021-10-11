import React from 'react';
import CollectionsOverview from './collections-overview.component'
import WithSpinner from '../with-spinner/with-spinner.component'
import { useSelector } from 'react-redux';
import { fetchingStateSelector } from '../../redux/shop/shop.selector';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

const CollectionsOverviewContainer = () => {
    const isFetching = useSelector(state => fetchingStateSelector(state));
    return(
        <CollectionsOverviewWithSpinner isLoading ={isFetching}/>
    )    
}

export default CollectionsOverviewContainer