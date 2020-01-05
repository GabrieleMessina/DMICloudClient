import {applyMiddleware, compose, createStore, Reducer} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducers from '../reducers/index';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    debug: (process.env.NODE_ENV === 'development'),
    //whitelist: ['auth']
};


export default function initializeStore(initialState) {
    const middlewares = [ thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const persistedReducer = persistReducer(persistConfig, rootReducers);

    const store = createStore( persistedReducer, initialState, composedEnhancers);
    const persistor = persistStore(store);
    return {store, persistor};
}
