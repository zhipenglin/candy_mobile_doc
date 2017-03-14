import {PureComponent} from 'react'
import {List,ListItem} from 'candy-mobile'
import classnames from 'classnames'
import './style.scss'
const list=[{path:'/',text:'首页'},{path:'/button',text:'按钮组件'},{path:'/404',text:'弹出框组件'}];
export default class Menu extends PureComponent{
    render(){
        const {currentPath}=this.props;
        return (
            <div className="cp-menu">
                <div className="cp-menu__header">
                    <i></i>
                    <h2>Candy Mobile</h2>
                </div>
                <List>{list.map((n,i)=>(
                    <ListItem className={classnames('cp-menu__list_item',{'cp-menu__list_item--active':currentPath==n.path})} key={i} onClick={()=>{
                    const {push,remove}=this.props;
                    if(currentPath!=n.path){
                        push(n.path);
                    }
                    remove();
                }}>{n.text}</ListItem>
                ))}
                </List>
            </div>
        );
    }
}