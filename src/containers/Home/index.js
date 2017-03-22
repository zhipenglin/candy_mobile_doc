import {PureComponent} from 'react'
import Page from '../Page'
import Code from '../../components/Code'
import { withRouter } from 'react-router'
import {List,ListItem,Confirm,Button} from 'candy-mobile'
import load from '../../hoc/load'
import menuListAction from '../../actions/menuListAction'

@load((state={})=>{
    const {menuList}=state;
    return menuList;
},menuListAction)
@withRouter
class MenuList extends PureComponent{
    render(){
        const {history,loadResult}=this.props;
        return (
            <List animate>{loadResult.map((n,i)=>(
                <ListItem key={i} onClick={()=>{
                    history.push(n.path);
                }}>{n.text}</ListItem>
            ))}
            </List>
        );
    }
}

export default ()=>{
    return (
        <Page name="home">
            <Button onClick={()=>{
                new Confirm(<a href="tel:18792677529">18792677529</a>);
            }}>弹窗拨打电话</Button>
            <div className="ct-page__title">开始使用：</div>
            <Code lang="bash">{'npm install candy-mobile'}</Code>
            <div className="ct-page__title">组件列表：</div>
            <div className="ct-page__des">
                <MenuList></MenuList>
            </div>
        </Page>
    );
}