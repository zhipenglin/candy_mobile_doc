import {List,ListItem,Toast,Button} from 'candy-mobile'
import Code from '../../components/Code'

export default ()=>{
    return (
        <div>
            <div className="ct-page__title">带左拉菜单的列表：</div>
            <Code>{`
<List title="带左拉菜单的列表">
    <ListItem menu={
        [{
            text:'删除',
            color:'red',
            onClick:function(){
                new Toast('删除');
            }
        }]
    }>列表1</ListItem>
    <ListItem menu={
        [{
            text:'测试测试测试测试测试测试',
            color:'red',
            onClick:function(){
                new Toast('测试测试测试测试测试测试');
            }
        }]
    } onClick={function(){}}>列表2</ListItem>
    <ListItem menu={
        [{
            text:'删除',
            color:'red',
            onClick:function(){
                new Toast('删除');
            }
        }]
    } icon={<i className="icon" style={{
        width: '60px',
        display:'block',
        height: '60px',
        background: '#ececec',
        borderRadius: '8px',
    }}></i>} onClick={function(){console.log('clicked');}}>
        <div className="title">列表4</div>
        <div className="content">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </div>
    </ListItem>
    <ListItem menu={
    [{
        text:'编辑',
        onClick:function(){
            new Toast('编辑');
        }
    },{
        text:'删除',
        color:'red',
        onClick:function(){
            new Toast('删除');
        }
    }]} onClick={function(){}}>列表2</ListItem>
</List>
            `}</Code>
            <List title="带左拉菜单的列表">
                <ListItem menu={
                    [{
                        text:'删除',
                        color:'red',
                        onClick:function(){
                            new Toast('删除');
                        }
                    }]
                }>列表1</ListItem>
                <ListItem menu={
                    [{
                        text:'测试测试测试测试测试测试',
                        color:'red',
                        onClick:function(){
                            new Toast('测试测试测试测试测试测试');
                        }
                    }]
                } onClick={function(){}}>列表2</ListItem>
                <ListItem menu={
                    [{
                        text:'删除',
                        color:'red',
                        onClick:function(){
                            new Toast('删除');
                        }
                    }]
                } icon={<i className="icon" style={{
                    width: '60px',
                    display:'block',
                    height: '60px',
                    background: '#ececec',
                    borderRadius: '8px',
                }}></i>} onClick={function(){console.log('clicked');}}>
                    <div className="title">列表4</div>
                    <div className="content">
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                    </div>
                </ListItem>
                <ListItem menu={
                [{
                    text:'编辑',
                    onClick:function(){
                        new Toast('编辑');
                    }
                },{
                    text:'删除',
                    color:'red',
                    onClick:function(){
                        new Toast('删除');
                    }
                }]} onClick={function(){}}>列表2</ListItem>
            </List>
        </div>
    );
}