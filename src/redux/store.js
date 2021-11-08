import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";
import { persistStore } from "redux-persist"
import rootReducer from "./root.reducer";
import rootSaga from "./root.saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
