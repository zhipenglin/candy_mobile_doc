import {Component} from 'react'
import Code from '../../components/Code'
import {List,ListItem,Button} from 'candy-mobile'

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
        <div>
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
        </div>
    );
}