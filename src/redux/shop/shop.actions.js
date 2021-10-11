export const fetchShopDataStart = () => ({
    type: 'FETCH_DATA_START',
})

export const fetchShopDataSuccess = fetchedData => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: fetchedData,
});

export const fetchShopDataFailure = errorMsg => ({
    type: 'FETCH_DATA_FAILURE',
    payload: errorMsg,
});
