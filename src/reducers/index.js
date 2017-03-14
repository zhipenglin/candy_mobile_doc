import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import nav from './navReducer'

const rootReducer=combineReducers({
    nav,
    router:routerReducer
});

export default rootReducer