import Page from '../Page'
import {Button,LoadingButton} from 'candy-mobile'
import Code from '../../components/Code'

export default (props)=>{
    return (
        <Page>
            <div className="ct-page__title">普通按钮：</div>
            <Code>{`
<Button onClick={()=>{
    alert('我是普通按钮');
}}>普通按钮</Button>
<Button size="small">较小按钮</Button>
<Button size="mini">迷你按钮</Button>
            `}</Code>
                <Button onClick={()=>{
                    alert('我是普通按钮');
                }}>普通按钮</Button>
            <Button size="small">较小按钮</Button>
            <Button size="mini">迷你按钮</Button>
            <div className="ct-page__title">主按钮：</div>
            <Code>{`
<Button type="primary">主按钮</Button>
<Button type="primary" size="small">较小按钮</Button>
<Button type="primary" size="mini">迷你按钮</Button>
            `}</Code>
            <Button type="primary">主按钮</Button>
            <Button type="primary" size="small">较小按钮</Button>
            <Button type="primary" size="mini">迷你按钮</Button>
            <div className="ct-page__title">幽灵按钮：</div>
            <Code>{`
<Button type="ghost">幽灵按钮</Button>
<Button type="ghost" size="small">较小按钮</Button>
<Button type="ghost" size="mini">迷你按钮</Button>
            `}</Code>
            <Button type="ghost">幽灵按钮</Button>
            <Button type="ghost" size="small">较小按钮</Button>
            <Button type="ghost" size="mini">迷你按钮</Button>
            <div className="ct-page__title">链接按钮：</div>
            <Code>{`
我是一个<Button type="link">链接按钮</Button>我可以出现在一行文字里面
            `}</Code>
            <div>
                我是一个<Button type="link">链接按钮</Button>我可以出现在一行文字里面
            </div>
            <div className="ct-page__title">链接按钮：</div>
            <Code>{`
<Button disabled onClick={()=>{
    alert('我是不可能出现的');
}}>禁用的按钮</Button>
<Button disabled type="primary">禁用的按钮</Button>
<Button disabled type="ghost">禁用的按钮</Button>
<Button disabled type="link">禁用的按钮</Button>
            `}</Code>
            <Button disabled onClick={()=>{
    alert('我是不可能出现的');
}}>禁用的按钮</Button>
            <Button disabled type="primary">禁用的按钮</Button>
            <Button disabled type="ghost">禁用的按钮</Button>
            <Button disabled type="link">禁用的按钮</Button>
            <div className="ct-page__title">加载按钮：</div>
            <Code>{`
<LoadingButton onClick={(callback)=>{
    setTimeout(()=>{
        callback(10);
    },500);
    setTimeout(()=>{
        callback(60);
    },1500);
    setTimeout(()=>{
        callback('我就是这么个性');
    },2000);
    setTimeout(()=>{
        callback();
    },2500);
}}>加载按钮</LoadingButton>
            `}</Code>
            <LoadingButton onClick={(callback)=>{
                setTimeout(()=>{
                    callback(10);
                },500);
                setTimeout(()=>{
                    callback(60);
                },1500);
                setTimeout(()=>{
                    callback('我就是这么个性');
                },2000);
                setTimeout(()=>{
                    callback();
                },2500);
            }}>加载按钮</LoadingButton>
            <div className="ct-page__title">禁用波纹效果：</div>
            <Code>{`
<Button type="primary" noWave>禁用波纹效果</Button>
            `}</Code>
            <Button type="primary" noWave>禁用波纹效果</Button>
        </Page>
    );
}