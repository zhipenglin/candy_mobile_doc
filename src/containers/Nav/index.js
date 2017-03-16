import {PureComponent} from 'react'
import {Button,Drawer} from 'candy-mobile'
import Menu from '../../components/Menu'
import load from '../../hoc/load'
import menuListAction from '../../actions/menuListAction'
import './style.scss'

import { withRouter } from 'react-router'

@load((state={})=>{
    const {menuList}=state;
    return menuList;
},menuListAction)
@withRouter
class MenuButton extends PureComponent{
    constructor(){
        super();
        this.switchMenu=this.switchMenu.bind(this);
        this.isOpen=false;
    }
    switchMenu(){
        const {history,loadResult}=this.props;
        if(this.isOpen){
            return;
        }else{
            this.isOpen=true;
            new Drawer(<Menu list={loadResult} push={history.push} currentPath={history.location.pathname}></Menu>,{
                removeCallback:()=>{
                    this.isOpen=false;
                }
            });
        }
    }
    render(){
        return (
            <Button className="cp-nav__menu" onClick={this.switchMenu} type="ghost" size="mini"><i></i></Button>
        );
    }
}

export default class Nav extends PureComponent{
    render(){
        return this.props.show?(
            <div className="cp-nav">
                <div className="cp-nav__inner">
                    <div className="cp-nav__left">
                        <MenuButton></MenuButton>
                    </div>
                    <div className="cp-nav__content">Candy Mobile</div>
                    <div className="cp-nav__right"></div>
                </div>
                <div className="cp-nav__sitting"></div>
            </div>
        ):null;
    }
}