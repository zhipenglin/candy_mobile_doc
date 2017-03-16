import Code from '../../components/Code'
import {Button,SelectTime,Toast} from 'candy-mobile'

export default ()=>{
    return (
        <div>
            <div className="ct-page__title">时间选择器：</div>
            <Code>{`
<Button type="primary" size="small" onClick={function(){
    new SelectTime({
        title:'时间选择器',
        onChange:function(value){
            new Toast(value,{type:'success'});
        }
    });
}}>打开选择器</Button>
            `}</Code>
            <Button type="primary" size="small" onClick={function(){
                new SelectTime({
                    title:'时间选择器',
                    onChange:function(value){
                        new Toast(value,{type:'success'});
                    }
                });
            }}>打开选择器</Button>
            <div className="ct-page__title">设置开始时间：</div>
            <Code>{`
<Button type="primary" size="small" onClick={function(){
    new SelectTime({
        start:new Date(),
        title:'时间选择器',
        onChange:function(value){
            new Toast(value,{type:'success'});
        }
    });
}}>设置开始时间</Button>
            `}</Code>
            <Button type="primary" size="small" onClick={function(){
                new SelectTime({
                    start:new Date(),
                    title:'时间选择器',
                    onChange:function(value){
                        new Toast(value,{type:'success'});
                    }
                });
            }}>设置开始时间</Button>
            <div className="ct-page__title">设置结束时间：</div>
            <Code>{`
<Button type="primary" size="small" onClick={function(){
    new SelectTime({
        end:new Date(),
        title:'时间选择器',
        onChange:function(value){
            new Toast(value,{type:'success'});
        }
    });
}}>设置结束时间</Button>
            `}</Code>
            <Button type="primary" size="small" onClick={function(){
                new SelectTime({
                    end:new Date(),
                    title:'时间选择器',
                    onChange:function(value){
                        new Toast(value,{type:'success'});
                    }
                });
            }}>设置结束时间</Button>
            <div className="ct-page__title">设置当前时间：</div>
            <Code>{`
<Button type="primary" size="small" onClick={function(){
    new SelectTime({
        current:'10:30',
        title:'时间选择器',
        onChange:function(value){
            new Toast(value,{type:'success'});
        }
    });
}}>设置当前时间</Button>
            `}</Code>
            <Button type="primary" size="small" onClick={function(){
                new SelectTime({
                    current:'10:30',
                    title:'时间选择器',
                    onChange:function(value){
                        new Toast(value,{type:'success'});
                    }
                });
            }}>设置当前时间</Button>
        </div>
    );
}