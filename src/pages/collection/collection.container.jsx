import CollectionPage from "./collection.component";
import { isDataLoadedSelector } from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { useSelector } from "react-redux";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const CollectionPageContainer = (props) => {
    const isDataLoaded = useSelector(state => isDataLoadedSelector(state))
    return(
        <CollectionPageWithSpinner isLoading={!isDataLoaded} {...props}/>
    )
}

export default CollectionPageContainer