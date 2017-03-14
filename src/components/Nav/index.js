import {Component} from 'react'
import {Button,Drawer} from 'candy-mobile'
import Menu from '../Menu'
import './style.scss'

import { withRouter } from 'react-router'

@withRouter
export default class Nav extends Component{
    constructor(){
        super();
        this.switchMenu=this.switchMenu.bind(this);
    }
    switchMenu(){
        const {history}=this.props;
        new Drawer(<Menu push={history.push} currentPath={history.location.pathname}></Menu>);
    }
    render(){
        return this.props.show?(
            <div className="cp-nav">
                <div className="cp-nav__inner">
                    <Button className="cp-nav__menu" onClick={this.switchMenu} type="ghost" size="mini"><i></i></Button>
                    <div className="cp-nav__content">Candy Mobile</div>
                </div>
                <div className="cp-nav__sitting"></div>
            </div>
        ):null;
    }
}