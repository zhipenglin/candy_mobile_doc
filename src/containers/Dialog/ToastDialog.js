import Code from '../../components/Code'
import {Button,Toast} from 'candy-mobile'

export default ()=>{
    return (
        <div>
            <div className="ct-page__title">提示框：</div>
            <Code>{`
<Button type="primary" size="small" onClick={()=>{
    new Toast('错误提示框');
}}>显示错误提示框</Button>
<Button type="primary" size="small" onClick={()=>{
    new Toast('成功提示框',{type:'success'});
}}>显示成功提示框</Button>
<Button type="primary" size="small" onClick={()=>{
    new Toast('加载中...',{type:'loading'});
}}>显示加载提示框</Button>
            `}</Code>
            <Button type="primary" size="small" onClick={()=>{
    new Toast('错误提示框');
}}>显示错误提示框</Button>
            <Button type="primary" size="small" onClick={()=>{
    new Toast('成功提示框',{type:'success'});
}}>显示成功提示框</Button>
            <Button type="primary" size="small" onClick={()=>{
    new Toast('加载中...',{type:'loading'});
}}>显示加载提示框</Button>
            <div className="ct-page__title">设置自动关闭时间：</div>
            <Code>{`
<Button type="primary" size="small" onClick={()=>{
    new Toast('3s后自动关闭',{time:3000});
}}>显示提示框</Button>
<Button type="primary" size="small" onClick={()=>{
    new Toast('不自动关闭',{time:0});
}}>显示提示框</Button>
            `}</Code>
            <Button type="primary" size="small" onClick={()=>{
    new Toast('3s后自动关闭',{time:3000});
}}>显示提示框</Button>
            <Button type="primary" size="small" onClick={()=>{
    new Toast('不自动关闭',{time:0});
}}>显示提示框</Button>
        </div>
    );
}