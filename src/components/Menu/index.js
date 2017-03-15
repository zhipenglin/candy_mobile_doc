import {PureComponent} from 'react'
import {List,ListItem} from 'candy-mobile'
import classnames from 'classnames'
import './style.scss'
export default class Menu extends PureComponent{
    render(){
        const {currentPath,list}=this.props;
        var menuLIst=list.slice(0);
        menuLIst.splice(0,0,{path:'/',text:'首页'});
        return (
            <div className="cp-menu">
                <div className="cp-menu__header">
                    <i></i>
                    <h2>Candy Mobile</h2>
                </div>
                <List>{menuLIst.map((n,i)=>(
                    <ListItem className={classnames('cp-menu__list_item',{'cp-menu__list_item--active':currentPath==n.path})} key={i} onClick={()=>{
                    const {push,remove}=this.props;
                    remove();
                    setTimeout(()=>{
                        if(currentPath!=n.path){
                            push(n.path);
                        }
                    },50);
                }}>{n.text}</ListItem>
                ))}
                </List>
            </div>
        );
    }
}