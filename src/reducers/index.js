import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import nav from './navReducer'
import menuList from './menuListReducer'
import loading from './loadingReducer'

const rootReducer=combineReducers({
    nav,menuList,loading,
    router:routerReducer
});

export default rootReducer