import {List,ListItem,Toast} from 'candy-mobile'
import Code from '../../components/Code'

export default ()=>{
    return (
        <div>
            <div className="ct-page__title">多媒体列表：</div>
            <Code>{`
<List title="多媒体列表">
    <ListItem icon={<i className="icon" style={{
        width: '60px',
        display:'block',
        height: '60px',
        background: '#ececec',
        borderRadius: '8px',
    }}></i>}>
        <div className="title">列表1</div>
        <div className="content">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </div>
    </ListItem>
    <ListItem icon={<i className="icon" style={{
        width: '60px',
        display:'block',
        height: '60px',
        background: '#ececec',
        borderRadius: '8px',
    }}></i>} onClick={function(){new Toast('我被点击了')}}>
        <div className="title">列表2</div>
        <div className="content">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </div>
    </ListItem>
    <ListItem icon={<i className="icon" style={{
        width: '60px',
        display:'block',
        height: '60px',
        background: '#ececec',
        borderRadius: '8px',
    }}></i>} onClick={function(){new Toast('我被点击了')}}>
        <div className="title">列表3</div>
        <div className="content">内容内容内容内容内容内容内容</div>
    </ListItem>
    <ListItem icon={<i className="icon" style={{
        width: '60px',
        display:'block',
        height: '60px',
        background: '#ececec',
        borderRadius: '8px',
    }}></i>} onClick={function(){new Toast('我被点击了')}}>
        <div className="title">列表4</div>
        <div className="content">
            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        </div>
    </ListItem>
</List>
            `}</Code>
            <List title="多媒体列表">
                <ListItem icon={<i className="icon" style={{
                    width: '60px',
                    display:'block',
                    height: '60px',
                    background: '#ececec',
                    borderRadius: '8px',
                }}></i>}>
                    <div className="title">列表1</div>
                    <div className="content">
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                    </div>
                </ListItem>
                <ListItem icon={<i className="icon" style={{
                    width: '60px',
                    display:'block',
                    height: '60px',
                    background: '#ececec',
                    borderRadius: '8px',
                }}></i>} onClick={function(){new Toast('我被点击了')}}>
                    <div className="title">列表2</div>
                    <div className="content">
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                    </div>
                </ListItem>
                <ListItem icon={<i className="icon" style={{
                    width: '60px',
                    display:'block',
                    height: '60px',
                    background: '#ececec',
                    borderRadius: '8px',
                }}></i>} onClick={function(){new Toast('我被点击了')}}>
                    <div className="title">列表3</div>
                    <div className="content">内容内容内容内容内容内容内容</div>
                </ListItem>
                <ListItem icon={<i className="icon" style={{
                    width: '60px',
                    display:'block',
                    height: '60px',
                    background: '#ececec',
                    borderRadius: '8px',
                }}></i>} onClick={function(){new Toast('我被点击了')}}>
                    <div className="title">列表4</div>
                    <div className="content">
                        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
                    </div>
                </ListItem>
            </List>
        </div>
    );
}