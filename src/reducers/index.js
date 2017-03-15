import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import nav from './navReducer'
import menuList from './menuListReducer'

const rootReducer=combineReducers({
    nav,menuList,
    router:routerReducer
});

export default rootReducer