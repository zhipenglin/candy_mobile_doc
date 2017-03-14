import {connect} from 'react-redux'
import Page from '../Page'
import Code from '../../components/Code'
import { withRouter } from 'react-router'
import {List,ListItem} from 'candy-mobile'
const list=[{path:'/button',text:'按钮'},{path:'/404',text:'对话框'},{path:'/404',text:'列表'},{path:'/404',text:'选择器'},{path:'/404',text:'表单'},{path:'/404',text:'下拉刷新/上拉加载'},,{path:'/404',text:'滚动'},{path:'/404',text:'手势'},{path:'/404',text:'点击波纹特效'}];
export default withRouter(({history})=>{
    return (
        <Page name="home">
            <div className="ct-page__title">开始使用：</div>
            <Code lang="bash">{'npm install candy-mobile'}</Code>
            <div className="ct-page__title">组件列表：</div>
            <div className="ct-page__des">
                <List animate>{list.map((n,i)=>(
                    <ListItem key={i} onClick={()=>{
                    history.push(n.path);
                }}>{n.text}</ListItem>
                ))}
                </List>
            </div>
        </Page>
    );
})