import {Route,Switch,Redirect} from 'react-router'
import Home from '../containers/Home'
import Page404 from '../containers/404'
import Button from './Button'
import Dialog from './Dialog'
import List from './List'
export default (props)=>{
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/button" component={Button}></Route>
            <Route path="/dialog" component={Dialog}></Route>
            <Route path="/list" component={List}></Route>
            <Route path="/404" component={Page404}></Route>
            <Route component={Page404}></Route>
        </Switch>
    );
}