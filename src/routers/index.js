import {Route,Switch,Redirect} from 'react-router'
import Home from '../containers/Home'
import Page404 from '../containers/404'
import RouterList from './RouterList'

export default (props)=>{
    //注意：RouterList里面的Route必须有render方法，并且只会执行render进行页面渲染
    return (
        <RouterList>
            <Route exact path="/" render={()=>Home}></Route>
            <Route path="/button" render={()=>import('../containers/Button')}></Route>
            <Route path="/dialog" render={()=>import('../containers/Dialog')}></Route>
            <Route path="/list" render={()=>import('../containers/List')}></Route>
            <Route path="/select" render={()=>import('../containers/Select')}></Route>
            <Route path="/404" render={()=>Page404}></Route>
        </RouterList>
    );
}