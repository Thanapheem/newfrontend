import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'

import userReducer from './reducer/userReducer';
import dataReducer from './reducer/dataReducer';
import uiReducer from './reducer/uiReducer';
const initialState ={};
const middleware = [thunk];
const reducer = combineReducers ({
    user :userReducer,
    data :dataReducer,
    UI : uiReducer

});
const store = createStore(reducer, initialState,compose(applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
export default store;
