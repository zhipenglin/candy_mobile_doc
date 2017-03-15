import {Component} from 'react'
import Code from '../../components/Code'
import Page from '../Page'
import {List,ListItem,Toast,Button} from 'candy-mobile'
import './style.scss'
class AnimateList extends Component{
    itemList=[<ListItem key="0">列表1</ListItem>,
        <ListItem key="1">列表2</ListItem>,
        <ListItem key="2">列表3</ListItem>,
        <ListItem key="3">列表4</ListItem>]
    state={
        show:false
    }
    renderList(){
        return <List animate>
            {this.state.show?this.itemList:null}
        </List>
    }
    swatchList=()=>{
        this.setState({
            show:!this.state.show
        });
    }
    render(){
        return <div>
            <Button type="primary" size="small" onClick={this.swatchList}>{this.state.show?'列表出场':'列表进场'}</Button>
            {this.renderList()}
        </div>
    }
}
export default ()=>{
    return (
        <Page name="list">
            <div className="ct-page__title">普通列表：</div>
            <Code>{`
<List title="普通列表">
    <ListItem>列表1</ListItem>
    <ListItem>列表2</ListItem>
    <ListItem>列表3</ListItem>
    <ListItem>列表4</ListItem>
</List>
            `}</Code>
            <List title="普通列表">
                <ListItem>列表1</ListItem>
                <ListItem>列表2</ListItem>
                <ListItem>列表3</ListItem>
                <ListItem>列表4</ListItem>
            </List>
            <div className="ct-page__title">内嵌列表：</div>
            <Code>{`
<List inside title="内嵌列表">
    <ListItem>列表1</ListItem>
    <ListItem>列表2</ListItem>
    <ListItem>列表3</ListItem>
    <ListItem>列表4</ListItem>
</List>
            `}</Code>
            <List inside title="内嵌列表">
                <ListItem>列表1</ListItem>
                <ListItem>列表2</ListItem>
                <ListItem>列表3</ListItem>
                <ListItem>列表4</ListItem>
            </List>
            <div className="ct-page__title">可点击列表：</div>
            <Code>{`
<List title="可点击列表">
    <ListItem onClick={function(){console.log('clicked');}}>列表1</ListItem>
    <ListItem onClick={function(){console.log('clicked');}}>列表2</ListItem>
    <ListItem onClick={function(){console.log('clicked');}}>列表3</ListItem>
    <ListItem onClick={function(){console.log('clicked');}}>列表4</ListItem>
    <ListItem href="https://www.baidu.com">百度</ListItem>
    <ListItem href="https://www.zhihu.com">知乎</ListItem>
</List>
            `}</Code>
            <List title="可点击列表">
                <ListItem onClick={function(){new Toast('clicked');}}>列表1</ListItem>
                <ListItem onClick={function(){new Toast('clicked');}}>列表2</ListItem>
                <ListItem onClick={function(){new Toast('clicked');}}>列表3</ListItem>
                <ListItem onClick={function(){new Toast('clicked');}}>列表4</ListItem>
                <ListItem href="https://www.baidu.com">百度</ListItem>
                <ListItem href="https://www.zhihu.com">知乎</ListItem>
            </List>
            <div className="ct-page__title">进出场动画：</div>
            <Code>{`
class AnimateList extends Component{
    itemList=[<ListItem key="0">列表1</ListItem>,
        <ListItem key="1">列表2</ListItem>,
        <ListItem key="2">列表3</ListItem>,
        <ListItem key="3">列表4</ListItem>]
    state={
        show:false
    }
    renderList(){
        return <List animate>
            {this.state.show?this.itemList:null}
        </List>
    }
    swatchList=()=>{
        this.setState({
            show:!this.state.show
        });
    }
    render(){
        return <div>
            <Button type="primary" size="small" onClick={this.swatchList}>
                {this.state.show?'列表出场':'列表进场'}
            </Button>
            {this.renderList()}
        </div>
    }
}

<AnimateList></AnimateList>
            `}</Code>
            <AnimateList></AnimateList>
        </Page>
    );
}