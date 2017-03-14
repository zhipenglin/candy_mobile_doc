import {Provider} from 'react-redux'
import { ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createHashHistory'
import {Router} from 'react-router'
import Routes from '../routers'
import store from '../store'

const history = createHistory()
export default ()=>{
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routes></Routes>
            </ConnectedRouter>
        </Provider>
    );
}