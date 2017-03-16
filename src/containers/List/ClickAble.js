import Code from '../../components/Code'
import {List,ListItem,Toast} from 'candy-mobile'

export default ()=>{
    return (
        <div>
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
        </div>
    );
}