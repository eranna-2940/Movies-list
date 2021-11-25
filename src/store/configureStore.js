import {createStore,combineReducers,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import countReducer from '../reducers/countReducer';

import productsReducer from '../reducers/productsReducer';

import cartReducer from '../reducers/cartReducer';

import usersReducer from '../reducers/usersReducer';

import registerUsers from '../reducers/registerUsers';

import notesReducer from '../reducers/notesReducer';

import movieReducer from '../reducers/movieReducer';

// creating store
const configureStore = function(){
    const rootReducer = {
        count : countReducer,
        products:productsReducer,
        cart:cartReducer,
        users:usersReducer,
        user:registerUsers,
        notes:notesReducer,
        movie:movieReducer
    }

    const store = createStore(combineReducers(rootReducer),applyMiddleware(thunk))
    return store;
}

export default configureStore;