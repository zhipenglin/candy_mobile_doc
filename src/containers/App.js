import {Provider} from 'react-redux'
import { ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createHashHistory'
import Routes from '../routers'
import store from '../store'
import Loading from './Loading'
import Nav from './Nav'

const history = createHistory()
export default ()=>{
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>
                    <Loading></Loading>
                    <Nav></Nav>
                    <Routes></Routes>
                </div>
            </ConnectedRouter>
        </Provider>
    );
}